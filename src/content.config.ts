import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudy = z.object({
  title: z.string(),
  summary: z.string().optional(),
  context: z.string().optional(),
  problem: z.string().optional(),
  decisions: z.string().optional(),
  architecture: z.string().optional(),
  outcome: z.string().optional(),
});

export const collections = {
  caseStudiesEs: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/case-studies/es' }),
    schema: caseStudy,
  }),
  caseStudiesEn: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/case-studies/en' }),
    schema: caseStudy,
  }),
};
