import { useState, useEffect } from 'react';
import { Topic } from '@/pages/library/MainLibrary/Topics/topics';
import { firestoreService } from '@/services/firestore';
import { notify } from '@/utils/notify';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { Widget } from '@/types/widgets';
import { useNavigate } from 'react-router-dom';
import { protectedRoutes } from '@/router/routes';

import { Box, CircularProgress } from '@mui/material';

export const WidgetController = ({ topic }: { topic: Topic }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [currentStep] = useState(0);

  useEffect(() => {
    const fetchWidget = async () => {
      try {
        const widgetId = topic.widgetIds[currentStep];
        const data = await firestoreService.getDocument<Widget>('widgets', widgetId);

        if (data) {
          navigate(protectedRoutes.practice.replace(':topicId', topic.id), {
            state: {
              topic: topic,
              widget: data,
            },
          });
        }
      } catch {
        notify.error(t(i18nKeys.widgetRender.errors.loadWidget));
      }
    };

    fetchWidget();
  }, [currentStep, topic, navigate, t]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress sx={{ color: '#24a0ed' }} />
    </Box>
  );
};
