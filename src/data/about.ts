import type { AboutContent } from './types';
import { untranslated } from './types';

const english: AboutContent = {
  eyebrow: 'About (better)labs',
  statement: 'Engineering rigour. Design imagination. Sustainability expertise.',
  body:
    '(better)labs combines engineering, design and sustainability expertise to help organisations move from ambition to action.',
  founder:
    'Founded by Tim Binnion, product design engineer and sustainability consultant based in Shanghai.',
  stories: [
    {
      id: 'circularity-bootcamp',
      title: 'Circularity Bootcamp',
      category: 'Strategy + Education',
      images: [
        {
          src: '/images/about/bootcamp-facilitation.jpg',
          alt: 'Circularity Bootcamp facilitation',
        },
        {
          src: '/images/about/bootcamp-activity.jpg',
          alt: 'Circularity Bootcamp activity',
        },
      ],
    },
    {
      id: 'rural-innovation-safari',
      title: 'Rural Innovation Safari',
      category: 'Education in action',
      images: [
        {
          src: '/images/about/rural-safari-fieldwork.jpg',
          alt: 'Rural Innovation Safari fieldwork',
        },
        {
          src: '/images/about/rural-safari-facilitation.jpg',
          alt: 'Rural Innovation Safari facilitation',
        },
      ],
    },
  ],
};

export const about = untranslated(english);
