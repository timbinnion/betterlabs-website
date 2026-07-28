import type { AudiencesContent } from './types';

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

const chinese: AudiencesContent = {
  eyebrow: '我们的合作对象',
  title: '为需要将可持续发展落到实处的团队而设计。',
  items: [
    {
      id: 'manufacturers',
      title: '产品设计师与制造商',
      body: '通过循环设计打造面向未来的产品。',
      icon: '/images/audiences/manufacturers.png',
    },
    {
      id: 'brands',
      title: '有 ESG 承诺的品牌与企业',
      body: '将可持续承诺转化为客户价值。',
      icon: '/images/audiences/brands.png',
    },
    {
      id: 'experience-companies',
      title: '零售、展览与活动公司',
      body: '打造低碳空间、可重复使用的系统与循环体验。',
      icon: '/images/audiences/experience-companies.png',
    },
  ],
};

export const audiences = {
  en: english,
  zh: chinese,
};
