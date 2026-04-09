import './Quiz.scss';
import { useState, useCallback, useEffect } from 'react';
import { QuizPayload } from '@/types/quiz';
import Button from '@/components/button/button';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useWidgetContext } from '../contexts/WidgetContext';
import { submitQuizAnswer } from './quizSubmit';
import ResultDialog from './ResultDialog';
import { quizClasses } from './quizClasses';

interface QuizProps {
  id: string;
  data: QuizPayload;
}

interface OptionButtonProps {
  text: string;
  isSelected: boolean;
  isDisabled: boolean;
  index: number;
  totalOptions: number;
  onSelect: (index: number) => void;
}

function OptionButton({
  text,
  isSelected,
  isDisabled,
  index,
  totalOptions,
  onSelect,
}: OptionButtonProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % totalOptions;
      onSelect(nextIndex);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + totalOptions) % totalOptions;
      onSelect(prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <button
      className={`${quizClasses.option} ${isSelected ? quizClasses.optionSelected : ''}`}
      onClick={() => onSelect(index)}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      role="radio"
      aria-checked={isSelected}
      aria-label={text}
      tabIndex={isSelected ? 0 : -1}
    >
      {text}
    </button>
  );
}

export default function Quiz({ id, data }: QuizProps) {
  const { t } = useTranslation();
  const widgetContext = useWidgetContext();
  const lang: 'ru' | 'en' = (t('lng') as 'ru' | 'en') || 'en';

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelectOption = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (selectedIndex === null || isSubmitting) return;

    setIsSubmitting(true);

    const selectedOption = data.options[selectedIndex];

    const result = await submitQuizAnswer(
      id,
      selectedOption[lang],
      data.correctOptionIndex,
      data.options,
    );
    setIsCorrect(result);
    setIsSubmitting(false);
    setShowResult(true);
  }, [selectedIndex, isSubmitting, data, id, lang]);
  const handleNext = useCallback(() => {
    setShowResult(false);
    setSelectedIndex(null);
    widgetContext?.completeWidget();
  }, [widgetContext]);
  const handleRetry = useCallback(() => {
    setShowResult(false);
    setSelectedIndex(null);
    setIsCorrect(false);
  }, []);
  useEffect(() => {
    if (showResult) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (isCorrect) {
            handleNext();
          } else {
            handleRetry();
          }
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showResult, isCorrect, handleNext, handleRetry]);
  return (
    <div className={quizClasses.widget} id={id} role="group" aria-label={t(i18nKeys.quiz.question)}>
      <div className={quizClasses.header}>
        <p className={quizClasses.question}>{data.question[lang]}</p>
        <p className={quizClasses.instruction}>{t(i18nKeys.quiz.instruction)}</p>
      </div>
      <div
        className={quizClasses.options}
        role="radiogroup"
        aria-label={t(i18nKeys.quiz.optionsLabel)}
      >
        {data.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option[lang]}
            isSelected={selectedIndex === index}
            isDisabled={isSubmitting || showResult}
            index={index}
            totalOptions={data.options.length}
            onSelect={handleSelectOption}
          />
        ))}
      </div>
      {!showResult && (
        <div className={quizClasses.submit}>
          {isSubmitting ? (
            <div className={quizClasses.loading} role="status" aria-live="polite">
              <div className={quizClasses.loadingSpinner} />
              <span>{t(i18nKeys.quiz.submitting)}</span>
            </div>
          ) : (
            <Button
              content={t(i18nKeys.quiz.submitButton)}
              onClick={handleSubmit}
              // @ts-expect-error MUI Button accepts disabled prop
              disabled={selectedIndex === null}
            />
          )}
        </div>
      )}
      <ResultDialog
        isOpen={showResult}
        isSuccess={isCorrect}
        explanation={data.explanation[lang]}
        onNext={handleNext}
        onRetry={handleRetry}
      />
    </div>
  );
}
