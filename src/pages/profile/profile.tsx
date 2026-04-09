import { useState, useEffect } from 'react';
import { Container, Box, Button, Avatar, TextField, Tabs, Tab, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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

export default function ProfilePage() {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [socials, setSocials] = useState({ github: '', telegram: '' });

  useEffect(() => {
    const loadData = async () => {
      const data = await getUserData();
      if (!data && auth.currentUser) {
        setName(auth.currentUser.displayName || '');
        return;
      }
      if (data) {
        setName(data.displayName || auth.currentUser?.displayName || '');
        setAbout(data.about || '');
        setSocials(data.socials || { github: '', telegram: '' });
      }
    };
    loadData();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await updateProfile(user, { displayName: name });

      try {
        await firestoreService.updateDocument('users', user.uid, {
          displayName: name,
          about: about,
          socials: socials,
        });
      } catch {
        await firestoreService.setDocument('users', user.uid, {
          displayName: name,
          about,
          socials,
          uid: user.uid,
        });
      }

      notify.success(t(i18nKeys.profilePage.success));
    } catch (e) {
      console.error(e);
      notify.error(t(i18nKeys.profilePage.error));
    }
  };

  return (
    <div className="profile-page">
      <HeaderHome />
      <Container maxWidth="sm" className="profile-page__container">
        <Box className="profile-page__content">
          <Box sx={{ position: 'relative', mb: 1 }}>
            <Avatar
              sx={{ width: 100, height: 100, bgcolor: 'var(--btn-primary-bg)', fontSize: '2.5rem' }}
            >
              {name && name.length > 0 ? name[0].toUpperCase() : '?'}
            </Avatar>
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 0,
                right: -5,
                bgcolor: 'var(--bg-primary)',
                border: '1px solid var(--secondary-text-color)',
              }}
              size="small"
            >
              <EditIcon fontSize="small" sx={{ color: 'var(--heading-color)' }} />
            </IconButton>
          </Box>
          <TextField
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-page__title"
            sx={{
              style: {
                textAlign: 'center',
                color: 'var(--heading-color)',
                fontSize: '1.5rem',
                fontWeight: 700,
              },
            }}
            fullWidth
          />

          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{ mb: 2, '& .MuiTabs-indicator': { backgroundColor: 'var(--btn-primary-bg)' } }}
          >
            <Tab
              label="About"
              sx={{ color: 'var(--secondary-text-color)', textTransform: 'none' }}
            />
            <Tab
              label="Socials"
              sx={{ color: 'var(--secondary-text-color)', textTransform: 'none' }}
            />
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
                sx={{
                  '& .MuiInputBase-input': { color: 'var(--primary-text-color)' },
                  '& .MuiInputLabel-root': { color: 'var(--secondary-text-color)' },
                }}
              />
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="GitHub"
                  fullWidth
                  value={socials.github}
                  onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                  sx={{ '& .MuiInputBase-input': { color: 'var(--primary-text-color)' } }}
                />
                <TextField
                  label="Telegram"
                  fullWidth
                  value={socials.telegram}
                  onChange={(e) => setSocials({ ...socials, telegram: e.target.value })}
                  sx={{ '& .MuiInputBase-input': { color: 'var(--primary-text-color)' } }}
                />
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            className="profile-page__button"
            fullWidth
            onClick={handleSave}
          >
            {t(i18nKeys.profilePage.save)}
          </Button>
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
}
