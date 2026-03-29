import { useState, useEffect } from 'react';
import { Box, CircularProgress, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Topic } from '@/pages/library/MainLibrary/Topics/topics';
import { Widget } from '@/types/widgets';
import { firestoreService } from '@/services/firestore';
import { notify } from '@/utils/notify';
import WidgetRender from '@/widgets/WidgetRender';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

import { AnswerDocument } from '@/types/correctAnswer';

interface TopicLearningViewProps {
  topic: Topic;
  onBack: () => void;
}

export const TopicLearningView = ({ topic, onBack }: TopicLearningViewProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const [currentStep, setCurrentStep] = useState(0);
  const [currentWidget, setCurrentWidget] = useState<Widget | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Загрузка виджета из Firebase
  useEffect(() => {
    const fetchWidget = async () => {
      try {
        setIsProcessing(true);
        const widgetId = topic.widgetIds[currentStep];
        const data = await firestoreService.getDocument<Widget>('widgets', widgetId);
        setCurrentWidget(data);
      } catch {
        notify.error(t(i18nKeys.widgetRender.errors.loadWidget));
      } finally {
        setIsProcessing(false);
      }
    };
    fetchWidget();
  }, [topic, currentStep, t]);

  // Получение правильного ответа из correct_answers
  const handleSendAnswer = async (userAnswer: unknown) => {
    if (!currentWidget) return;

    try {
      setIsProcessing(true);

      // Получаем ответ
      const answerData = await firestoreService.getDocument<AnswerDocument>(
        'correct_answers',
        currentWidget.id,
      );

      if (!answerData) throw new Error(t(i18nKeys.widgetRender.errors.serverError));

      const correct = answerData.correctAnswer;
      let isCorrect = false;

      // Сравниваем полученный ответ с ответом пользователя
      if (
        typeof userAnswer === 'object' &&
        userAnswer !== null &&
        typeof correct === 'object' &&
        correct !== null
      ) {
        // Если оба  AsyncSorterAnswer, сравниваем их структуру
        isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correct);
      } else {
        // Если это Quiz или TrueFalse
        isCorrect = userAnswer === correct;
      }

      if (isCorrect) {
        notify.success(t(i18nKeys.widgetRender.messages.correct));

        if (currentStep < topic.widgetIds.length - 1) {
          setCurrentStep((prev) => prev + 1);
          setCurrentWidget(null);
        } else {
          notify.success(t(i18nKeys.widgetRender.messages.finish));
          onBack();
        }
      } else {
        notify.error(t(i18nKeys.widgetRender.messages.wrong));
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error checking answer';
      notify.error(msg);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 8 } }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        sx={{ mb: 4, color: '#24a0ed', textTransform: 'none' }}
      >
        {t(i18nKeys.widgetRender.button)}
      </Button>

      <Typography variant="h4" sx={{ mb: 4, color: '#2c5269', fontWeight: 800 }}>
        {topic.title[lang]}
      </Typography>

      <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
        {isProcessing || !currentWidget ? (
          <CircularProgress sx={{ mt: 4 }} />
        ) : (
          <WidgetRender widget={currentWidget} sendAnswer={handleSendAnswer} />
        )}
      </Box>
    </Box>
  );
};
