import type { HeroContent } from './types';

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

const chinese: HeroContent = {
  eyebrow: '我们是 (better)labs。',
  headline: [
    '（可持续）设计与创新顾问。',
    '（可持续）设计。',
    '（可持续）战略。',
    '（可持续）教育。',
  ],
  servicesLead: '我们专注于',
  body:
    '我们帮助制造商、品牌与企业重新设计产品、战略与商业模式，在降低环境影响的同时创造新的商业价值。',
  primaryAction: {
    label: '开启合作交流',
    href: '#contact',
  },
  secondaryAction: {
    label: '查看精选项目',
    href: '#projects',
  },
  proof: '循环设计 × 战略创新 × 教育赋能',
  location: '上海 · 服务全球',
};

export const hero = {
  en: english,
  zh: chinese,
};
