export type Language = "fr" | "en";

export class LanguageService {
  private currentLanguage: Language = "fr";

  get language(): Language {
    return this.currentLanguage;
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
  }
}
