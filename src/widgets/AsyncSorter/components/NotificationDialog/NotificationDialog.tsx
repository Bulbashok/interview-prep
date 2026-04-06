import { i18nKeys } from '@/i18n/i18n-keys';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface NotificationDialogProps {
  open: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

export default function NotificationDialog({ open, onClose, isSuccess }: NotificationDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: { color: 'var(--primary-text-color)', bgcolor: 'var(--bg-primary)' },
        },
      }}
    >
      <DialogTitle>
        {isSuccess ? t(i18nKeys.asyncSorter.successTitle) : t(i18nKeys.asyncSorter.failureTitle)}
      </DialogTitle>
      <DialogContent>
        <Typography>
          {isSuccess ? t(i18nKeys.asyncSorter.success) : t(i18nKeys.asyncSorter.failure)}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color={isSuccess ? 'success' : 'error'}>
          {isSuccess
            ? t(i18nKeys.asyncSorter.successButton)
            : t(i18nKeys.asyncSorter.failureButton)}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
