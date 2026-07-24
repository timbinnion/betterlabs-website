import { about } from './about';
import { audiences } from './audiences';
import { clients } from './clients';
import { cta } from './cta';
import { hero } from './hero';
import { projects } from './projects';
import { questions } from './questions';
import { services } from './services';
import type { Locale } from './site';
import { ui } from './ui';

export function getHomepageContent(locale: Locale) {
  return {
    ui: ui[locale],
    hero: hero[locale],
    questions: questions[locale],
    services: services[locale],
    projects: projects[locale],
    audiences: audiences[locale],
    clients: clients[locale],
    about: about[locale],
    cta: cta[locale],
  };
}

export type HomepageContent = ReturnType<typeof getHomepageContent>;
