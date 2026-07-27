import { contactForm as chineseContactForm } from './cn/contact';
import { contactForm as englishContactForm } from './en/contact';
import type { CtaContent, Localized } from './types';

const shared = {
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
    ...shared,
    wechat: {
      title: 'Prefer WeChat?',
      caption: 'Scan to connect directly.',
      imageAlt: 'Better Labs WeChat QR code',
    },
    form: englishContactForm,
  },
  zh: {
    ...shared,
    wechat: {
      title: '更喜欢使用微信？',
      caption: '扫描二维码即可联系。',
      imageAlt: 'Better Labs WeChat QR code',
    },
    form: chineseContactForm,
  },
};
