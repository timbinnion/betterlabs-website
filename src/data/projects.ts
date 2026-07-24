import type { ProjectsContent } from './types';
import { untranslated } from './types';

const english: ProjectsContent = {
  eyebrow: 'Selected work',
  title: 'Proof, not promises.',
  previousLabel: 'Previous project',
  nextLabel: 'Next project',
  items: [
    {
      id: 'fresco-air-purifier',
      title: 'Fresco Air Purifier',
      summary:
        'Circular redesign of an air purifier to reduce carbon emissions and create a modular product-service system.',
      image: '/images/projects/fresco-air-purifier.webp',
      tags: ['Circular Design', 'LCA', 'Business Model'],
      metrics: [
        { value: '-41%', label: 'carbon emissions' },
        { value: '+63%', label: 'three-year income' },
      ],
    },
    {
      id: 'eeko-table',
      title: 'Eekö Table',
      summary:
        'A modular furniture system designed for longevity, repair and material recovery.',
      image: '/images/projects/eeko-table.webp',
      tags: ['Furniture', 'Modularity', 'Buy-back'],
      metrics: [
        { value: '-40%', label: 'material impact' },
        { value: '+45%', label: 'product lifetime' },
      ],
    },
    {
      id: 'circular-exhibition-system',
      title: 'Circular Exhibition System',
      summary:
        'A reusable exhibition system designed to replace wasteful single-use builds.',
      image: '/images/projects/circular-exhibition-system.webp',
      tags: ['Systems Design', 'LCA', 'Leasing'],
      metrics: [
        { value: '-90%', label: 'carbon emissions' },
        { value: 'Lease', label: 'business model' },
      ],
    },
  ],
};

export const projects = untranslated(english);
