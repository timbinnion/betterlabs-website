import type { ServicesContent } from './types';
import { untranslated } from './types';

const english: ServicesContent = {
  eyebrow: 'What we do',
  title: 'Three ways to move from ambition to action.',
  introduction:
    'Technical enough to understand products. Strategic enough to understand systems. Practical enough to help teams make something happen.',
  items: [
    {
      id: 'sustainable-design',
      title: 'Sustainable Design',
      subtitle: 'Circular products, spaces and experiences.',
      capabilities: [
        'Circular product redesign',
        'Material and manufacturing optimisation',
        'Modular systems',
        'Life cycle assessment',
      ],
      image: '/images/services/sustainable-design.png',
    },
    {
      id: 'sustainable-strategy',
      title: 'Sustainable Strategy',
      subtitle: 'Finding opportunities beyond compliance.',
      capabilities: [
        'Circular business models',
        'Opportunity mapping',
        'Sustainability roadmaps',
        'Innovation strategy',
      ],
      image: '/images/services/sustainable-strategy.png',
    },
    {
      id: 'sustainability-education',
      title: 'Sustainability Education',
      subtitle: 'Turning sustainability into action.',
      capabilities: ['Workshops', 'Training', 'Capability building'],
      image: '/images/services/sustainability-education.png',
    },
  ],
};

export const services = untranslated(english);
