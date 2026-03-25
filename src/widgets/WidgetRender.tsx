import { Box, Typography, Button } from '@mui/material';
import { WidgetsType, WidgetData } from '../types/widgets';
import { Topic } from '../pages/library/MainLibrary/Topics/topics';
import WidgetStub1 from './Quiz/Stub1';
import WidgetStub2 from './TrueFalse/Stub2';
import WidgetStub3 from './Async-sorter/Stub3';

const widgetNames = {
  widget1: 'quiz',
  widget2: 'true/false',
  widget3: 'async-sorter',
} as const;

interface WindgetRenderProps {
  topicData: Topic | null;
  onFinish: () => void;
  widget?: WidgetsType;
  data?: WidgetData;
  sendAnswer?: () => void;
}

export default function WidgetRender({
  topicData,
  onFinish,
  widget,
  data,
  sendAnswer,
}: WindgetRenderProps) {
  // Заглушка
  if (!topicData || !widget || !data || !sendAnswer) {
    return (
      <Box sx={{ p: 4, textAlign: 'center', bgcolor: '#f0f7ff', borderRadius: '15px' }}>
        <Typography variant="h6">Learning Mode: {topicData?.title.en}</Typography>
        <Typography sx={{ mb: 2 }}>Widget content is coming soon...</Typography>
        <Button variant="contained" onClick={onFinish}>
          Exit to Library
        </Button>
      </Box>
    );
  } // Заглушка

  const renderWidget = () => {
    switch (widget) {
      case widgetNames.widget1:
        return <WidgetStub1 data={data} sendAnswer={sendAnswer} />;
      case widgetNames.widget2:
        return <WidgetStub2 data={data} sendAnswer={sendAnswer} />;
      case widgetNames.widget3:
        return <WidgetStub3 data={data} sendAnswer={sendAnswer} />;
      default:
        return null;
    }
  };

  return renderWidget();
}
