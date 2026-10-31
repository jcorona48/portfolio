import { config, fields, collection, singleton } from '@keystatic/core';

const caseStudyFields = {
  title: fields.slug({ name: { label: 'Title' } }),
  summary: fields.text({ label: 'Summary', multiline: true }),
  context: fields.text({ label: 'Context', multiline: true }),
  problem: fields.text({ label: 'Problem', multiline: true }),
  decisions: fields.text({ label: 'Decisions', multiline: true }),
  architecture: fields.text({ label: 'Architecture', multiline: true }),
  outcome: fields.text({ label: 'Outcome', multiline: true }),
};

export default config({
  storage: { kind: 'local' },
  singletons: {
    brand: singleton({
      label: 'Brand',
      path: 'src/data/brand',
      format: { data: 'json' },
      schema: {
        wordmark: fields.text({ label: 'Wordmark', description: 'Text next to the logo in the header and footer.' }),
        monogram: fields.text({ label: 'Monogram', description: 'Shown in the hero when there is no photo.' }),
        wordmarkFont: fields.text({ label: 'Wordmark font', description: 'Any Google Fonts family, e.g. Space Grotesk.' }),
        wordmarkWeight: fields.select({
          label: 'Wordmark weight',
          options: ['400', '500', '600', '700', '800', '900'].map((w) => ({ label: w, value: w })),
          defaultValue: '800',
        }),
        logo: fields.text({ label: 'Logo', description: 'SVG file name in src/brand/. Empty for text only.' }),
        photo: fields.text({ label: 'Photo', description: 'File name in public/. Empty to show the monogram.' }),
        favicon: fields.text({ label: 'Favicon', description: 'SVG file name in public/.' }),
      },
    }),
  },
  collections: {
    caseStudiesEs: collection({
      label: 'Case studies (ES)',
      slugField: 'title',
      path: 'src/content/case-studies/es/*',
      format: { contentField: 'body' },
      schema: {
        ...caseStudyFields,
        body: fields.document({ label: 'Body', formatting: true, links: true }),
      },
    }),
    caseStudiesEn: collection({
      label: 'Case studies (EN)',
      slugField: 'title',
      path: 'src/content/case-studies/en/*',
      format: { contentField: 'body' },
      schema: {
        ...caseStudyFields,
        body: fields.document({ label: 'Body', formatting: true, links: true }),
      },
    }),
  },
});
