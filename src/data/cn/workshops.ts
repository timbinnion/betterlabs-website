import type { WorkshopsContent } from '../types';

// English source copy is retained until the approved Chinese translation is ready.
export const workshops: WorkshopsContent = {
  eyebrow: 'Workshops and capability building',
  headline: 'Projects improve products and systems. Workshops build the capability to act.',
  positioning:
    'Focused, practical sessions that help teams understand circular opportunities, align around priorities and turn sustainability ambition into action.',
  image: {
    src: '/images/about/bootcamp-activity.jpg',
    alt: 'Participants collaborating during a (better)labs circularity workshop',
  },
  offerings: [
    {
      id: 'circularity-bootcamp',
      title: 'Circularity Bootcamp',
      description: 'Build a shared foundation in circular design and business thinking.',
    },
    {
      id: 'circular-reimagination',
      title: 'Circular Reimagination Workshop',
      description: 'Reimagine an existing product, service or system through a circular lens.',
    },
    {
      id: 'value-mapping',
      title: 'Value Mapping Workshop',
      description: 'Reveal environmental, customer and commercial value across the system.',
    },
    {
      id: 'emotional-durability',
      title: 'Emotional Durability Workshop',
      description: 'Explore how meaning, attachment and care can extend product life.',
    },
  ],
  bespoke: 'Bespoke workshops and training programmes are also available.',
};
