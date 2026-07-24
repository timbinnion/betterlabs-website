import type { CtaContent } from './types';
import { untranslated } from './types';

const english: CtaContent = {
  eyebrow: 'Have a sustainability challenge?',
  headline: 'What can we create (better) for you?',
  body:
    'Bring us a product, system or ambition. We’ll help find the practical path forward.',
  action: {
    label: 'Start a conversation',
    href: 'mailto:hello@betterlabs.example',
  },
  footerMeta: 'Circular design and innovation · Shanghai · © 2026',
};

export const cta = untranslated(english);
