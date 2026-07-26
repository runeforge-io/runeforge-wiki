# Agent instructions

Read this before writing anything in this repo. It applies to Claude Code, Codex, Cursor, and any
other coding agent.

## Writing rules

- **No em dashes (U+2014).** Use a plain hyphen `-` for the parenthetical break. En dashes are
  fine in numeric ranges (2013–2024), just never as a sentence break.
- **No smart quotes, smart apostrophes, or the ellipsis character** - ASCII `'`, `"`, and `...`.
- **Emoji in markdown headings are fine used sparingly**, as a scanning anchor - one per heading,
  never on every heading, never as enthusiasm. None in code, commits, or PR titles.
- **Exclamation marks are fine** for real warnings. Not for manufactured excitement ("Happy
  hacking!").
- **No contrast clichés** ("it's not just X, it's Y"), **no rule-of-three padding** ("fast,
  reliable, and easy to use"), **no hollow openers** ("it's worth noting that", "let's dive in").
- **Judge vocabulary by substance, not by a blocklist.** Delve, leverage, seamless, robust,
  comprehensive, elevate, streamline, cutting-edge, plethora: any of these is filler when it
  stands in for a concrete claim, and fine when a concrete claim backs it. With nothing concrete
  behind the word, use the plain one.
- **Bold marks one term, not half the sentence.** Headings are navigation, not decoration.
- **Second person, present tense, active voice.** Concrete numbers or no claim at all.
- **Say what failed.** Report skipped steps and failing tests plainly; don't claim verification
  you didn't perform.

Existing pages under `src/content/docs/` predate these rules and are not all compliant. Apply
them to what you write; don't launch a repo-wide rewrite unasked.

## Scope

This wiki covers Runeforge and the craft of making mods for it. The wider mod ecosystem - file
formats, the toolkit libraries, tooling that is not Runeforge-specific - belongs to the
[LTK Wiki](https://wiki.leaguetoolkit.dev).

- **Link out rather than duplicate.** When a topic is ecosystem-level and not tied to Runeforge,
  link to the LTK Wiki instead of writing a second copy here. A second copy drifts, and the
  reader ends up with two answers and no way to tell which is current.
- **Runeforge's own surface stays here.** Posting, moderation, Creator status, what a project page
  requires, and the art and audio guides are ours to document.

## Accuracy

This wiki documents community reverse-engineering of League of Legends assets and third-party
tools. Invented detail is the worst failure mode available to you.

- **Never state a menu path, CLI flag, plugin version, file extension, or tool behaviour you
  haven't read in this repo or confirmed in the tool.** Model priors about Maya, Blender, Wwise,
  or the League file formats are not evidence.
- **Label guesses as guesses.** "Probably fixed in 2024.1; only 2023 is confirmed working."
- **Don't fabricate versions, dates, download links, or author names.** Guides here carry
  attribution; getting it wrong misassigns someone's work.
- **Screenshots go stale.** When a step no longer matches the current UI, say so in the page
  rather than describing an interface you cannot see.

## Code

- Match the surrounding code: naming, error handling, module layout, and comment density.
- `pnpm build`, `pnpm astro check`, and `pnpm lint` must pass before you call the work done.
- Run `pnpm format`, or match `.prettierrc` by hand (2-space, single quotes, 100 columns).

### Comments

- **Comment _why_, not _what_** - in a line or two. A comment that reads like a design-decision
  writeup gets cut, not kept.
- **Open with what the thing is, not what it does or creates.** The first words are a noun phrase
  naming the construct. "Animatable stops for the card ring", not "Registered so the ramp
  interpolates on hover". A comment that opens with a verb is restating the declaration beneath it
  in prose, and a reader who already read the declaration learns nothing.
- **Mechanism narration is not rationale.** How the layers stack, what gets painted, what the
  browser would otherwise do - the code shows all of that. Keep the one constraint a reader would
  violate by accident; drop the rest.

#### A comment that got this wrong

From an earlier draft of `src/styles/custom.css`. Usage-first opener, then a paragraph explaining
the CSS properties underneath:

```css
/* The crimson ramp as the card's edge. `border-color` takes no gradient, so
   the ramp fills the border box and an opaque surface layer clipped to the
   padding box covers all of it but the 1px border ring. Both layers are
   painted, never subtracted - a hollowed-out mask leaves corner gaps at
   fractional device pixel ratios. The card is opaque as a result: it must sit
   on the page background, not on a tinted surface. */
```

It opens on a metaphor ("as the card's edge") and then narrates four declarations that are visible
three lines down. Rewritten:

```css
/* Gradient border for link cards: ramp on the border box, opaque fill clipped
   to the padding box. Opaque by construction - needs the page background under
   it, not a tinted surface. */
```

It names its subject in the first four words, then spends the rest of its budget on the single
fact the code cannot show: the opacity constraint.

## Commits

- Conventional Commits, imperative, lowercase after the type, under ~72 chars, no trailing period:
  `fix: restore list markers stripped by preflight`
- Body says why and what behavior changed. Not a file-by-file list.
- **No AI attribution trailers.**
- Don't commit or push unless asked.
