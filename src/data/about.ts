import type { AboutContent } from './types';

const english: AboutContent = {
  eyebrow: 'About (better)labs',
  statement: [
    'Engineering rigour.',
    'Design imagination.',
    'Sustainability expertise.',
  ],
  body: [
    '(better)labs helps forward-thinking manufacturers, brands, and businesses redesign products, strategies, and business models that cut environmental impact while boosting ROI.',
    'We combine expertise in circular design, strategic innovation, and education to turn sustainability from a compliance exercise into a competitive advantage.',
  ],
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

const chinese: AboutContent = {
  eyebrow: '关于 (better)labs',
  statement: ['工程的严谨。', '设计的想象力。', '可持续发展的专业能力。'],
  body: [
    '(better)labs 帮助具有前瞻视野的制造商、品牌与企业重新设计产品、战略与商业模式，在降低环境影响的同时提升投资回报。',
    '我们融合循环设计、战略创新与教育赋能的专业能力，帮助企业将可持续发展从合规要求转化为竞争优势。',
  ],
  founder: '由常驻上海的产品设计工程师与可持续发展顾问 Tim Binnion 创立。',
  stories: [
    {
      id: 'circularity-bootcamp',
      title: 'Circularity Bootcamp',
      category: '战略 + 教育',
      images: [
        {
          src: '/images/about/bootcamp-facilitation.jpg',
          alt: 'Circularity Bootcamp 引导现场',
        },
        {
          src: '/images/about/bootcamp-activity.jpg',
          alt: 'Circularity Bootcamp 小组活动',
        },
      ],
    },
    {
      id: 'rural-innovation-safari',
      title: '乡村创新探索营',
      category: '教育实践',
      images: [
        {
          src: '/images/about/rural-safari-fieldwork.jpg',
          alt: '乡村创新探索营实地调研',
        },
        {
          src: '/images/about/rural-safari-facilitation.jpg',
          alt: '乡村创新探索营引导现场',
        },
      ],
    },
  ],
};

export const about = {
  en: english,
  zh: chinese,
};
