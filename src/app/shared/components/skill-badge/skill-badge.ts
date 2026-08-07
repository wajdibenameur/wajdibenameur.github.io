export function skillBadge(title: string, summary: string): string {
  return `
    <article class="skill-card">
      <strong>${title}</strong>
      <p>${summary}</p>
    </article>
  `;
}
