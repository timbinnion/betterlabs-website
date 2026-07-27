import type { ClientsContent } from './types';
import { untranslated } from './types';

const english: ClientsContent = {
  eyebrow: 'We’ve worked with',
  items: [
    {
      name: 'Candex',
      image: { src: '/images/clients/Candex.png', alt: 'Candex logo' },
      visible: true,
    },
    {
      name: 'Childcare',
      image: { src: '/images/clients/Childcare.png', alt: 'Childcare logo' },
      visible: true,
    },
    {
      name: 'CSIRO',
      image: { src: '/images/clients/CSIRO.png', alt: 'CSIRO logo' },
      visible: true,
    },
    {
      name: 'Descours & Cabaud',
      image: {
        src: '/images/clients/Descours Cabaud.png',
        alt: 'Descours & Cabaud logo',
      },
      visible: true,
    },
    {
      name: 'Dove',
      image: { src: '/images/clients/Dove.png', alt: 'Dove logo' },
      visible: true,
    },
    {
      name: 'Ellen MacArthur Foundation',
      image: {
        src: '/images/clients/EMF.png',
        alt: 'Ellen MacArthur Foundation logo',
      },
      visible: true,
    },
    {
      name: 'Fisher & Paykel',
      image: { src: '/images/clients/FP.png', alt: 'Fisher & Paykel logo' },
      visible: true,
    },
    {
      name: 'Ganter',
      image: { src: '/images/clients/Ganter.png', alt: 'Ganter logo' },
      visible: true,
    },
    {
      name: 'Hazzys',
      image: { src: '/images/clients/Hazzys.png', alt: 'Hazzys logo' },
      visible: true,
    },
    {
      name: 'Reima',
      image: { src: '/images/clients/Reima.png', alt: 'Reima logo' },
      visible: true,
    },
    {
      name: 'Schick',
      image: { src: '/images/clients/Schick.png', alt: 'Schick logo' },
      visible: true,
    },
    {
      name: 'Silver Fern Farms',
      image: { src: '/images/clients/SFF.png', alt: 'Silver Fern Farms logo' },
      visible: true,
    },
  ],
};

export const clients = untranslated(english);
