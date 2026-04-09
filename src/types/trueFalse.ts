export interface TrueFalsePayload {
  statement: {
    ru: string;
    en: string;
  };
  explanation: {
    ru: string;
    en: string;
  };
}

export interface TrueFalseSubmitData {
  value: string;
}
