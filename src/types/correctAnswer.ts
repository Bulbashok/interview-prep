export interface AsyncSorterAnswer {
  callstack: string[];
  macrotasks: string[];
  microtasks: string[];
  outputOrder: string[];
}

export type CorrectAnswerType = number | boolean | AsyncSorterAnswer;

export interface AnswerDocument {
  correctAnswer: CorrectAnswerType;
}
