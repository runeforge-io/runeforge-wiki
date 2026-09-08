---
title: How to Post
description: How to create and edit wiki pages through GitHub, from small fixes to whole new guides.
lastUpdated: 2026-07-22
tags:
  type: guide
  level: beginner
  subject: [wiki]
---

The wiki lives in a GitHub repository: [runeforge-io/runeforge-wiki](https://github.com/runeforge-io/runeforge-wiki). Every page is a Markdown file, and all changes go through pull requests — this page explains the whole flow.

Before writing, also read the [Style Guide](/posting-guide/style-guide) so your page renders correctly and matches the rest of the wiki.

## Editing an existing page

The quickest way: click **Edit page** at the bottom of any wiki page. GitHub opens the file in its editor — make your change, then choose **Propose changes**. GitHub will fork the repository for you and open a pull request, which a maintainer reviews and merges.

You don't need any extra permissions to propose an edit. If the content you add is wrong, anyone else can propose changing it again — including mods. Abusing this (vandalism, sneaking in bad information) will get you permanently excluded from the Runeforge Wiki.

## Creating a new page

1. Decide where the page belongs. Pages live under `src/content/docs/`, and the folder is the URL — a texturing guide goes in `src/content/docs/specific-guide/texturing/your-guide-name.md`.
2. Name the file in lowercase with dashes: `my-cool-guide.md`. No spaces.
3. Start from the [guide template](https://github.com/runeforge-io/runeforge-wiki/blob/main/src/content/docs/templates/basic-guide-template.md) and fill in the frontmatter:

```md
---
title: My Cool Guide
description: One sentence saying what the reader will learn.
lastUpdated: 2026-07-22
---
```

4. Open a pull request with the new file. Mention in the PR description where the page should appear in the sidebar — the sidebar is maintained by hand in `astro.config.ts`, and a maintainer will add the entry (or you can add it yourself if you're comfortable editing the config).

:::note
Not sure where a page fits? Ask on the Runeforge Discord before opening the PR — we're happy to help.
:::

## Adding images and files

Images live **next to the guide that uses them**, so a page and its screenshots
travel together. A guide with images is a folder holding an `index.md`:

```
src/content/docs/specific-guide/ui/custom-cursors/
  index.md
  step-1.png
  step-2.png
```

Reference them with a relative path and a descriptive alt text:

```md
![The Bind Skin options window](./step-1.png)
```

That relative form is what puts the image through the build's optimizer: it is
resized, converted to WebP, and given width and height so the page does not jump
while it loads. Animated GIFs stay animated. A path that starts with `/` skips
all of that, so use `./`.

Keep filenames lowercase and space-free. Do not set a size on the image - the
site caps tall screenshots for you.

If your guide is a single `.md` file and you are adding the first image to it,
turn it into a folder first: create the folder, move the page into it as
`index.md`, and put the image beside it. The page's URL does not change.

Two kinds of file cannot sit next to the guide, because they bypass the
optimizer. Videos (`.mp4` only) go in `public/guide-media/<guide-name>/` and
downloads in `public/downloads/`, both referenced with a leading `/`. Or embed
video from YouTube - see the [Style Guide](/posting-guide/style-guide#videos)
for both forms.

## Previewing your changes

For bigger contributions it's worth running the wiki locally — you get a live preview at `http://localhost:4321` that reloads as you edit, and you can run the same checks as the PR pipeline before pushing. The [Authoring Locally](/posting-guide/local-authoring) guide walks through the whole setup.

## Writing the content

Everything about formatting — headings, images, notes, lists, links, videos — is in the [Style Guide](/posting-guide/style-guide). The short version:

- Never use `#` headings in the body; start at `##`. The frontmatter `title` is the page heading.
- Use `:::note` / `:::caution` asides instead of bold or ALL CAPS warnings.
- Give images real alt text, not the filename.
- Internal links are root-relative paths like `[Obsidian](/core-guides/tools/obsidian)` — no domain, no file extension.

You can publish unfinished guides as long as you keep working on them — mark work-in-progress sections with a `:::note` so readers know.
