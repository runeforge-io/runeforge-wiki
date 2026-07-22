import { config, fields, collection } from '@keystatic/core';
import { block, mark, wrapper } from '@keystatic/core/content-components';
import { linkIcon } from '@keystar/ui/icon/icons/linkIcon';
import { imageIcon } from '@keystar/ui/icon/icons/imageIcon';
import { keyboardIcon } from '@keystar/ui/icon/icons/keyboardIcon';
import { codeIcon } from '@keystar/ui/icon/icons/codeIcon';
import { paletteIcon } from '@keystar/ui/icon/icons/paletteIcon';
import { videoIcon } from '@keystar/ui/icon/icons/videoIcon';
import { filmIcon } from '@keystar/ui/icon/icons/filmIcon';
import { listCollapseIcon } from '@keystar/ui/icon/icons/listCollapseIcon';
import { typeIcon } from '@keystar/ui/icon/icons/typeIcon';
import { alignCenterIcon } from '@keystar/ui/icon/icons/alignCenterIcon';

// Raw HTML elements that appear in existing guides. The MDX editor treats
// them as JSX components, so every tag used in content needs a definition
// here or the file refuses to open in the admin UI.
const htmlComponents = {
  // wrapper, not mark: the only raw <a> left in content is the block-level
  // video-thumbnail pattern (<a href><img /></a>). Inline links are plain
  // Markdown and use the editor's built-in link support.
  a: wrapper({
    label: 'Link wrapper (HTML)',
    icon: linkIcon,
    schema: { href: fields.text({ label: 'URL' }) },
  }),
  span: mark({
    label: 'Styled text',
    icon: paletteIcon,
    tag: 'span',
    schema: { style: fields.text({ label: 'Inline style' }) },
  }),
  kbd: mark({
    label: 'Keyboard key',
    icon: keyboardIcon,
    tag: 'kbd',
    schema: { style: fields.text({ label: 'Inline style' }) },
  }),
  code: mark({
    label: 'HTML code',
    icon: codeIcon,
    tag: 'code',
    schema: {},
  }),
  // block, not inline: standalone <img /> lines parse as JSX flow elements.
  img: block({
    label: 'HTML image',
    icon: imageIcon,
    schema: {
      src: fields.text({ label: 'Source' }),
      alt: fields.text({ label: 'Alt text' }),
      style: fields.text({ label: 'Inline style' }),
      height: fields.text({ label: 'Height' }),
      width: fields.text({ label: 'Width' }),
    },
  }),
  video: wrapper({
    label: 'Video',
    icon: videoIcon,
    schema: {
      width: fields.text({ label: 'Width' }),
      height: fields.text({ label: 'Height' }),
      controls: fields.checkbox({ label: 'Show controls', defaultValue: true }),
    },
  }),
  source: block({
    label: 'Video source',
    icon: filmIcon,
    schema: {
      src: fields.text({ label: 'Source' }),
      type: fields.text({ label: 'MIME type' }),
    },
  }),
  details: wrapper({
    label: 'Collapsible section',
    icon: listCollapseIcon,
    schema: {},
  }),
  summary: wrapper({
    label: 'Collapsible summary',
    icon: typeIcon,
    schema: {},
  }),
  center: wrapper({
    label: 'Centered block',
    icon: alignCenterIcon,
    schema: {},
  }),
  p: wrapper({
    label: 'HTML paragraph',
    icon: typeIcon,
    schema: {
      align: fields.text({ label: 'Align' }),
      style: fields.text({ label: 'Inline style' }),
    },
  }),
};

// Keystatic admin UI config (served at /keystatic by the dev server).
// Local storage mode: edits write straight to the files in this repo.
//
// Only plain-Markdown guides are editable here. The .mdx pages (section
// overviews, landing page) use Astro components and stay developer-edited.
export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Runeforge Wiki' },
  },
  collections: {
    guides: collection({
      label: 'Guides',
      slugField: 'title',
      path: 'src/content/docs/**',
      entryLayout: 'content',
      columns: ['title', 'lastUpdated'],
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'Page title, shown as the main heading and in the sidebar.',
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Short summary used for SEO and link previews.',
          multiline: true,
        }),
        lastUpdated: fields.date({
          label: 'Last updated',
          description: 'Update this when making meaningful changes to the guide.',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Drafts are excluded from the production build.',
          defaultValue: false,
        }),
        // fields.mdx (not fields.markdoc): the markdoc field rewrites GFM
        // pipe tables into {% table %} tags on save, which Starlight's
        // Markdown pipeline renders as literal text. The mdx field
        // serializes back to GFM.
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
          components: htmlComponents,
          options: {
            image: {
              directory: 'public/user-pictures',
              publicPath: '/user-pictures/',
            },
          },
        }),
      },
    }),
  },
});
