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

## Uploading images and files

Images live in the repository under `public/user-pictures/`. Create a folder with your name (lowercase, no spaces — use `-` or `_`) and put your files in it:

```
public/user-pictures/your-name/my-cool-guide/step-1.png
```

Then reference them from your page with a root-relative path and a descriptive alt text:

```md
![The Bind Skin options window](/user-pictures/your-name/my-cool-guide/step-1.png)
```

Keep filenames lowercase and space-free, and compress large screenshots — the whole wiki ships these files to every reader.

Videos can be uploaded the same way (`.mp4` only) or embedded from YouTube — see the [Style Guide](/posting-guide/style-guide#videos) for both forms.

## Previewing your changes

For bigger contributions it's worth running the wiki locally — you get a live preview at `http://localhost:4321` that reloads as you edit, and you can run the same checks as the PR pipeline before pushing. The [Authoring Locally](/posting-guide/local-authoring) guide walks through the whole setup.

## Writing the content

Everything about formatting — headings, images, notes, lists, links, videos — is in the [Style Guide](/posting-guide/style-guide). The short version:

- Never use `#` headings in the body; start at `##`. The frontmatter `title` is the page heading.
- Use `:::note` / `:::caution` asides instead of bold or ALL CAPS warnings.
- Give images real alt text, not the filename.
- Internal links are root-relative paths like `[Obsidian](/core-guides/tools/obsidian)` — no domain, no file extension.

You can publish unfinished guides as long as you keep working on them — mark work-in-progress sections with a `:::note` so readers know.
