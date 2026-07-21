/**
 * One-shot Wiki.js -> Starlight content transformer (Phase 1, commit 2).
 *
 * Rewrites every .md under src/content/docs in place:
 *   - frontmatter: keep title/description, published:false -> draft:true,
 *     date -> lastUpdated, drop editor/dateCreated/tags
 *   - {.is-info|warning|danger|success} blockquotes -> ::: asides
 *   - strip {.links-list} / {.grid-list} lines and {.align-center} suffixes
 *   - mark {.tabset} headings with an HTML comment for Phase 2 conversion
 *   - image size suffixes (=WxH / =xH / =W%x) -> <img> with width/height
 *   - internal links (markdown + href): strip old domain and /en prefix,
 *     remap against the generated route map (Starlight lowercases slugs),
 *     rewrite #h- anchor prefixes
 *
 * Code fences and inline code spans are left untouched (posting-guide.md
 * documents the old syntax inside code spans on purpose).
 *
 * Re-runnable until cutover; prints a report and exits 1 on unresolved links
 * so problems are visible in the terminal. Delete after the migration ships.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DOCS = join(import.meta.dirname, '..', 'src', 'content', 'docs');
const OLD_DOMAIN = /^https?:\/\/wiki\.runeforge\.io/;
const ASSET_EXT = /\.(png|jpe?g|gif|webp|svg|ico|mp4|webm|zip|rar|7z|pdf|dds|tex)$/i;

// Old Wiki.js paths that have no 1:1 file today -> where they should point.
// Filled in from the unresolved-links report; extend as triage decides.
const MANUAL_ROUTES = new Map([
  // pages linked under a path they never lived at (or a former name)
  ['/specific-guide/animation/maya/fix-broken-animations', '/specific-guide/skin-fixes/fix-broken-animations'],
  ['/specific-guide/coding/fix-breaking-vfx', '/specific-guide/skin-fixes/fix-breaking-vfx'],
  ['/specific-guide/3d-modelling/fixing_broken_face_normals', '/specific-guide/skin-fixes/fixing_broken_face_normals'],
  [
    '/specific-guide/3d-modelling/replacing-champion-with-a-completely-different-model',
    '/specific-guide/3d-modelling/replacing-champion-with-different-model',
  ],
  // draft page (published: false, excluded from build); links to it are
  // "help us write this" calls to action -> send to the posting guide until
  // the Phase 2 contributor-flow rework
  ['/posting-guide/apply-as-contributor', '/posting-guide'],
]);

// filetypes is a table page with no headings: those anchors never resolved
const DROP_ANCHOR_PATHS = new Set(['/specific-guide/filetypes']);

// Wiki.js sluggified headings differently than Starlight; keyed by the NEW
// route + old anchor, values read from the generated HTML ids.
const ANCHOR_FIXES = new Map([
  ['/core-guides/tools#coding-bin-editing', 'code-bin-editing'],
  ['/core-guides/tools#coding', 'code-bin-editing'],
  ['/core-guides/tools#sound-fx-audio', 'sound-fx--audio'],
  [
    '/core-guides/downloadable-assets#mapskin-ground-texture-photoshop-template',
    'mapskin-ground-texture-photoshop-template2',
  ],
]);

const report = {
  admonitions: 0,
  admonitionFiles: new Set(),
  strippedAttrs: 0,
  tabsetFiles: new Set(),
  images: 0,
  imageFiles: new Set(),
  links: 0,
  unresolved: [],
  unknownFm: [],
  skippedInCode: 0,
  drafts: [],
};

/** Starlight slugs each path segment with github-slugger; for these file
 * names that amounts to lowercasing (underscores and hyphens survive). */
const slugSegment = (s) => s.toLowerCase();

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) yield p;
  }
}

// ---- route map: old Wiki.js path -> new Starlight route -------------------
const files = [...walk(DOCS)];
const routeMap = new Map();
for (const f of files) {
  const rel = relative(DOCS, f).replace(/\.mdx?$/, '').split(sep);
  const oldPath = '/' + rel.join('/');
  const newPath = '/' + rel.map(slugSegment).join('/');
  routeMap.set(oldPath, newPath);
  routeMap.set(oldPath.toLowerCase(), newPath); // tolerate case-mismatched links
}
for (const [k, v] of MANUAL_ROUTES) routeMap.set(k, v); // manual overrides win

// ---- helpers --------------------------------------------------------------
/** True if index i on the line falls inside an inline code span. */
function inCodeSpan(line, i) {
  let ticks = 0;
  for (let j = 0; j < i; j++) if (line[j] === '`') ticks++;
  return ticks % 2 === 1;
}

function mapTarget(raw, file, lineNo) {
  let target = raw.replace(OLD_DOMAIN, '');
  if (target.startsWith('/http')) return target.slice(1); // content typo: "/https://…"
  if (!target.startsWith('/') && !target.startsWith('#')) return null; // external / relative: untouched
  // anchor-only link on the same page
  if (target.startsWith('#')) {
    return target.startsWith('#h-') ? '#' + target.slice(3) : null;
  }
  target = target.replace(/^\/en(?=\/|$)/, '') || '/';
  const [path, anchor] = target.split('#');
  let mappedAnchor = anchor?.startsWith('h-') ? anchor.slice(2) : anchor;
  const mapped = routeMap.get(path) ?? routeMap.get(path.toLowerCase());
  if (mapped) {
    if (DROP_ANCHOR_PATHS.has(mapped)) mappedAnchor = undefined;
    else if (mappedAnchor) mappedAnchor = ANCHOR_FIXES.get(`${mapped}#${mappedAnchor}`) ?? mappedAnchor;
    return mapped + (mappedAnchor ? '#' + mappedAnchor : '');
  }
  const suffix = mappedAnchor ? '#' + mappedAnchor : '';
  // any path whose last segment has an extension is an in-repo asset: unchanged
  if (ASSET_EXT.test(path) || /\.[a-z0-9]+$/i.test(path.split('/').pop())) return path + suffix;
  report.unresolved.push(`${relative(DOCS, file)}:${lineNo}  ${raw}`);
  return null; // leave unchanged for manual triage
}

function rewriteLinks(line, file, lineNo) {
  // markdown targets: ](...) — tolerates one level of balanced parens in the URL
  let out = line.replace(/\]\(((?:[^()\s]|\([^()]*\))+)\)/g, (m, target, off) => {
    if (inCodeSpan(line, off)) {
      report.skippedInCode++;
      return m;
    }
    const mapped = mapTarget(target, file, lineNo);
    if (mapped === null || mapped === target) return m;
    report.links++;
    return `](${mapped})`;
  });
  // raw HTML: href="..."
  out = out.replace(/href="([^"]+)"/g, (m, target, off) => {
    if (inCodeSpan(out, off)) {
      report.skippedInCode++;
      return m;
    }
    const mapped = mapTarget(target, file, lineNo);
    if (mapped === null || mapped === target) return m;
    report.links++;
    return `href="${mapped}"`;
  });
  return out;
}

function rewriteImages(line, file) {
  return line.replace(
    /!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))+)\s+=([0-9]+%?)?x([0-9]+%?)?\)/g,
    (m, alt, src, w, h, off) => {
      if (inCodeSpan(line, off)) {
        report.skippedInCode++;
        return m;
      }
      report.images++;
      report.imageFiles.add(relative(DOCS, file));
      const attrs = [`src="${src}"`, `alt="${alt}"`];
      const styles = [];
      if (w) (w.endsWith('%') ? styles : attrs).push(w.endsWith('%') ? `width:${w}` : `width="${w}"`);
      if (h) (h.endsWith('%') ? styles : attrs).push(h.endsWith('%') ? `height:${h}` : `height="${h}"`);
      if (styles.length) attrs.push(`style="${styles.join(';')}"`);
      return `<img ${attrs.join(' ')} />`;
    },
  );
}

const ASIDE_KIND = { info: 'note', warning: 'caution', danger: 'danger', success: 'tip' };

// ---- frontmatter ----------------------------------------------------------
function transformFrontmatter(lines, file) {
  const out = [];
  let draft = false;
  let lastUpdated = null;
  for (const line of lines) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) {
      out.push(line);
      continue;
    }
    const [, key, value] = m;
    switch (key) {
      case 'title':
        out.push(line);
        break;
      case 'description':
        if (value.trim()) out.push(line);
        break;
      case 'published':
        if (value.trim() === 'false') draft = true;
        break;
      case 'date':
        lastUpdated = value.trim().slice(0, 10);
        break;
      case 'tags':
      case 'editor':
      case 'dateCreated':
        break;
      default:
        report.unknownFm.push(`${relative(DOCS, file)}: ${key}`);
        out.push(line);
    }
  }
  if (draft) {
    out.push('draft: true');
    report.drafts.push(relative(DOCS, file));
  }
  if (lastUpdated) out.push(`lastUpdated: ${lastUpdated}`);
  return out;
}

// ---- per-file body transform ----------------------------------------------
function transformBody(lines, file, fmOffset) {
  const out = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const lineNo = fmOffset + i + 1;
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }

    // {.is-*} attribute: convert the enclosing blockquote to an aside.
    // The attribute appears on its own line, at the end of the quote's last
    // line ("text{.is-danger}"), or on a trailing ">" line (">{.is-info}").
    // Wiki.js blockquotes use lazy continuation: only the first line needs
    // ">", following non-blank lines still belong to the quote. So take the
    // contiguous non-blank run above the attribute, back to the first ">".
    const adm = line.match(/\{\.is-(info|warning|danger|success)\}\s*$/);
    if (adm && !inCodeSpan(line, adm.index)) {
      const rest = line.slice(0, adm.index).replace(/\s+$/, '');
      if (rest && rest.trim() !== '>') out.push(rest); // attr shared the quote's last line
      const run = [];
      while (out.length && out[out.length - 1].trim() !== '') run.unshift(out.pop());
      const start = run.findIndex((l) => /^\s*>/.test(l));
      if (start !== -1) {
        out.push(...run.slice(0, start)); // non-quote lines above stay put
        const quote = run.slice(start).map((l) => l.replace(/^\s*>\s?/, ''));
        out.push(`:::${ASIDE_KIND[adm[1]]}`, ...quote, ':::');
        report.admonitions++;
        report.admonitionFiles.add(relative(DOCS, file));
      } else {
        out.push(...run);
        report.unresolved.push(`${relative(DOCS, file)}:${lineNo}  {.is-${adm[1]}} without blockquote`);
      }
      continue;
    }

    // standalone list/grid attribute lines: drop
    if (/^\s*\{\.(links-list|grid-list)\}\s*$/.test(line)) {
      report.strippedAttrs++;
      continue;
    }

    // tabset heading: strip attr, leave a marker comment for Phase 2
    if (/\{\.tabset\}/.test(line)) {
      out.push('<!-- wikijs:tabset -->');
      line = line.replace(/\s*\{\.tabset\}/, '');
      report.tabsetFiles.add(relative(DOCS, file));
    }

    // {.align-center} suffix: strip (no Starlight equivalent worth keeping)
    if (/\{\.align-center\}/.test(line)) {
      line = line.replace(/\s*\{\.align-center\}/, '');
      report.strippedAttrs++;
    }

    line = rewriteImages(line, file);
    line = rewriteLinks(line, file, lineNo);
    out.push(line);
  }
  return out;
}

// ---- main -----------------------------------------------------------------
for (const file of files) {
  const original = readFileSync(file, 'utf8');
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const lines = original.split(/\r?\n/);
  let fmEnd = -1;
  if (lines[0]?.trim() === '---') fmEnd = lines.findIndex((l, i) => i > 0 && l.trim() === '---');
  let result;
  if (fmEnd > 0) {
    const fm = transformFrontmatter(lines.slice(1, fmEnd), file);
    const body = transformBody(lines.slice(fmEnd + 1), file, fmEnd + 1);
    result = ['---', ...fm, '---', ...body].join(eol);
  } else {
    report.unknownFm.push(`${relative(DOCS, file)}: NO FRONTMATTER`);
    result = transformBody(lines, file, 0).join(eol);
  }
  if (result !== original) writeFileSync(file, result);
}

// ---- report ---------------------------------------------------------------
const list = (set) => [...set].map((f) => `  ${f}`).join('\n') || '  (none)';
console.log(`Files processed: ${files.length}`);
console.log(`Admonitions converted: ${report.admonitions} in ${report.admonitionFiles.size} files`);
console.log(`Attribute lines stripped (links-list/grid-list/align-center): ${report.strippedAttrs}`);
console.log(`Sized images -> <img>: ${report.images} in ${report.imageFiles.size} files`);
console.log(`Links rewritten: ${report.links}`);
console.log(`Matches skipped inside code spans: ${report.skippedInCode}`);
console.log(`\nDraft pages (published: false):\n${list(report.drafts)}`);
console.log(`\nTabset pages (need Phase 2 <Tabs> conversion):\n${list(report.tabsetFiles)}`);
console.log(`\nUnknown frontmatter keys:\n${list(report.unknownFm)}`);
console.log(`\nUNRESOLVED LINKS (${report.unresolved.length}):\n${list(report.unresolved)}`);
process.exit(report.unresolved.length ? 1 : 0);
