import { Box, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Topic } from '../Topics/topics';
import { useTranslation } from 'react-i18next';

interface CardToolProps {
  topic: Topic;
}

export const CardTool: React.FC<CardToolProps> = ({ topic }) => {
  const { i18n } = useTranslation();

  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: '200px',
        position: 'relative',
        backgroundColor: 'rgba(36, 160, 237, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(36, 160, 237, 0.2)',
        overflow: 'hidden',
        transition: '0.3s',
        '&:hover': {
          borderColor: 'rgba(36, 160, 237, 0.5)',
        },
      }}
    >
      <CardActionArea sx={{ height: '100%' }} disableRipple>
        <CardContent sx={{ textAlign: 'center', p: 3 }}>
          <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'center', gap: 0.5 }}>
            {[1, 2, 3].map((step) => (
              <Box
                key={step}
                sx={{
                  width: '12px',
                  height: '4px',
                  borderRadius: '2px',
                  bgcolor: step <= topic.difficulty ? '#ff8c00' : 'rgba(0,0,0,0.1)',
                  transition: '0.3s',
                }}
              />
            ))}
          </Box>
          <Typography
            variant="h6"
            fontWeight="700"
            sx={{ color: '#2c5269', mb: 1, lineHeight: 1.2 }}
          >
            {topic.title[lang]}
          </Typography>

          <Typography variant="body2" sx={{ color: '#5f7d8f' }}>
            {topic.description[lang]}
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
            <Typography variant="caption" sx={{ color: '#ff8c00', opacity: 0.9 }}>
              Level: {topic.difficulty}
            </Typography>
          </Box>
        </CardContent>

        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(36, 160, 237, 0.2)',
            backdropFilter: 'blur(8px)',
            opacity: 0,
            transition: '0.3s ease',
            zIndex: 2,
            '&:hover': { opacity: 1 },
          }}
        >
          <Typography variant="h5" fontWeight="900" sx={{ color: '#ff8c00', letterSpacing: 2 }}>
            START
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
