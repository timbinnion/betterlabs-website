import { projects as chineseProjects } from './cn/projects';
import { projects as englishProjects } from './en/projects';
import type { Localized, ProjectsContent } from './types';

export const projects: Localized<ProjectsContent> = {
  en: englishProjects,
  zh: chineseProjects,
};
