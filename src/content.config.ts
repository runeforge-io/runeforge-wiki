import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { LEVELS, STATUSES, SUBJECTS, TOOLS, TYPES } from './lib/tags';

// The subject cap is part of the contract, not a style note: past three the chip
// row stops reading as a summary. `tool` is deliberately uncapped - it mirrors a
// page's Required Tools list, which is as long as it is. Vocabulary: lib/tags.ts.
const tags = z.object({
  type: z.enum(TYPES),
  level: z.enum(LEVELS),
  subject: z.array(z.enum(SUBJECTS)).min(1).max(3),
  tool: z.array(z.enum(TOOLS)).optional(),
  status: z.enum(STATUSES).optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: z.object({ tags: tags.optional() }) }),
  }),
};
