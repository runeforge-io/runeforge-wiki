import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://wiki.runeforge.dev',
  output: 'static',

  // Old-URL redirects live in public/_redirects (evaluated server-side by
  // Cloudflare Workers static assets). Astro-level redirects are avoided on
  // purpose: they emit HTML stub files whose case-variant paths collide with
  // content pages on case-insensitive filesystems (Windows dev machines).

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
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.com/invite/runeforge',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/runeforge-io/runeforge-wiki/edit/main/',
      },
      customCss: ['./src/styles/tailwind.css', './src/styles/custom.css'],
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Get Started', slug: 'core-guides/get-started' },
            { label: 'FAQ', slug: 'faq' },
          ],
        },
        {
          label: 'Core Guides',
          items: [
            { label: 'Overview', slug: 'core-guides' },
            {
              label: 'Tools',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'core-guides/tools' },
                { label: 'CS-LoL Manager', slug: 'core-guides/tools/cslolmanager' },
                { label: 'Obsidian', slug: 'core-guides/tools/obsidian' },
                { label: 'LtMAO', slug: 'core-guides/tools/ltmao' },
                { label: 'Blender', slug: 'core-guides/tools/blender' },
                {
                  label: 'Autodesk Maya',
                  collapsed: true,
                  items: [
                    { label: 'Maya & LoL-Maya', slug: 'core-guides/tools/maya' },
                    { label: 'LoL-Maya Overview', slug: 'core-guides/tools/maya/lolmaya' },
                    { label: 'Maya Errorlist', slug: 'core-guides/tools/maya/errorlist' },
                    {
                      label: 'LoL-Maya Errorlist',
                      slug: 'core-guides/tools/maya/lolmaya-errorlist',
                    },
                  ],
                },
                {
                  label: 'Adobe',
                  collapsed: true,
                  items: [
                    { label: 'Overview', slug: 'core-guides/tools/adobe' },
                    { label: 'Photoshop', slug: 'core-guides/tools/adobe/photoshop' },
                    {
                      label: 'Substance Painter',
                      slug: 'core-guides/tools/adobe/substance-painter',
                    },
                  ],
                },
                { label: 'lol2gltf', slug: 'core-guides/tools/lol2gltf' },
                { label: 'Visual Studio Code', slug: 'core-guides/tools/visual-studio' },
                { label: 'Notepad++', slug: 'core-guides/tools/notepadplusplus' },
                { label: 'Hacksaw', slug: 'core-guides/tools/hacksaw' },
                { label: 'Ritobin', slug: 'core-guides/tools/rito-bin' },
                { label: 'Ritoddstex', slug: 'core-guides/tools/ritoddstex' },
                { label: 'Gimp', slug: 'core-guides/tools/gimp' },
                { label: 'paint.net', slug: 'core-guides/tools/paint-net' },
                { label: 'Wwise', slug: 'core-guides/tools/wwise' },
                { label: 'XnConvert', slug: 'core-guides/tools/xnconvert' },
              ],
            },
            {
              label: 'Resources',
              collapsed: true,
              items: [
                { label: 'Downloadable Assets', slug: 'core-guides/downloadable-assets' },
                {
                  label: 'Champion Templates',
                  slug: 'core-guides/downloadable-assets/champion-templates',
                },
              ],
            },
            { label: 'Errorlists', slug: 'core-guides/errorlists' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Overview', slug: 'specific-guide' },
            {
              label: '3D Modelling',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/3d-modelling' },
                {
                  label: 'Maya',
                  collapsed: true,
                  items: [
                    { label: 'Overview', slug: 'specific-guide/3d-modelling/maya' },
                    { label: 'Custom Skin (Maya 2023+)', slug: 'specific-guide/3d-modelling/maya/2023' },
                    { label: 'Custom Skin (Maya 2018)', slug: 'specific-guide/3d-modelling/maya/2018' },
                    { label: 'Skin Bind Settings', slug: 'specific-guide/3d-modelling/maya/bind-settings' },
                    { label: 'T/A Posing Older Champions', slug: 'specific-guide/3d-modelling/maya/tposeoldchamps' },
                  ],
                },
                {
                  label: 'Replacing a Champion Model',
                  slug: 'specific-guide/3d-modelling/replacing-champion-with-different-model',
                },
                { label: 'UV Editing', slug: 'specific-guide/3d-modelling/uv-editing' },
                { label: 'Blender Starting Guide', slug: 'specific-guide/3d-modelling/blender-starting-guide' },
              ],
            },
            {
              label: 'Animation',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/animation' },
                {
                  label: 'Importing & Exporting Animations',
                  slug: 'specific-guide/animation/importing-and-exporting-animation',
                },
                { label: 'Animation Retargeting', slug: 'specific-guide/animation/retarget-animation' },
              ],
            },
            {
              label: 'Coding',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/coding' },
                { label: 'Particle & Bin Dictionary', slug: 'specific-guide/coding/particle-dictionary' },
                { label: 'Manually Edit VFX Colors', slug: 'specific-guide/coding/man-edit-vfxcolor' },
                { label: 'Edit VFX Using Matrix', slug: 'specific-guide/coding/edit-vfx-using-matrix' },
                { label: 'Particle Swapping', slug: 'specific-guide/coding/particle-swapping' },
                { label: 'Adding Child Particles', slug: 'specific-guide/coding/adding-child-particles' },
                {
                  label: 'Add Particles to Animations',
                  slug: 'specific-guide/coding/add-particles-to-animation',
                },
              ],
            },
            {
              label: 'Sound FX',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/sfx' },
                { label: 'Basic Information', slug: 'specific-guide/sfx/basic-information' },
                { label: 'Full Sound Modding Guide', slug: 'specific-guide/sfx/full-sfx-guide' },
                { label: 'Extract SFX or VO', slug: 'specific-guide/sfx/how-to-extract-sfx-or-vo' },
                { label: 'Background Music', slug: 'specific-guide/sfx/custom-bgm' },
                { label: 'Custom Soundbanks', slug: 'specific-guide/sfx/custom-soundbank' },
              ],
            },
            {
              label: 'Visual FX',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/vfx' },
                {
                  label: 'Idle Particles from Packs',
                  slug: 'specific-guide/vfx/create-idleparticles-using-idleparticle-packs',
                },
                { label: 'Recoloring Particles', slug: 'specific-guide/vfx/recoloring_particles' },
                {
                  label: 'Fake Gear Upgrades: Textures',
                  slug: 'specific-guide/vfx/fake-gear-upgrades-textures',
                },
              ],
            },
            {
              label: 'Texturing',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/texturing' },
                {
                  label: 'Skins with Multiple Materials',
                  slug: 'specific-guide/texturing/create-skin-with-multiple-mats',
                },
                {
                  label: 'Improve Flat Textures',
                  slug: 'specific-guide/texturing/how-to-improve-flat-textures',
                },
                {
                  label: 'Making Model Parts Invisible',
                  slug: 'specific-guide/texturing/making-model-parts-invisible',
                },
                { label: 'Substance Painter Guide', slug: 'specific-guide/texturing/substance-painter-guide' },
                { label: 'Special Materials', slug: 'specific-guide/texturing/add-special-mats' },
              ],
            },
            {
              label: 'UI',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/ui' },
                { label: 'Custom Cursors', slug: 'specific-guide/ui/custom-cursors' },
                { label: 'Customizing the Loadingscreen', slug: 'specific-guide/ui/edit-loadingscreen' },
                { label: 'Animated Loading Screen', slug: 'specific-guide/ui/anim-load-screen' },
                { label: 'Custom Font', slug: 'specific-guide/ui/custom-font' },
                { label: 'Simple HUD Template', slug: 'specific-guide/ui/simple-hud-template' },
              ],
            },
            {
              label: 'Skin Fixes',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/skin-fixes' },
                { label: 'Fix Healthbars', slug: 'specific-guide/skin-fixes/healthbars' },
                { label: 'Fix Moonwalking', slug: 'specific-guide/skin-fixes/how_to_fix_moonwalking' },
                { label: 'Fix Broken Animations', slug: 'specific-guide/skin-fixes/fix-broken-animations' },
                { label: 'Animation Repathing', slug: 'specific-guide/skin-fixes/animation-repathing' },
                {
                  label: 'Fix Broken Face Normals',
                  slug: 'specific-guide/skin-fixes/fixing_broken_face_normals',
                },
                {
                  label: 'Weird .DDS Files',
                  slug: 'specific-guide/skin-fixes/handling_fix_weird_dds_files',
                },
                { label: 'Fix Outdated Textures', slug: 'specific-guide/skin-fixes/broken-textures' },
                { label: 'Prevent VFX Breaking', slug: 'specific-guide/skin-fixes/fix-breaking-vfx' },
                { label: 'Update Linked Bins', slug: 'specific-guide/skin-fixes/update-linked-bins' },
              ],
            },
            {
              label: 'Mapskin',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/mapskin' },
                { label: 'Basic Mapskin Guide', slug: 'specific-guide/mapskin/basic-mapskin-guide' },
              ],
            },
            {
              label: 'Rigging & Weighting',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'specific-guide/rigging-weighting' },
                {
                  label: 'Copy Skin Weights',
                  slug: 'specific-guide/rigging-weighting/maya/copy-skinweights',
                },
              ],
            },
            { label: 'Filetypes', slug: 'specific-guide/filetypes' },
            { label: 'League Engine', slug: 'specific-guide/league-engine' },
          ],
        },
        { label: 'Posting Guide', slug: 'posting-guide' },
      ],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
