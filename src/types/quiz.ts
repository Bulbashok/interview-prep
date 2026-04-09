export interface QuizPayload {
  question: {
    ru: string;
    en: string;
  };
  options: QuizOption[];
  explanation: {
    ru: string;
    en: string;
  };
  correctOptionIndex: number;
}

export interface QuizOption {
  ru: string;
  en: string;
}
