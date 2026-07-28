import type { AudiencesContent } from './types';

const english: AudiencesContent = {
  eyebrow: 'Who we work with',
  title: 'Three core client types where we create the most value.',
  items: [
    {
      id: 'manufacturers',
      title: 'Product Designers and Manufacturers',
      body:
        'Future-proofing products through circular design and measurable environmental impact.',
      icon: '/images/audiences/manufacturers.png',
    },
    {
      id: 'experience-companies',
      title: 'Retail, Exhibition, and Event Companies',
      body:
        'Delivering low-carbon, modular solutions for sustainable spaces that meet client ESG demands.',
      icon: '/images/audiences/experience-companies.png',
    },
    {
      id: 'brands',
      title: 'Brands and Businesses with ESG Commitments',
      body:
        'Helping large organisations achieve ambitious ESG goals and market leadership through sustainable design, strategy, and measurable impact.',
      icon: '/images/audiences/brands.png',
    },
  ],
};

const chinese: AudiencesContent = {
  eyebrow: '我们的合作对象',
  title: '我们为三类核心客户创造最大价值。',
  items: [
    {
      id: 'manufacturers',
      title: '产品设计师与制造商',
      body: '通过循环设计与可量化的环境绩效，帮助产品提升面向未来的竞争力。',
      icon: '/images/audiences/manufacturers.png',
    },
    {
      id: 'brands',
      title: '有 ESG 承诺的品牌与企业',
      body:
        '通过可持续设计、战略与可量化的成果，帮助大型组织实现更具雄心的 ESG 目标并建立市场领导力。',
      icon: '/images/audiences/brands.png',
    },
    {
      id: 'experience-companies',
      title: '零售、展览与活动公司',
      body: '提供低碳、模块化的可持续空间解决方案，满足客户的 ESG 要求。',
      icon: '/images/audiences/experience-companies.png',
    },
  ],
};

export const audiences = {
  en: english,
  zh: chinese,
};
