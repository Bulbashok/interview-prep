export interface HistoryRecordData {
  subject: string;
  doneQuestions: number;
  allQuestions: number;
  date: string;
}

export interface DashboardUserData {
  name: string;
  progress: number;
  xp: number;
  maxExp: number;
  streak: {
    current: number;
    best: number;
  };
  history: HistoryRecordData[];
}
