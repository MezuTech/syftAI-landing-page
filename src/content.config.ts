import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * One entry per app. The schema is deliberately strict: a missing tagline or a
 * platform that is not one of the three fails the build instead of rendering
 * an empty gap on the live site.
 */
const apps = defineCollection({
  loader: glob({ base: './src/content/apps', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Position in the studio index. */
      order: z.number().int(),
      /** One line, sentence case, no period. Sits under the name everywhere. */
      tagline: z.string().max(120),
      /** Two or three sentences for the app page hero and meta description. */
      summary: z.string(),
      status: z.enum(['in-development', 'private-beta', 'live']),
      /** Rough completeness. Shown as a bar, so keep it honest. */
      progress: z.number().min(0).max(100).optional(),
      platforms: z.array(z.enum(['iOS', 'Android', 'Web'])).nonempty(),
      icon: image(),
      /** Optional wordmark used in the app hero instead of type. */
      wordmark: image().optional(),
      /** Screens render in a phone frame; a web app gets browser chrome. */
      frame: z.enum(['phone', 'browser']).default('phone'),
      features: z
        .array(
          z.object({
            title: z.string(),
            body: z.string(),
          }),
        )
        .min(3),
      /** What it is actually built on. Replaces invented social proof. */
      stack: z.array(z.string()).nonempty(),
      roadmap: z
        .array(z.object({ label: z.string(), done: z.boolean() }))
        .optional(),
      pricing: z
        .array(
          z.object({
            name: z.string(),
            price: z.string(),
            period: z.string().optional(),
            note: z.string(),
            includes: z.array(z.string()).nonempty(),
            featured: z.boolean().default(false),
            /** Where the button goes. Omitted tiers render without one. */
            href: z.url().optional(),
            cta: z.string().default('Get started'),
          }),
        )
        .optional(),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
      /** A live URL, when there is one to link to. */
      website: z.url().optional(),
      /** Whether this app publishes its own privacy policy / terms pages. */
      legal: z.boolean().default(false),
    }),
});

export const collections = { apps };
