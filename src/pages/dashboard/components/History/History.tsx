import './History.scss';

import HistoryRecord from './HistoryRecord';
import { HistoryRecordData } from '@/types/dashboard';

export default function History(props: { historyData: HistoryRecordData[] }) {
  const { historyData } = props;

  return (
    <div className="history">
      {historyData.map((entry) => (
        <HistoryRecord
          subject={entry.subject}
          doneQuestions={entry.doneQuestions}
          allQuestions={entry.allQuestions}
          date={entry.date}
        />
      ))}
    </div>
  );
}
