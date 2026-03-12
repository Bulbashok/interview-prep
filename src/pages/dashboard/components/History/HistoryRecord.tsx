import './HistoryRecord.scss';

import { HistoryRecordData } from '@/types/dashboard';

export default function HistoryRecord(props: HistoryRecordData) {
  const { subsject, doneQuestions, allQuestions, date } = props;

  return (
    <div className="historyRecord">
      <p className="historyRecord__text historyRecord__text_name">{subsject}</p>
      <span className="historyRecord__dividingLine">|</span>
      <p className="historyRecord__text">
        {doneQuestions}/{allQuestions}
      </p>
      <span className="historyRecord__dividingLine">|</span>
      <p className="historyRecord__text">{date}</p>
    </div>
  );
}
