import type { AudiencesContent } from './types';
import { untranslated } from './types';

const english: AudiencesContent = {
  eyebrow: 'Who we work with',
  title: 'Built for people who need sustainability to become practical.',
  items: [
    {
      id: 'manufacturers',
      title: 'Product designers and manufacturers',
      body: 'Future-proof products through circular design.',
      icon: '/images/audiences/manufacturers.png',
    },
    {
      id: 'brands',
      title: 'Brands and businesses with ESG commitments',
      body: 'Turn sustainability commitments into customer value.',
      icon: '/images/audiences/brands.png',
    },
    {
      id: 'experience-companies',
      title: 'Retail, exhibition and event companies',
      body: 'Create low-carbon spaces, reusable systems and circular experiences.',
      icon: '/images/audiences/experience-companies.png',
    },
  ],
};

export const audiences = untranslated(english);
