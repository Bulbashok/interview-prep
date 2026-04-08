import './ResultDialog.scss';
import Button from '@/components/button/button';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';

interface ResultDialogProps {
  isOpen: boolean;
  isSuccess: boolean;
  explanation: string;
  onNext: () => void;
  onRetry: () => void;
}

const resultDialogClasses = {
  overlay: 'result-dialog__overlay',
  dialog: 'result-dialog',
  icon: 'result-dialog__icon',
  title: 'result-dialog__title',
  explanation: 'result-dialog__explanation',
  actions: 'result-dialog__actions',
} as const;

export default function ResultDialog({
  isOpen,
  isSuccess,
  explanation,
  onNext,
  onRetry,
}: ResultDialogProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className={resultDialogClasses.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={isSuccess ? t(i18nKeys.quiz.successTitle) : t(i18nKeys.quiz.failureTitle)}
    >
      <div className={resultDialogClasses.dialog}>
        <div className={resultDialogClasses.icon} aria-hidden="true">
          {isSuccess ? '✅' : '❌'}
        </div>
        <h3 className={resultDialogClasses.title}>
          {isSuccess ? t(i18nKeys.quiz.successTitle) : t(i18nKeys.quiz.failureTitle)}
        </h3>
        <p className={resultDialogClasses.explanation}>{explanation}</p>
        <div className={resultDialogClasses.actions}>
          {!isSuccess && <Button content={t(i18nKeys.quiz.retryButton)} onClick={onRetry} />}
          <Button
            content={isSuccess ? t(i18nKeys.quiz.nextButton) : t(i18nKeys.quiz.nextButton)}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
}
