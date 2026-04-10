import { i18nKeys } from '@/i18n/i18n-keys';
import { protectedRoutes } from '@/router/routes';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Button from '../button/button';

export default function CompleteTopicMessage() {
  const [open, setOpen] = useState(true);
  const navigation = useNavigate();
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
    navigation(protectedRoutes.library);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: { color: 'var(--primary-text-color)', bgcolor: 'var(--bg-primary)' },
        },
      }}
    >
      <DialogTitle>{t(i18nKeys.completeTopicMessage.title)}</DialogTitle>
      <DialogContent>
        <Typography>{t(i18nKeys.completeTopicMessage.message)}</Typography>
      </DialogContent>
      <DialogActions>
        <Button content={t(i18nKeys.completeTopicMessage.button)} onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
}
