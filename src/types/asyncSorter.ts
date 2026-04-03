export interface AsyncSorterPayload {
  codeSnippet: string;
  blocks: AsyncSorterBlock[];
}

export interface AsyncSorterBlock {
  id: string;
  code: string;
  label: string;
}

export interface AsyncSorterAnswerData {
  callstack: string[];
  microtasks: string[];
  macrotasks: string[];
  outputOrder: string[];
}

export interface AsyncSorterAnswer extends AsyncSorterAnswerData {
  id: string;
}
