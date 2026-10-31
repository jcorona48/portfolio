import { config, fields, collection } from '@keystatic/core';

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
