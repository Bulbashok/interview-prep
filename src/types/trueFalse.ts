import { BaseWidget } from './widgets';

export interface TrueFalsePayload extends BaseWidget {
  statement: {
    ru: string;
    en: string;
  };
  explanation: {
    ru: string;
    en: string;
  };
}
