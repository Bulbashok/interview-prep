import { TrueFalsePayload } from '@/types/trueFalse';

interface TrueFalseProps {
  id: string;
  data: TrueFalsePayload;
}

export default function WidgetStub2({ data, id }: TrueFalseProps) {
  console.log('TrueFalse widget:', { data, id });
  return <div> Заглушка 2 </div>;
}
