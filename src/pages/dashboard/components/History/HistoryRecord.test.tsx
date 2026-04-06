import { render } from '@testing-library/react';
import HistoryRecord from './HistoryRecord';
import { HistoryRecordProps } from '@/types/dashboard';

const HistoryRecordMocks: HistoryRecordProps = {
  subject: 'Core JS',
  doneQuestions: 77,
  allQuestions: 100,
  date: '2026-04-02',
};

const renderHistoryRecord = () => {
  return render(
    <HistoryRecord
      subject={HistoryRecordMocks.subject}
      doneQuestions={HistoryRecordMocks.doneQuestions}
      allQuestions={HistoryRecordMocks.allQuestions}
      date={HistoryRecordMocks.date}
    />,
  );
};

describe('History Record', () => {
  test('render', () => {
    renderHistoryRecord();
  });

  test('correct texts in component', () => {
    const { container } = renderHistoryRecord();

    const fullText = container.textContent;

    expect(fullText).toContain(HistoryRecordMocks.subject);
    expect(fullText).toContain(
      `${HistoryRecordMocks.doneQuestions}/${HistoryRecordMocks.allQuestions}`,
    );
    expect(fullText).toContain(HistoryRecordMocks.date);

    const verticalLines = fullText.split('|').length - 1;
    expect(verticalLines).toBe(2);
  });
});
