import { QuizPayload } from '@/types/quiz';

interface QuizWidgetProps {
  id: string;
  onAnswer: (answer: unknown) => void;
  data: QuizPayload;
}

// eslint-disable-next-line
export default function WidgetStub1(props: QuizWidgetProps) {
  return <div> Заглушка 1 </div>;
}
