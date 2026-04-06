import { QuizPayload } from '@/types/quiz';

interface QuizWidgetProps {
  id: string;
  data: QuizPayload;
}

export default function WidgetStub1({ data, id }: QuizWidgetProps) {
  console.log('Quiz widget:', { data, id });
  return <div> Заглушка 1 </div>;
}
