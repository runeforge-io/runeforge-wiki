---
title: Authoring Locally
description: Set up the wiki on your own machine to write and preview guides with live reload before opening a pull request.
lastUpdated: 2026-07-22
tags:
  type: guide
  level: intermediate
  subject: [wiki, installation]
  tool: [vscode]
---

For quick fixes, the GitHub editor described in [How to Post](/posting-guide) is all you need. For writing whole guides it's much nicer to run the wiki on your own machine: you see the rendered page while you type, images work immediately, and broken links are caught before you open a pull request.

## What you need

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) version 20 or newer
- [pnpm](https://pnpm.io/installation) — the package manager this repository uses. The quickest install once Node.js is set up:

```sh
npm install -g pnpm
```

## First-time setup

1. [Fork the repository](https://github.com/runeforge-io/runeforge-wiki/fork) on GitHub. Skip this if you have write access.
2. Clone your fork and install the dependencies:

```sh
git clone https://github.com/your-username/runeforge-wiki
cd runeforge-wiki
pnpm install
```

This only needs to be done once.

## Writing with live preview

Start the development server:

```sh
pnpm dev
```

The wiki now runs at `http://localhost:4321`. Open a page there, edit its file under `src/content/docs/`, and the browser refreshes on save — you always see exactly what readers will see.

Any text editor works. If you don't have a favorite yet, [Visual Studio Code](/core-guides/tools/visual-studio) previews Markdown nicely, and [Obsidian](/core-guides/tools/obsidian) is a good middle ground between plain text and a rich editor.

To create a new page, copy the [guide template](https://github.com/runeforge-io/runeforge-wiki/blob/main/src/content/docs/templates/basic-guide-template.md) into the right folder — the folder path is the URL. [How to Post](/posting-guide#creating-a-new-page) explains where pages belong, and the [Style Guide](/posting-guide/style-guide) covers formatting.

## Adding images

Put your files in a folder with your name under `public/user-pictures/`:

```
public/user-pictures/your-name/my-cool-guide/step-1.png
```

Then reference them with a root-relative path and a descriptive alt text:

```md
![The Bind Skin options window](/user-pictures/your-name/my-cool-guide/step-1.png)
```

The dev server picks up new files without a restart. Keep filenames lowercase and space-free, and compress large screenshots.

## The visual editor

:::caution
The visual editor is experimental and may change or be replaced. Known limitation: **don't save pages that contain images through it** — image references currently get rewritten incorrectly. Edit those pages in a text editor instead. Text-only pages and frontmatter edits are fine.
:::

While `pnpm dev` is running, a browser-based editor is available at `http://localhost:4321/keystatic`. It lists every guide, edits the page details (title, description, last-updated date) as form fields, and offers a rich text editor for the content — saving writes straight back to the Markdown files, so your changes show up in `git status` as usual.

## Before you push

Run a production build:

```sh
pnpm build
```

This runs the same checks as the pull request pipeline, including the internal-link validator — a typo'd link fails the build here instead of in review.

## Opening the pull request

Commit your changes on a branch, push, and open a pull request against `main`:

```sh
git checkout -b my-cool-guide
git add .
git commit -m "Add guide: my cool guide"
git push -u origin my-cool-guide
```

GitHub shows a **Compare & pull request** button after the push. If you added a new page, mention in the PR description where it should appear in the sidebar — see [How to Post](/posting-guide#creating-a-new-page) for details on the review flow.
