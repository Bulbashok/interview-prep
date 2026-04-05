import { Button, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

import { Topic } from '../Topics/topics';
import { WidgetController } from '@/widgets/WidgetController/WidgetController';

export const TopicLearning = ({ topic, onBack }: { topic: Topic; onBack: () => void }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: { xs: 2, md: 8 } }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 4, textTransform: 'none' }}>
        {t(i18nKeys.widgetRender.button)}
      </Button>
      <Typography variant="h4" sx={{ mb: 4, color: '#2c5269', fontWeight: 800 }}>
        {topic.title.en}
      </Typography>
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <WidgetController topic={topic} />
      </Box>
    </Box>
  );
};
