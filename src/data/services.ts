import type { ServicesContent } from './types';

const english: ServicesContent = {
  eyebrow: 'What we do',
  title: 'Our Services: Three ways to move from ambition to action.',
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

const chinese: ServicesContent = {
  eyebrow: '我们的服务',
  title: '三种方式，将可持续愿景转化为行动。',
  introduction: '以技术理解产品，以战略洞察系统，以实践推动团队付诸行动。',
  items: [
    {
      id: 'sustainable-design',
      title: '可持续设计',
      subtitle: '打造循环的产品、空间与体验。',
      capabilities: ['循环产品再设计', '材料与制造优化', '模块化系统', '生命周期评估（LCA）'],
      image: '/images/services/sustainable-design.png',
    },
    {
      id: 'sustainable-strategy',
      title: '可持续战略',
      subtitle: '发掘超越合规要求的创新机会。',
      capabilities: ['循环商业模式', '机会图谱', '可持续发展路线图', '创新战略'],
      image: '/images/services/sustainable-strategy.png',
    },
    {
      id: 'sustainability-education',
      title: '可持续教育',
      subtitle: '将可持续理念转化为实际行动。',
      capabilities: ['工作坊', '培训', '能力建设'],
      image: '/images/services/sustainability-education.png',
    },
  ],
};

export const services = {
  en: english,
  zh: chinese,
};
