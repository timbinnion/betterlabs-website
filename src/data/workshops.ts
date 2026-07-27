import { workshops as chineseWorkshops } from './cn/workshops';
import { workshops as englishWorkshops } from './en/workshops';
import type { Localized, WorkshopsContent } from './types';

export const workshops: Localized<WorkshopsContent> = {
  en: englishWorkshops,
  zh: chineseWorkshops,
};
