export function socialLinks(githubUrl: string, linkedInUrl: string): string {
  return `
    <div class="hero-cta">
      <a class="tertiary-btn" href="${githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
      <a class="tertiary-btn" href="${linkedInUrl}" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  `;
}
