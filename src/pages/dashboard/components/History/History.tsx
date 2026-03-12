import './History.scss';

import HistoryRecord from './HistoryRecord';
import { HistoryRecordData } from '@/types/dashboard';

export default function History(props: { historyData: HistoryRecordData[] }) {
  const { historyData } = props;

  return (
    <div className="history">
      {historyData.map((entry) => (
        <HistoryRecord
          subsject={entry.subsject}
          doneQuestions={entry.doneQuestions}
          allQuestions={entry.allQuestions}
          date={entry.date}
        />
      ))}
    </div>
  );
}
