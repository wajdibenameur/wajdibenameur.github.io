import { ProjectModel } from "../../../core/models/project.model";

export function projectCard(project: ProjectModel, language: "fr" | "en"): string {
  return `
    <article class="project-card">
      <div class="project-top">
        <div>
          <p class="eyebrow">${project.id}</p>
          <h3>${project.title}</h3>
        </div>
        <span class="project-tag">${language === "fr" ? "Disponible" : "Available"}</span>
      </div>
      <p>${project.description[language]}</p>
      <div class="project-meta">
        ${project.meta.map((item) => `<span class="meta-chip">${item}</span>`).join("")}
      </div>
      <div class="project-links">
        <a class="primary-btn" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
        <a class="secondary-btn" href="${project.caseLink}">Case study</a>
      </div>
    </article>
  `;
}
