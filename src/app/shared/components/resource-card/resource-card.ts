export interface ResourceCardModel {
  label: string;
  title: string;
  text: string;
  linkText: string;
  href: string;
}

export function resourceCard(card: ResourceCardModel): string {
  return `
    <article class="resource-card">
      <span class="resource-label">${card.label}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
      <a class="secondary-btn" href="${card.href}" target="_blank" rel="noreferrer">${card.linkText}</a>
    </article>
  `;
}
