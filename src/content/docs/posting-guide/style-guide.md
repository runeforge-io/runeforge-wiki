---
title: Style Guide
description: How to format guide pages so they render correctly and look consistent across the wiki.
lastUpdated: 2026-07-22
---

Follow these rules when writing or editing a page. They exist because the wiki runs on [Starlight](https://starlight.astro.build/), which renders Markdown differently than the old wiki.js site did — some old habits now break pages or make them look bad.

## Headings

**Never use `#` (H1) in the page body.** The `title` in the frontmatter already renders as the page's big heading. A `#` in the body creates a second, oversized heading — often a duplicate of the title.

Start your sections at `##` and nest with `###`. Only `##` and `###` headings show up in the "On this page" sidebar, so `#` headings also break navigation.

```md
---
title: Replacing a Champion Model
description: How to swap a champion with a custom model.
---

Intro paragraph — no heading needed, and don't repeat the title.

## Required Tools

## Finding Your Model

### If Your Model Has a Skeleton
```

Don't use **bold text** as a fake heading either — real headings get anchor links and appear in the page navigation; bold text doesn't.

## Frontmatter

Every page needs:

```md
---
title: Short Title in Title Case
description: One sentence saying what the reader will learn.
lastUpdated: 2026-07-22
---
```

The `description` is shown in search results and link previews — write a real sentence, not a placeholder.

## Images

Use standard Markdown images with a **descriptive alt text**, not the filename:

```md
<!-- Good -->
![The Bind Skin options window with max influences set to 3](/user-pictures/you/guide/bind-options.png)

<!-- Bad -->
![14.png](/user-pictures/you/guide/14.png)
```

:::caution
The old wiki.js sizing syntax (`![x](image.png =x400)` or `=350x200`) **does not work anymore** and renders as a broken image. Remove it wherever you see it.
:::

If an image really needs a fixed size, use an HTML tag:

```html
<img src="/user-pictures/you/guide/bind-options.png" alt="The Bind Skin options window" height="400" />
```

For side-by-side comparisons, put the images next to each other and label them in the text — don't build separator lines out of dashes:

```md
<!-- Bad -->
------BEFORE------------AFTER------

<!-- Good -->
Before (left) and after (right):

<img src="/img/before.png" alt="Skeleton before alignment" height="300" /> <img src="/img/after.png" alt="Skeleton after alignment" height="300" />
```

## Notes and warnings

Use Starlight asides instead of ALL CAPS, bold shouting, or colored HTML:

```md
:::note
League only accepts `dds` or `tex` files, depending on your bin.
:::

:::caution
Scale your model, not the League champion!
:::

:::tip
Hold `J` while rotating to snap to hard angles.
:::
```

## Lists

If a paragraph chains three or more actions ("First do X. Then do Y. After that Z."), write it as a numbered list instead — steps are much easier to follow and re-find when each one is its own item:

```md
<!-- Bad -->
First open the project settings, then change the conversion to Vorbis Quality High, then import your audio files and finally generate the soundbank.

<!-- Good -->
1. Open the project settings.
2. Change the conversion to Vorbis Quality High.
3. Import your audio files.
4. Generate the soundbank.
```

The same goes for a sentence that enumerates three or more tools, files, or options — break it into a bullet list with a short intro line.

Keep list items together — don't insert loose "And" / "OR" paragraphs between them, and don't add blank lines between every item:

```md
<!-- Bad -->
- [Obsidian](/core-guides/tools/obsidian)

And

- [Maya 2023](/core-guides/tools/maya)

<!-- Good -->
You need [Obsidian](/core-guides/tools/obsidian) plus **one** 3D program:

- [Maya 2023](/core-guides/tools/maya) with the [lemon3d plugin](https://github.com/tarngaina/LtMAO)
- [Blender](/core-guides/tools/blender)
```

## Things that no longer work

These are wiki.js features — delete them on sight:

| Old syntax | Replacement |
| --- | --- |
| `{.links-list}` after a list | A plain Markdown list |
| `![x](img.png =x400)` sizing | `<img>` tag with `height` attribute |
| `<br>` to force spacing | A blank line between paragraphs |
| `<div align="left">` wrappers | Nothing — content is left-aligned by default |
| `<u style="color:orange">` | An `:::caution` aside |

## Collapsible sections

`<details>` blocks still work and are the right tool for optional side-quests inside a guide:

```html
<details>
<summary>If your model already has a skeleton</summary>

Content here. Leave a blank line after the summary so Markdown inside renders.

</details>
```

## Linking

Internal links are root-relative paths without the domain and without a file extension:

```md
[Obsidian](/core-guides/tools/obsidian)
[jump to a section](/specific-guide/filetypes#skn)
```

Links are validated at build time — a typo in an internal link will fail the deploy, so copy the path from the address bar.

## Videos

Embed YouTube videos as a linked thumbnail (no autoplaying iframes):

```html
<a href="https://www.youtube.com/watch?v=VIDEO-ID">
  <img src="https://img.youtube.com/vi/VIDEO-ID/0.jpg" alt="What the video shows" style="width:75%" />
</a>
```

For uploaded clips, use `.mp4`:

```html
<video width="480" controls>
  <source src="/user-pictures/you/guide/clip.mp4" type="video/mp4" />
</video>
```
