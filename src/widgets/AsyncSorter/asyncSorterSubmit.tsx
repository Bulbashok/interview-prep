import { submitSolution } from '@/api/submitSolution';
import { AsyncSorterAnswerData, AsyncSorterAnswer } from '@/types/asyncSorter';
import NotificationDialog from './components/NotificationDialog/NotificationDialog';
import React from 'react';
import { createRoot } from 'react-dom/client';

export const asyncSorterSubmit = async (
  answer: AsyncSorterAnswerData,
  id: string,
  onSuccess: () => void,
): Promise<React.ReactNode> => {
  const solution: AsyncSorterAnswer = {
    id: id,
    type: 'async',
    callstack: answer.callstack.sort().join(','),
    microtasks: answer.microtasks.sort().join(','),
    macrotasks: answer.macrotasks.sort().join(','),
    outputOrder: answer.outputOrder.join(','),
  };
  const result = await submitSolution(solution, id);

  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  const handleClose = () => {
    root.unmount();
    container.remove();

    if (result) onSuccess();
  };

  root.render(<NotificationDialog open={true} onClose={handleClose} isSuccess={result} />);

  if (result) {
    return <NotificationDialog open={result} onClose={() => {}} isSuccess={result} />;
  } else {
    return <NotificationDialog open={result} onClose={() => {}} isSuccess={result} />;
  }
};
