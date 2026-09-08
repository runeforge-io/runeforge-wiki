/**
 * The wiki's tag vocabulary.
 *
 * One source for three consumers: the Zod enums in `content.config.ts`, the
 * chips under each page title, and the `/tags/` index pages. A term has to be
 * added here before a page can carry it - the schema rejects anything else.
 *
 * Tag slugs are globally unique across facets, because every tag resolves to
 * one `/tags/<slug>/` page.
 */

export const TYPES = [
  'overview',
  'tutorial',
  'guide',
  'reference',
  'troubleshooting',
  'faq',
  'template',
] as const;

export const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

export const SUBJECTS = [
  // Craft
  '3d-modelling',
  'rigging-weighting',
  'animation',
  'texturing',
  'vfx',
  'sfx',
  'ui',
  'mapskin',
  'bin-editing',
  'skin-fixes',
  // Game data
  'file-formats',
  'particles',
  'materials',
  'skeletons',
  'soundbanks',
  'hashes',
  'league-engine',
  // Workflow
  'getting-started',
  'installation',
  'exporting',
  'resources',
  'posting',
  'wiki',
] as const;

/**
 * Software a page expects you to have installed. Its own facet rather than a
 * subject: "needs Maya" is a different claim from "is about rigging", and a
 * Required Tools list routinely runs past the three-subject cap.
 */
export const TOOLS = [
  'maya',
  'blender',
  'photoshop',
  'substance-painter',
  'gimp',
  'paint-net',
  'wwise',
  'ltmao',
  'lol2gltf',
  'ritobin',
  'obsidian',
  'cslol-manager',
  'hacksaw',
  'ritoddstex',
  'xnconvert',
  'vscode',
  'notepad-plus-plus',
] as const;

export const STATUSES = ['wip', 'outdated', 'legacy'] as const;

export type TagType = (typeof TYPES)[number];
export type TagLevel = (typeof LEVELS)[number];
export type TagSubject = (typeof SUBJECTS)[number];
export type TagTool = (typeof TOOLS)[number];
export type TagStatus = (typeof STATUSES)[number];
export type TagSlug = TagType | TagLevel | TagSubject | TagTool | TagStatus;

export type TagFacet = 'type' | 'level' | 'subject' | 'tool' | 'status';

/** Subjects are grouped only for display on the tag index. */
export type SubjectGroup = 'craft' | 'data' | 'workflow';

export interface TagMeta {
  label: string;
  /** One line, shown on the tag's own index page. */
  description: string;
}

export const TYPE_META: Record<TagType, TagMeta> = {
  overview: {
    label: 'Overview',
    description: 'A map of a section - what it covers and where to go next.',
  },
  tutorial: {
    label: 'Tutorial',
    description: 'A start-to-finish walkthrough with one finished result at the end.',
  },
  guide: { label: 'Guide', description: 'How to carry out one specific task.' },
  reference: {
    label: 'Reference',
    description: 'Dictionaries, settings, and tables to look things up in.',
  },
  troubleshooting: {
    label: 'Troubleshooting',
    description: 'A broken skin, what causes it, and how to fix it.',
  },
  faq: { label: 'FAQ', description: 'Short answers to the questions people ask most.' },
  template: {
    label: 'Template',
    description: 'A file to copy as the starting point for your own work.',
  },
};

export const LEVEL_META: Record<TagLevel, TagMeta> = {
  beginner: {
    label: 'Beginner',
    description: 'Assumes no modding experience. Start here if you have never made a skin.',
  },
  intermediate: {
    label: 'Intermediate',
    description: 'Assumes you have made a skin before and have your tools installed.',
  },
  advanced: {
    label: 'Advanced',
    description: 'Assumes you are comfortable editing bins and working around broken files.',
  },
};

export const STATUS_META: Record<TagStatus, TagMeta> = {
  wip: {
    label: 'Under Construction',
    description: 'Incomplete. Steps are missing or still being written.',
  },
  outdated: {
    label: 'Outdated',
    description: 'Written for a version of the tool or game that has since moved on.',
  },
  legacy: {
    label: 'Legacy',
    description: 'Older tooling and formats, kept for mods that still use them.',
  },
};

export const SUBJECT_META: Record<TagSubject, TagMeta & { group: SubjectGroup }> = {
  '3d-modelling': {
    group: 'craft',
    label: '3D Modeling',
    description: 'Editing, replacing, and cleaning up champion meshes.',
  },
  'rigging-weighting': {
    group: 'craft',
    label: 'Rigging & Weighting',
    description: 'Binding a model to a skeleton and painting how it deforms.',
  },
  animation: {
    group: 'craft',
    label: 'Animation',
    description: 'Importing, retargeting, and exporting champion animations.',
  },
  texturing: {
    group: 'craft',
    label: 'Texturing',
    description: 'Painting and converting the textures a skin wears.',
  },
  vfx: {
    group: 'craft',
    label: 'Visual FX',
    description: 'Particles: recoloring them, swapping them, and adding your own.',
  },
  sfx: {
    group: 'craft',
    label: 'Sound FX',
    description: 'Sound effects, voice lines, and background music.',
  },
  ui: {
    group: 'craft',
    label: 'UI',
    description: 'Loading screens, cursors, fonts, and the in-game HUD.',
  },
  mapskin: {
    group: 'craft',
    label: 'Mapskins',
    description: 'Reskinning the map instead of a champion.',
  },
  'bin-editing': {
    group: 'craft',
    label: 'Bin Editing',
    description: "Editing the .bin files that wire a skin's assets together.",
  },
  'skin-fixes': {
    group: 'craft',
    label: 'Skin Fixes',
    description: 'Repairing a mod that broke, usually after a patch.',
  },

  'file-formats': {
    group: 'data',
    label: 'File Formats',
    description: 'What .skn, .skl, .anm, .bin, .tex and the rest actually hold.',
  },
  particles: {
    group: 'data',
    label: 'Particles',
    description: 'The particle systems behind every visual effect.',
  },
  materials: {
    group: 'data',
    label: 'Materials',
    description: 'Shaders and static materials, and how a mesh gets more than one.',
  },
  skeletons: {
    group: 'data',
    label: 'Skeletons',
    description: 'Joints, bind poses, and the .skl files that carry them.',
  },
  soundbanks: {
    group: 'data',
    label: 'Soundbanks',
    description: 'The .bnk and .wpk containers audio ships in.',
  },
  hashes: {
    group: 'data',
    label: 'Hashes',
    description: 'The hashes League uses in place of file paths.',
  },
  'league-engine': {
    group: 'data',
    label: 'League Engine',
    description: 'How the game loads and renders what you give it.',
  },

  'getting-started': {
    group: 'workflow',
    label: 'Getting Started',
    description: 'Your first steps into modding, before you pick a specialty.',
  },
  installation: {
    group: 'workflow',
    label: 'Installation',
    description: 'Getting a tool onto your machine and set up.',
  },
  exporting: {
    group: 'workflow',
    label: 'Importing & Exporting',
    description: 'Moving assets out of the game and back in again.',
  },
  resources: {
    group: 'workflow',
    label: 'Resources',
    description: 'Templates, packs, and assets you can download and use.',
  },
  posting: {
    group: 'workflow',
    label: 'Posting Mods',
    description: 'Creator status, licenses, and publishing a mod on Runeforge.',
  },
  wiki: {
    group: 'workflow',
    label: 'Wiki',
    description: 'Writing and contributing to this wiki.',
  },
};

export const TOOL_META: Record<TagTool, TagMeta> = {
  maya: {
    label: 'Maya',
    description: 'Autodesk Maya and the LoL-Maya plugin.',
  },
  blender: { label: 'Blender', description: 'Blender, via lol2gltf and LtMAO.' },
  photoshop: {
    label: 'Photoshop',
    description: 'Adobe Photoshop and its DDS plugins.',
  },
  'substance-painter': {
    label: 'Substance Painter',
    description: 'Adobe Substance Painter, for painting textures on the model.',
  },
  gimp: { label: 'GIMP', description: 'The free image editor.' },
  'paint-net': {
    label: 'paint.net',
    description: "A lighter image editor for League's image files.",
  },
  wwise: {
    label: 'Wwise',
    description: 'The audio tool League uses to build soundbanks.',
  },
  ltmao: {
    label: 'LtMAO',
    description: 'A toolbox for extracting, converting, and repacking game files.',
  },
  lol2gltf: {
    label: 'lol2gltf',
    description: 'Converts League models to glTF and back, for Blender.',
  },
  ritobin: {
    label: 'Ritobin',
    description: 'Converts .bin files to editable text and back.',
  },
  obsidian: {
    label: 'Obsidian',
    description: 'Browses and extracts the .wad archives the game ships in.',
  },
  'cslol-manager': {
    label: 'CS-LoL Manager',
    description: 'Installs your mods and builds mod packages.',
  },
  hacksaw: {
    label: 'Hacksaw',
    description: 'Bulk recoloring of a mod without opening the textures.',
  },
  ritoddstex: {
    label: 'Ritoddstex',
    description: 'Converts between .dds and Riot .tex textures.',
  },
  xnconvert: {
    label: 'XnConvert',
    description: 'Batch image conversion and rescaling.',
  },
  vscode: {
    label: 'Visual Studio Code',
    description: 'The recommended editor for .py bin dumps.',
  },
  'notepad-plus-plus': {
    label: 'Notepad++',
    description: 'A lighter text editor for the same job.',
  },
};

export const SUBJECT_GROUP_LABELS: Record<SubjectGroup, string> = {
  craft: 'Craft',
  data: 'Game data',
  workflow: 'Workflow',
};

/** The frontmatter shape, mirrored by the Zod schema in content.config.ts. */
export interface PageTags {
  type: TagType;
  level: TagLevel;
  subject: TagSubject[];
  tool?: TagTool[];
  status?: TagStatus;
}

export interface ResolvedTag extends TagMeta {
  slug: TagSlug;
  facet: TagFacet;
}

const REGISTRY = new Map<string, ResolvedTag>([
  ...TYPES.map((slug): [string, ResolvedTag] => [
    slug,
    { slug, facet: 'type', ...TYPE_META[slug] },
  ]),
  ...LEVELS.map((slug): [string, ResolvedTag] => [
    slug,
    { slug, facet: 'level', ...LEVEL_META[slug] },
  ]),
  ...SUBJECTS.map((slug): [string, ResolvedTag] => [
    slug,
    { slug, facet: 'subject', ...SUBJECT_META[slug] },
  ]),
  ...TOOLS.map((slug): [string, ResolvedTag] => [
    slug,
    { slug, facet: 'tool', ...TOOL_META[slug] },
  ]),
  ...STATUSES.map((slug): [string, ResolvedTag] => [
    slug,
    { slug, facet: 'status', ...STATUS_META[slug] },
  ]),
]);

export const ALL_TAGS: ResolvedTag[] = [...REGISTRY.values()];

export function resolveTag(slug: TagSlug): ResolvedTag {
  const tag = REGISTRY.get(slug);
  if (!tag) throw new Error(`Unknown tag: ${slug}`);
  return tag;
}

/** Chip order: what it is, who it's for, what it covers, what it needs, how settled it is. */
export function resolvePageTags(tags: PageTags): ResolvedTag[] {
  return [
    resolveTag(tags.type),
    resolveTag(tags.level),
    ...tags.subject.map(resolveTag),
    ...(tags.tool ?? []).map(resolveTag),
    ...(tags.status ? [resolveTag(tags.status)] : []),
  ];
}

/**
 * Group label on the chip row. Phrased as what the chips answer for the reader,
 * not as the frontmatter key: nobody arrives asking what a "subject" is.
 */
export const FACET_LABELS: Record<TagFacet, string> = {
  type: 'Format',
  level: 'Level',
  subject: 'Covers',
  tool: 'Needs',
  status: 'Status',
};

export interface TagGroup {
  facet: TagFacet;
  label: string;
  tags: ResolvedTag[];
}

/** The chips split into labelled groups, in chip order. Empty facets are dropped. */
export function groupPageTags(tags: PageTags): TagGroup[] {
  const groups = new Map<TagFacet, ResolvedTag[]>();
  for (const tag of resolvePageTags(tags)) {
    const bucket = groups.get(tag.facet);
    if (bucket) bucket.push(tag);
    else groups.set(tag.facet, [tag]);
  }
  return [...groups].map(([facet, list]) => ({
    facet,
    label: FACET_LABELS[facet],
    tags: list,
  }));
}

export function tagHref(slug: TagSlug): string {
  return `/tags/${slug}/`;
}
