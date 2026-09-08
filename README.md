# Runeforge Wiki

Community documentation for League of Legends skin and mod creation: guides for
3D modelling, animation, VFX, SFX, texturing, UI, and the tools around them.

Live at [wiki.runeforge.dev](https://wiki.runeforge.dev).

## Contributing

Guides are Markdown files under `src/content/docs/`. You do not need to run the
site locally to fix a typo - use the "Edit page" link at the bottom of any page
and GitHub will walk you through the pull request.

For anything larger, the wiki's own guides are the reference:

- [Posting Guide](https://wiki.runeforge.dev/posting-guide/) - what belongs on
  the wiki and how a contribution gets reviewed.
- [Style Guide](https://wiki.runeforge.dev/posting-guide/style-guide/) - headings,
  admonitions, images, and tone.
- [Authoring Locally](https://wiki.runeforge.dev/posting-guide/local-authoring/) -
  running the site on your machine.

## Development

```sh
pnpm install
pnpm dev              # dev server at localhost:4321
pnpm build            # static build; fails on broken internal links
pnpm preview          # build, then serve through wrangler
```

Astro + Starlight, statically generated, deployed to Cloudflare Workers. Node 22+
and pnpm 11+.

Engineering conventions live in [CLAUDE.md](./CLAUDE.md); writing conventions in
[AGENTS.md](./AGENTS.md).

## History

The wiki ran on Wiki.js until 2026. The raw export is preserved on the
`archive/wikijs-export` branch and the `wikijs-export-final` tag. Old URLs are
redirected by `public/_redirects`.
