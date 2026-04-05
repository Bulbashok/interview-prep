import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/PageWrapper/PageWrapper';
import WidgetRender from '@/widgets/WidgetRender/WidgetRender';

import { Topic } from '../library/MainLibrary/Topics/topics';
import { Widget } from '@/types/widgets';
import { useLocation, useNavigate } from 'react-router';
import { protectedRoutes } from '@/router/routes';

interface LocationState {
  widget: Widget;
  topic: Topic;
}

export default function Practice() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const state: LocationState = location.state;
  const topic = state.topic;
  const widget = state.widget;

  return (
    <PageWrapper>
      <Box sx={{ p: { xs: 2, md: 8 } }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(protectedRoutes.library)}
          sx={{ mb: 4, color: '#24a0ed', textTransform: 'none' }}
        >
          {t(i18nKeys.widgetRender.button)}
        </Button>

        <Typography variant="h4" sx={{ mb: 4, color: '#2c5269', fontWeight: 800 }}>
          {topic.title[lang]}
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
          <WidgetRender widget={widget} />
        </Box>
      </Box>
    </PageWrapper>
  );
}
