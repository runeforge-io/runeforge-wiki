# CLAUDE.md - Runeforge Wiki

Engineering conventions for the **code** in this repo (the Astro site, its
components, and its styles). For writing rules that apply to prose, commits, and
docs content, see [AGENTS.md](./AGENTS.md) - different audience, different rules.

Runeforge Wiki is the community documentation site for League of Legends skin
and mod creation: guides for 3D modelling, animation, VFX, SFX, texturing, UI,
and the tools around them. Astro + Starlight, statically generated, deployed to
Cloudflare Workers.

## Quick reference

```bash
pnpm install          # dependencies
pnpm dev              # dev server
pnpm build            # static build (must pass before you call work done)
pnpm preview          # build + wrangler dev
pnpm astro check      # type check
pnpm lint             # eslint
pnpm format           # prettier --write
```

pnpm, TypeScript strict mode. Build output is static HTML/CSS/JS.

---

## Layout in one breath

- `src/content/docs/**` - every page, as `.md`/`.mdx`. This is the **content**;
  it is the reason the repo exists.
- `astro.config.ts` - Starlight config: sidebar tree, component overrides,
  custom CSS, fonts. Navigation is declared here, not in content.
- `src/components/*.astro` - both the components MDX pages import and the
  overrides of Starlight's own components, registered in the `components` map
  in `astro.config.ts`.
- `src/components/ui/**` - shared UI primitives, a folder per primitive.
- `src/styles/custom.css` - the site theme and every cross-component rule.
- `src/styles/tailwind.css` - the Runeforge design tokens mirrored from the app.
- `src/content.config.ts` - collection schemas (Zod), enforced at build time.

Content flows one way: `src/content/docs/*.mdx -> Starlight layout ->
components`. A component never reaches back into another page's frontmatter.

---

## Content vs code

1. **Page copy lives in content, not components.** A component reads its text
   from props or frontmatter so a writer can change wording without touching
   `.astro`.

2. **Navigation lives in `astro.config.ts`.** Don't build ad-hoc nav in content.
   The exception is the landing page's entry cards, which are a deliberate
   editorial surface. The header's section nav in `Header.astro` is a second
   exception, and its hrefs must stay in sync with the sidebar tree.

3. **Prefer `.md` over `.mdx`.** Use MDX only when the page needs a component.
   Keep MDX logic to imports and props; anything longer belongs in a component.

4. **Old URLs are redirected in `public/_redirects`,** evaluated by Cloudflare
   static assets. Astro-level redirects are deliberately avoided: they emit HTML
   stub files whose case-variant paths collide with content pages on
   case-insensitive filesystems, which breaks Windows dev machines.

---

## Component architecture

5. **Shared UI lives in `src/components/`.** Anything a second page or
   component would otherwise duplicate belongs there, not inline in an MDX
   page. Primitives that exist to be composed rather than used directly -
   the bits-ui wrappers behind `Hint.svelte` - get their own folder under
   `src/components/ui/`, one per primitive, with an `index.ts` barrel so
   callers import the set rather than each file.

6. **`.astro` by default, `.svelte` only for interactivity.** If a component has
   no client-side state, it must be `.astro` and ship zero JS.

7. **Choose the hydration directive deliberately.** `client:load` only for
   above-the-fold interactivity, `client:visible` for anything below it,
   `client:idle` for non-urgent work.

8. **Page-entry components stay thin.** Past roughly 150 lines of markup plus
   logic, split into orchestrator -> section -> per-item card.

9. **One parameterized component beats near-duplicate ones.** If two blocks
   differ only by label, colour, or icon, unify them behind a prop.

10. **Replace repeated conditional branches with a keyed lookup.** Reach for a
    lookup object when you see parallel `if`s.

11. **Icons come from Phosphor (`@phosphor-icons/core`), applied as CSS masks.**
    A masked icon takes its container's `color` and hover state for free, so
    there is no second set of rules per state. Reference the asset by package
    path (Vite resolves the URL at build time), pass it through a custom
    property, and mask it - see the sidebar section icons in `custom.css`. Stay
    on one weight; the icons in use are all `assets/bold/*-bold.svg`. Inline
    `<svg>` is acceptable only for a one-off glyph that is part of a
    component's own structure.

---

## Props and types

12. **Every component declares `interface Props`.** Never destructure an untyped
    `Astro.props`.

13. **No `any`.** Strict mode is on project-wide and the build fails on type
    errors. Unavoidable third-party gaps get a narrow local type, not an escape
    hatch.

14. **Content shapes belong in `src/content.config.ts`.** Frontmatter is
    validated by Zod at build time; a component that reads frontmatter trusts
    that schema rather than re-checking fields.

---

## Styling

15. **Scope styles per component by default.** Astro hashes each `<style>` block
    to its component. "Sharing" means either sharing _values_ (tokens) or
    promoting a rule to the global stylesheet - pick by what you are actually
    sharing.

16. **Share values with design tokens, never copied hex.** Starlight's palette
    (`--sl-color-*`) covers most needs and is already mapped to the Runeforge
    colours at the top of `custom.css`. Site-specific values are `--rf-*`
    tokens: the brand crimsons (`--rf-crimson`, `--rf-crimson-deep`,
    `--rf-glow`), the radius scale (`--rf-radius-*`), the weight scale
    (`--rf-weight-*`), the nav wash (`--rf-nav-hover`), and the chrome glass
    pair (`--rf-glass-chrome-*`).
    **Colours and font weights in CSS are always a token reference, never a raw
    literal** - pick from the scales, or mint a token in the matching
    `custom.css` section when none fits. The scrollbar and palette blocks are
    the exception: they define the literals. Leave incidental one-off sizes
    (`0.4rem`, `0.8125rem`) inline rather than minting a token per magic number.

17. **Cross-component rules go in `src/styles/custom.css`,** which Starlight
    loads via `customCss`. Keep its section banner comments and add to the right
    section rather than appending to the end.

18. **Rules that override Starlight must stay unlayered.** Starlight ships its
    own styles in `@layer starlight.core`, and an unlayered rule beats any
    layered one. That is why the sidebar and aside overrides in `custom.css`
    carry no `!important` - don't add one, check the layer first.

19. **Tailwind's preflight is the other half of that story.** Preflight lives in
    `@layer base` and resets list styles and the mono font stack, so
    `custom.css` restores them with guards (`:not([class])`,
    `:not(:where(.not-content *))`) that keep component markup out of the blast
    radius. Read the comment above those rules before touching anything
    list-related.

20. **The site is dark-only.** `ThemeProvider.astro` pins `data-theme="dark"`
    and `ThemeSelect.astro` renders nothing, so a `:root[data-theme='light']`
    block is dead code. Don't add one.

21. **Respect `prefers-reduced-motion`.** `custom.css` neutralises durations
    globally and cancels the card and pagination lifts; a component that
    animates transforms should also disable them in its own scoped block.

22. **`-webkit-` prefixed properties go before the standard property.** The
    minifier collapses a pair into whichever comes last, and Safari is the only
    engine that ever aliased the prefixed forms of `backdrop-filter` and `mask`.

---

## Starlight overrides

23. **Override through the `components` map in `astro.config.ts`,** never by
    editing anything under `node_modules`. Current overrides: `ThemeProvider`
    and `ThemeSelect` (pin dark mode), `SiteTitle` (the app's logo mark plus
    "Wiki"), `Sidebar` (reveals the current page and arms the collapse
    animation), `Header` (section nav, reading-progress bar, and the mobile
    hide-on-scroll script), and `Head` (the `<Font>` tags).

24. **Don't import Starlight internals.** Only the documented entry points are
    exported. `virtual:starlight/components/*` resolves at build time but ships
    no types, so `astro check` fails on it: import the concrete component
    instead, as `Header.astro` does for `SiteTitle`.

25. **Wrap, don't rewrite, when you only need to add behaviour.**
    `Sidebar.astro` renders Starlight's default component and layers a script
    on top rather than reimplementing the tree. When new markup must land
    _inside_ the default's layout, compose from Starlight's building blocks
    instead, as `Header.astro` does.

26. **Don't assume a component script runs before `DOMContentLoaded`.** Astro
    hands these modules to the browser through an import chain, so a bare
    `DOMContentLoaded` listener can register after the event has fired. Guard on
    `document.readyState`, as `Sidebar.astro` does.

27. **Fonts go through the `fonts` config, never a hand-written `@font-face`.**
    The API self-hosts the file into `/_astro/` either way; what it adds is the
    preload link and a metric-matched fallback face, without which the first
    paint reflows when the real font swaps in. A new family needs a `fonts`
    entry, a `<Font>` tag in `Head.astro`, and a generic family last in
    `fallbacks` to opt into the generated metrics. Note that this puts a network
    fetch in a cold-cache build.

---

## Comments

28. **A comment says only what the code cannot.** Before writing one, check the
    code and the section doc above it: if the selector, condition, or an
    existing block already carries the rationale, write nothing. Never narrate
    current values ("at 72% the frost stays visible...") - they go stale on the
    next tweak.

29. **One or two lines is the budget.** State the single non-obvious
    constraint and stop. No problem-statement preamble, no trade-off
    narration, no describing what neighbouring rules do.

30. **Structure multi-point comments as lists.** When a comment covers more
    than a couple of distinct points, open with a one-line summary and put the
    points in a `-` or numbered list, as the mobile hide-on-scroll block in
    `custom.css` does. Single-point comments stay plain sentences.

31. **Open with what the thing is, not what it does.** The first words are a
    noun phrase naming the construct, not a verb describing its effect.
    [AGENTS.md](./AGENTS.md#comments) carries the rule and a worked
    before/after example from `custom.css`.

---

## Verify before you call it done

- `pnpm build` passes with no errors, and the link validator reports no broken
  internal links.
- `pnpm astro check` is clean for the files you touched.
- `pnpm lint` reports nothing new.
- `pnpm format` has been run, or the file matches `.prettierrc`.
