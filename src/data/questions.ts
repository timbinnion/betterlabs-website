import type { QuestionsContent } from './types';
import { untranslated } from './types';

const english: QuestionsContent = {
  eyebrow: 'What we help solve',
  title: 'The questions we like to help answer:',
  items: [
    {
      id: 'starting-with-sustainability',
      question: 'Where do I start with sustainability?',
      answer:
        'We identify the biggest opportunities and build practical sustainability roadmaps.',
    },
    {
      id: 'reducing-impact',
      question: 'How can I reduce the impact of my product or business?',
      answer:
        'We redesign products, services and systems using circular design principles.',
    },
    {
      id: 'creating-value',
      question: 'Can I find value in sustainability?',
      answer:
        'We uncover new opportunities through innovation, business model thinking and market insight.',
    },
  ],
};

export const questions = untranslated(english);
