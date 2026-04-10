import { useState, useEffect, useCallback } from 'react';
import { Container, Box, Button, Avatar, TextField, Tabs, Tab } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { auth } from '@/config/firebase';
import { updateProfile } from 'firebase/auth';
import { firestoreService } from '@/services/firestore';
import { getUserData } from '@/api/getUserData';
import { notify } from '@/utils/notify';
import HeaderHome from '@/components/header/header';
import FooterHome from '@/components/footer/footer';
import './profile.scss';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

const textFieldSx: SxProps<Theme> = {
  '& .MuiInputBase-input': { color: 'var(--primary-text-color)' },
  '& .MuiInputLabel-root': { color: 'var(--secondary-text-color)' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'var(--input-border)' },
    '&:hover fieldset': { borderColor: 'var(--secondary-text-color)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--btn-primary-bg)' },
  },
};

export default function ProfilePage() {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [socials, setSocials] = useState({ github: '', telegram: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getUserData();
        if (data) {
          setName(data.displayName || auth.currentUser?.displayName || '');
          setAbout(data.about || '');
          setSocials(data.socials || { github: '', telegram: '' });
        } else if (auth.currentUser) {
          setName(auth.currentUser.displayName || '');
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSave = useCallback(async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await updateProfile(user, { displayName: name });
      await firestoreService.setDocument(
        'users',
        user.uid,
        {
          displayName: name,
          about,
          socials,
          uid: user.uid,
        },
        { merge: true },
      );
      notify.success(t(i18nKeys.profilePage.success));
    } catch {
      notify.error(t(i18nKeys.profilePage.error));
    }
  }, [name, about, socials, t]);

  if (loading) return null;

  return (
    <div className="profile-page">
      <HeaderHome />
      <Container maxWidth="sm" className="profile-page__container">
        <Box className="profile-page__content">
          <Box sx={{ mb: 1 }}>
            <Avatar
              sx={{ width: 100, height: 100, bgcolor: 'var(--btn-primary-bg)', fontSize: '2.5rem' }}
            >
              {name?.charAt(0).toUpperCase() || '?'}
            </Avatar>
          </Box>
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label={t(i18nKeys.profilePage.yourName)}
            className="profile-page__title"
            sx={{
              '& .MuiInputBase-input': {
                color: 'var(--heading-color)',
                fontSize: '1.5rem',
                fontWeight: 700,
              },
              '& .MuiInputLabel-root': {
                color: 'var(--secondary-text-color)',
                '&.Mui-focused': { color: 'var(--btn-primary-bg)' },
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--input-border)' },
                '&:hover fieldset': { borderColor: 'var(--secondary-text-color)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--btn-primary-bg)' },
              },
            }}
            fullWidth
          />

          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{
              mb: 2,
              '& .MuiTabs-indicator': { backgroundColor: 'var(--btn-primary-bg)' },
              '& .MuiTab-root': { color: 'var(--secondary-text-color)' },
              '& .MuiTab-root.Mui-selected': { color: 'var(--heading-color)' },
            }}
          >
            <Tab label={t(i18nKeys.profilePage.about)} sx={{ textTransform: 'none' }} />
            <Tab label={t(i18nKeys.profilePage.socials)} sx={{ textTransform: 'none' }} />
          </Tabs>

          <Box sx={{ width: '100%', minHeight: '150px' }}>
            {tabValue === 0 ? (
              <TextField
                label={t(i18nKeys.profilePage.about)}
                multiline
                rows={4}
                fullWidth
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                sx={textFieldSx}
              />
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="GitHub"
                  fullWidth
                  value={socials.github}
                  onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                  sx={textFieldSx}
                />
                <TextField
                  label="Telegram"
                  fullWidth
                  value={socials.telegram}
                  onChange={(e) => setSocials({ ...socials, telegram: e.target.value })}
                  sx={textFieldSx}
                />
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSave}
            sx={{
              mt: 'auto',
              padding: '12px',
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              textTransform: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'var(--btn-primary-bg-hover)',
              },
            }}
          >
            {t(i18nKeys.profilePage.save)}
          </Button>
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
}
