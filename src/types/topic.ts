export interface Topic {
  title: { ru: string; en: string };
  id: string;
  description: {
    ru: string;
    en: string;
  };
  tags: string[];
  difficulty: number;
  widgetIds: string[];
  order: number;
}
