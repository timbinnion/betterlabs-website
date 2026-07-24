export const supportedLocales = ['en', 'zh'] as const;

export type Locale = (typeof supportedLocales)[number];

export const site = {
  name: '(better)labs',
  defaultLocale: 'en' satisfies Locale,
  supportedLocales,
} as const;

export const localePaths: Record<Locale, string> = {
  en: '/',
  zh: '/cn/',
};

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};
