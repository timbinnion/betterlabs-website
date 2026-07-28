import { contactForm as chineseContactForm } from './cn/contact';
import { contactForm as englishContactForm } from './en/contact';
import type { CtaContent, Localized } from './types';

const english = {
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

export const cta: Localized<CtaContent> = {
  en: {
    ...english,
    wechat: {
      title: 'Prefer WeChat?',
      caption: 'Scan to connect directly.',
      imageAlt: 'Better Labs WeChat QR code',
    },
    form: englishContactForm,
  },
  zh: {
    eyebrow: '面临可持续发展挑战？',
    headline: '我们能为您创造怎样的更优方案？',
    body: '无论是一款产品、一个系统，还是一项愿景，我们都能帮助您找到切实可行的前进路径。',
    action: {
      label: '开启合作交流',
      href: 'mailto:hello@betterlabs.example',
    },
    footerMeta: '循环设计与创新 · 上海 · © 2026',
    wechat: {
      title: '更习惯使用微信？',
      caption: '扫描二维码即可联系。',
      imageAlt: '(better)labs 微信二维码',
    },
    form: chineseContactForm,
  },
};
