import { useEffect, useState } from 'react';
import { Topic } from '@/types/topic';
import { firestoreService } from '@/services/firestore';
import { Widget } from '@/types/widgets';
import { WidgetContext } from '../contexts/WidgetContext';
import WidgetRender from '../WidgetRender/WidgetRender';
import { RootLayout } from '@/components/skeleton/RootLayout';
import { createHistoryRecord } from '@/api/createHistoryRecord';
import { updateExp } from '@/api/updateExp';
import { updateStreak } from '@/api/streakCounter';
import { updateProgress } from '@/api/updateProgress';
import CompleteTopicMessage from '@/components/CompleteTopicMessage/CompleteTopicMessage';

export const WidgetController = ({ topic }: { topic: Topic }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentWidget, setCurrentWidget] = useState<Widget | null>(null);
  const [isCompelte, setIsComplete] = useState(false);

  useEffect(() => {
    const fetchWidget = async () => {
      try {
        const widgetId = topic.widgetIds[currentStep];

        const widget = await firestoreService.getDocument<Widget>('widgets', widgetId);
        setCurrentWidget(widget);
      } catch {
        console.error('Fetch widget failed');
      }
    };

    fetchWidget();
  }, [currentStep, topic]);

  const completeWidget = async () => {
    const nextStep = currentStep + 1;
    const totalWidgets = topic.widgetIds.length;

    await createHistoryRecord(topic.title.en, currentStep + 1, totalWidgets);

    await updateExp();

    await updateStreak();

    if (nextStep < totalWidgets) {
      setCurrentStep(nextStep);
    } else {
      await updateProgress(topic.id);
      setIsComplete(true);
    }
  };

  return (
    <WidgetContext.Provider value={{ completeWidget }}>
      {currentWidget ? <WidgetRender widget={currentWidget} /> : <RootLayout />}
      {isCompelte && <CompleteTopicMessage />}
    </WidgetContext.Provider>
  );
};
