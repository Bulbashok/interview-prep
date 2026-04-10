import './Quiz.scss';
import { useState, useCallback } from 'react';
import { Box, Button, Typography, Paper, Alert, Collapse, CircularProgress } from '@mui/material';
import { QuizPayload } from '@/types/quiz';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { submitSolution } from '@/api/submitSolution';
import { useWidgetContext } from '../contexts/WidgetContext';

interface QuizProps {
  id: string;
  data: QuizPayload;
}

export default function Quiz({ data, id }: QuizProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const widgetContext = useWidgetContext();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnswer = useCallback(
    async (index: number) => {
      setLoading(true);
      setSelectedIndex(index);

      const payload = {
        id,
        type: 'quiz' as const,
        selectedOption: data.options[index][lang],
      };

      const isAnswerRight = await submitSolution(payload, id);

      setIsCorrect(isAnswerRight);
      setLoading(false);
    },
    [id, data.options, lang],
  );

  const handleNext = useCallback(() => {
    widgetContext?.completeWidget();
  }, [widgetContext]);

  return (
    <Box
      sx={{
        mt: 4,
        pb: 4,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 6,
          bgcolor: 'var(--bg-primary)',
          color: 'var(--primary-text-color)',
        }}
      >
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: 'var(--heading-color)' }}>
          {data.question[lang]}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          {data.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedIndex === index ? 'contained' : 'outlined'}
              color={selectedIndex === index ? (isCorrect ? 'success' : 'error') : 'primary'}
              onClick={() => handleAnswer(index)}
              disabled={loading}
              startIcon={loading && selectedIndex === index ? <CircularProgress size={20} /> : null}
              sx={{
                py: 1.5,
                fontSize: '1rem',
              }}
            >
              {option[lang]}
            </Button>
          ))}
        </Box>

        <Collapse in={isCorrect !== null}>
          <Alert
            severity={isCorrect ? 'success' : 'error'}
            sx={{ mb: 2, textAlign: 'left', bgcolor: 'var(--bg-primary)' }}
          >
            <Typography variant="subtitle2" fontWeight={800}>
              {isCorrect ? t(i18nKeys.quiz.successTitle) : t(i18nKeys.quiz.retryMessage)}
            </Typography>

            {isCorrect && data.explanation?.[lang]}
          </Alert>

          {isCorrect && (
            <Button variant="contained" fullWidth onClick={handleNext} sx={{ mt: 1 }}>
              {t(i18nKeys.quiz.nextButton)}
            </Button>
          )}
        </Collapse>
      </Paper>
    </Box>
  );
}
