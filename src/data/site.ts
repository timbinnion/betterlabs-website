export const supportedLocales = ['en', 'zh'] as const;

export type Locale = (typeof supportedLocales)[number];

export const site = {
  name: '(better)labs',
  description:
    'Sustainable innovation expertise for products, strategies, and business models.',
  defaultLocale: 'en' satisfies Locale,
  supportedLocales,
} as const;
