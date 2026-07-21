import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://wiki.runeforge.dev',
  output: 'static',

  // Permanent redirects from old Wiki.js URLs (including /en/… locale-prefixed
  // variants) are added here during Phase 3 of the migration.
  redirects: {},

  integrations: [
    starlight({
      title: 'Runeforge Wiki',
      description:
        'Community wiki for League of Legends skin and mod creation - guides for 3D modelling, animation, VFX, SFX, texturing, and more.',
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/runeforge-io/runeforge-wiki',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/runeforge-io/runeforge-wiki/edit/main/',
      },
      customCss: ['./src/styles/tailwind.css', './src/styles/custom.css'],
      plugins: [starlightLinksValidator()],
      // Sidebar is hand-authored in Phase 3 from the Wiki.js {.links-list}
      // landing pages. Until then, autogenerate from the content tree.
      sidebar: [],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
