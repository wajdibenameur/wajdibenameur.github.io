import { LanguageService } from "./core/services/language.service";
import { PROJECTS } from "./shared/data/projects.data";
import { SKILLS } from "./shared/data/skills.data";
import { projectCard } from "./shared/components/project-card/project-card";
import { skillBadge } from "./shared/components/skill-badge/skill-badge";

export class AppComponent {
  private languageService = new LanguageService();

  renderProjects(): string {
    return PROJECTS.map((project) => projectCard(project, this.languageService.language)).join("");
  }

  renderSkills(): string {
    return SKILLS.map((skill) => skillBadge(skill.title, skill.summary)).join("");
  }
}
