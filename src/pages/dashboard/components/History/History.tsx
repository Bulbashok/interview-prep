import './History.scss';

import HistoryRecord from './HistoryRecord';
import { HistoryRecordProps } from '@/types/dashboard';

export default function History(props: { historyData: HistoryRecordProps[] }) {
  const { historyData } = props;

  return (
    <div className="history">
      {historyData.map((entry, index) => (
        <HistoryRecord
          key={index}
          subject={entry.subject}
          doneQuestions={entry.doneQuestions}
          allQuestions={entry.allQuestions}
          date={entry.date}
        />
      ))}
    </div>
  );
}
