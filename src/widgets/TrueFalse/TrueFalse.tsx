import { useState } from 'react';
import { Box, Button, Typography, Paper, Alert, Collapse, CircularProgress } from '@mui/material';
import { TrueFalsePayload, TrueFalseSubmitData } from '@/types/trueFalse';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { submitSolution } from '@/api/submitSolution';
import { useWidgetContext } from '../contexts/WidgetContext';

interface TrueFalseProps {
  id: string;
  data: TrueFalsePayload;
}

export default function TrueFalse({ data, id }: TrueFalseProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const { completeWidget } = useWidgetContext()!;

  const [prevId, setPrevId] = useState(id);

  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  if (id !== prevId) {
    setPrevId(id);
    setSelectedOption(null);
    setIsCorrect(null);
    setLoading(false);
  }

  const handleAnswer = async (option: boolean) => {
    setLoading(true);
    setSelectedOption(option);

    const payload: TrueFalseSubmitData & { id: string } = {
      value: String(option),
      id: id,
    };

    const isAnswerRight = await submitSolution(payload, id);

    setIsCorrect(isAnswerRight);
    setLoading(false);
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          {data.statement[lang]}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
          <Button
            variant={selectedOption === true ? 'contained' : 'outlined'}
            color="success"
            onClick={() => handleAnswer(true)}
            disabled={loading || isCorrect === true}
            startIcon={loading && selectedOption === true ? <CircularProgress size={20} /> : null}
          >
            {lang === 'ru' ? 'Правда' : 'True'}
          </Button>
          <Button
            variant={selectedOption === false ? 'contained' : 'outlined'}
            color="error"
            onClick={() => handleAnswer(false)}
            disabled={loading || isCorrect === true}
            startIcon={loading && selectedOption === false ? <CircularProgress size={20} /> : null}
          >
            {lang === 'ru' ? 'Ложь' : 'False'}
          </Button>
        </Box>

        <Collapse in={isCorrect !== null}>
          <Alert severity={isCorrect ? 'success' : 'error'} sx={{ mb: 2, textAlign: 'left' }}>
            <Typography variant="subtitle2" fontWeight={800}>
              {isCorrect
                ? t(i18nKeys.widgetTrueFalse.correct)
                : lang === 'ru'
                  ? 'Попробуй снова!'
                  : 'Try again!'}
            </Typography>

            {isCorrect && data.explanation[lang]}
          </Alert>

          {isCorrect && (
            <Button variant="contained" fullWidth onClick={completeWidget} sx={{ mt: 1 }}>
              {lang === 'ru' ? 'Дальше' : 'Next'}
            </Button>
          )}
        </Collapse>
      </Paper>
    </Box>
  );
}
