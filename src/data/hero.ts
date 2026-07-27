import type { HeroContent } from './types';
import { untranslated } from './types';

const english: HeroContent = {
  eyebrow: 'We are (better)labs.',
  headline: [
    '(sustainable) innovation experts.',
    '(sustainable) Design.',
    '(sustainable) Strategy.',
    '(sustainable) Education.',
  ],
  servicesLead: 'We do',
  body:
    'We help manufacturers, brands and businesses redesign products, strategies and business models to reduce environmental impact while creating new value.',
  primaryAction: {
    label: 'Start a conversation',
    href: '#contact',
  },
  secondaryAction: {
    label: 'View selected projects',
    href: '#projects',
  },
  proof: 'Circular design × strategic innovation × education',
  location: 'Shanghai · Working globally',
};

export const hero = untranslated(english);
