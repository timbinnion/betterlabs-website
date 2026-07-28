import type { Locale } from './site';

export type Localized<T> = Record<Locale, T>;

export interface LinkContent {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string[];
  servicesLead: string;
  body: string;
  primaryAction: LinkContent;
  secondaryAction: LinkContent;
  proof: string;
  location: string;
}

export interface QuestionsContent {
  eyebrow: string;
  title: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  introduction: string;
  items: Array<{
    id: string;
    title: string;
    subtitle: string;
    capabilities: string[];
    image: string;
  }>;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface ProjectContent {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
  tags: string[];
  metrics?: [] | [ImpactMetric] | [ImpactMetric, ImpactMetric];
  featured?: boolean;
  visible?: boolean;
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  previousLabel: string;
  nextLabel: string;
  items: ProjectContent[];
}

export interface WorkshopOffering {
  id: string;
  title: string;
  description: string;
}

export interface WorkshopsContent {
  eyebrow: string;
  headline: string;
  positioning: string;
  image: {
    src: string;
    alt: string;
  };
  offerings: WorkshopOffering[];
  bespoke: string;
}

export interface AudiencesContent {
  eyebrow: string;
  title: string;
  items: Array<{
    id: string;
    title: string;
    body: string;
    icon: string;
  }>;
}

export interface ClientsContent {
  eyebrow: string;
  items: Array<{
    name: string;
    image: {
      src: string;
      alt: string;
    };
    visible?: boolean;
  }>;
}

export interface AboutContent {
  eyebrow: string;
  statement: string;
  body: string;
  founder: string;
  stories: Array<{
    id: string;
    title: string;
    category: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  }>;
}

export interface CtaContent {
  eyebrow: string;
  headline: string;
  body: string;
  action: LinkContent;
  wechat: WeChatContactContent;
  footerMeta: string;
  form: ContactFormContent;
}

export interface WeChatContactContent {
  title: string;
  caption: string;
  imageAlt: string;
}

export interface ContactFormContent {
  nameLabel: string;
  organisationLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: Array<{
    value: string;
    label: string;
  }>;
  messageLabel: string;
  requiredHint: string;
  submitLabel: string;
  submittingLabel: string;
  closeLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface UiContent {
  pageTitle: string;
  pageDescription: string;
  skipLinkLabel: string;
  languageSwitcherLabel: string;
  primaryNavigationLabel: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
}
