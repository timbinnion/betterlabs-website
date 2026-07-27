import type { ProjectContent, ProjectsContent } from '../types';

// English source copy is retained until the approved Chinese translation is ready.
const frescoAirPurifier: ProjectContent = {
  id: 'fresco-air-purifier',
  title: 'Fresco Air Purifier',
  category: 'Circular product design',
  summary:
    'Circular redesign of an air purifier to reduce carbon emissions and create a modular product-service system.',
  image: {
    src: '/images/projects/fresco-air-purifier.jpg',
    alt: 'Fresco modular air purifier components arranged for inspection',
  },
  tags: ['Circular Design', 'LCA', 'Business Model'],
  metrics: [
    { value: '-41%', label: 'carbon emissions' },
    { value: '+63%', label: 'three-year income' },
  ],
  featured: true,
};

const eekoTable: ProjectContent = {
  id: 'eeko-table',
  title: 'Eekö Table',
  category: 'Circular furniture',
  summary:
    'A modular furniture system designed for longevity, repair and material recovery.',
  image: {
    src: '/images/projects/eeko-table.jpg',
    alt: 'Eekö modular timber table in a studio setting',
  },
  tags: ['Furniture', 'Modularity', 'Buy-back'],
  metrics: [
    { value: '-40%', label: 'material impact' },
    { value: '+45%', label: 'product lifetime' },
  ],
};

const circularExhibitionSystem: ProjectContent = {
  id: 'circular-exhibition-system',
  title: 'Circular Exhibition System',
  category: 'Reusable systems',
  summary:
    'A reusable exhibition system designed to replace wasteful single-use builds.',
  image: {
    src: '/images/projects/circular-exhibition-system.jpg',
    alt: 'Reusable circular exhibition system assembled in an event space',
  },
  tags: ['Systems Design', 'LCA', 'Leasing'],
  metrics: [
    { value: '-90%', label: 'carbon emissions' },
    { value: 'Lease', label: 'business model' },
  ],
  visible: true,
};

export const projects: ProjectsContent = {
  eyebrow: 'Selected work',
  title: 'Proof, not promises.',
  previousLabel: 'Previous project',
  nextLabel: 'Next project',
  items: [frescoAirPurifier, eekoTable, circularExhibitionSystem],
};
