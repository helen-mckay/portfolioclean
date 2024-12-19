import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		role: z.string(),
		techstack: z.array(z.string()),
		pubDate: z.coerce.date(),
		github: z.string().url().optional(),
		liveproj: z.string().url().optional(),
		heroImage: z.string().optional(),
		description: z.string(),
		body: z.string().optional()
	}),
});

export const collections = { work };
