import type { ClientsContent } from './types';
import { untranslated } from './types';

const english: ClientsContent = {
  eyebrow: 'We’ve worked with',
  names: ['CSIRO', 'ARUP', 'ASUS', 'Fisher & Paykel', 'Silver Fern Farms'],
};

export const clients = untranslated(english);
