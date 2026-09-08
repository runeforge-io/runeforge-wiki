import { getCollection } from 'astro:content';
import type { PageTags, TagSlug } from './tags';

export interface TaggedPage {
  href: string;
  title: string;
  description?: string;
  tags: PageTags;
}

/** Every page carrying tags, alphabetical by title. Drafts are left out: they
 * carry tags for when they ship, but a production build gives them no route. */
export async function getTaggedPages(): Promise<TaggedPage[]> {
  const docs = await getCollection('docs');
  return docs
    .filter((entry) => entry.data.tags && !entry.data.draft)
    .map((entry) => ({
      href: `/${entry.id}/`.replace(/\/{2,}/g, '/'),
      title: entry.data.title,
      description: entry.data.description,
      tags: entry.data.tags as PageTags,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** Reverse index. Tags nobody uses are absent rather than mapped to an empty list. */
export async function getPagesByTag(): Promise<Map<TagSlug, TaggedPage[]>> {
  const index = new Map<TagSlug, TaggedPage[]>();
  for (const page of await getTaggedPages()) {
    const { type, level, subject, tool, status } = page.tags;
    for (const slug of [type, level, ...subject, ...(tool ?? []), ...(status ? [status] : [])]) {
      const bucket = index.get(slug);
      if (bucket) bucket.push(page);
      else index.set(slug, [page]);
    }
  }
  return index;
}
