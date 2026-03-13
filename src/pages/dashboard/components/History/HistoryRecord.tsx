import './HistoryRecord.scss';

import { HistoryRecordData } from '@/types/dashboard';

export default function HistoryRecord(props: HistoryRecordData) {
  const { subsject, doneQuestions, allQuestions, date } = props;

  return (
    <div className="history-record">
      <p className="history-record__text history-record__text_name">{subsject}</p>
      <span className="history-record__dividing-line">|</span>
      <p className="history-record__text">
        {doneQuestions}/{allQuestions}
      </p>
      <span className="history-record__dividing-line">|</span>
      <p className="history-record__text">{date}</p>
    </div>
  );
}
