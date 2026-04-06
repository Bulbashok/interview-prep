import { TrueFalsePayload } from '@/types/trueFalse';

interface TrueFalseProps {
  id: string;
  onAnswer: (answer: unknown) => void;
  data: TrueFalsePayload;
}

// eslint-disable-next-line
export default function WidgetStub2(props: TrueFalseProps) {
  return <div> Заглушка 2 </div>;
}
