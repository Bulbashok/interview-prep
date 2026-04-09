import { useEffect, useState } from 'react';
import { Topic } from '@/pages/library/MainLibrary/Topics/topics';
import { firestoreService } from '@/services/firestore';
import { notify } from '@/utils/notify';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { Widget } from '@/types/widgets';
import { useNavigate } from 'react-router';
import { protectedRoutes } from '@/router/routes';
import { WidgetContext } from '../contexts/WidgetContext';
import WidgetRender from '../WidgetRender/WidgetRender';
import { RootLayout } from '@/components/skeleton/RootLayout';
import { createHistoryRecord } from '@/api/createHistoryRecord';
import { updateExp } from '@/api/updateExp';

export const WidgetController = ({ topic }: { topic: Topic }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [currentWidget, setCurrentWidget] = useState<Widget | null>(null);

  useEffect(() => {
    const fetchWidget = async () => {
      try {
        const widgetId = topic.widgetIds[currentStep];

        const widget = await firestoreService.getDocument<Widget>('widgets', widgetId);
        setCurrentWidget(widget);
      } catch {
        notify.error('error');
      }
    };

    fetchWidget();
  }, [currentStep, topic]);

  const completeWidget = async () => {
    const nextStep = currentStep + 1;
    const totalWidgets = topic.widgetIds.length;

    await createHistoryRecord(topic.title.en, currentStep + 1, totalWidgets).catch((error) => {
      console.error('Failded to create history record:', error);
    });

    await updateExp().catch((error) => {
      console.error('Failed to update user experience', error);
    });

    if (nextStep < totalWidgets) {
      setCurrentStep(nextStep);
    } else {
      navigate(protectedRoutes.library);
      notify.success(t(i18nKeys.widgetRender.errors.allCompleted));
    }
  };

  return (
    <WidgetContext.Provider value={{ completeWidget }}>
      {currentWidget ? <WidgetRender widget={currentWidget} /> : <RootLayout />}
    </WidgetContext.Provider>
  );
};
