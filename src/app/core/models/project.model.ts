export type ProjectCategory = "business" | "java" | "ai" | "devops";

export interface ProjectModel {
  id: string;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  tags: ProjectCategory[];
  meta: string[];
  github: string;
  caseLink: string;
}
