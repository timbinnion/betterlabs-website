import type { QuestionsContent } from './types';

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

const chinese: QuestionsContent = {
  eyebrow: '我们帮助解决的问题',
  title: '我们乐于帮助您回答这些问题：',
  items: [
    {
      id: 'starting-with-sustainability',
      question: '我的可持续发展应该从哪里开始？',
      answer: '我们识别最具影响力的机会，并制定切实可行的可持续发展路线图。',
    },
    {
      id: 'reducing-impact',
      question: '如何降低产品或企业的环境影响？',
      answer: '我们运用循环设计原则，重新思考产品、服务与系统。',
    },
    {
      id: 'creating-value',
      question: '可持续发展能否创造商业价值？',
      answer: '我们通过创新、商业模式思维与市场洞察，发掘新的价值机会。',
    },
  ],
};

export const questions = {
  en: english,
  zh: chinese,
};
