import { Box, Card, CardContent, Typography, CardActionArea, Chip } from '@mui/material';
import { Topic } from '@/types/topic';
import { useTranslation } from 'react-i18next';

interface CardToolProps {
  topic: Topic;
  onClick: (topic: Topic) => void;
}

export const CardTool: React.FC<CardToolProps> = ({ topic, onClick }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: '240px',
        position: 'relative',
        backgroundColor: 'rgba(36, 160, 237, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(36, 160, 237, 0.2)',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          borderColor: 'rgba(36, 160, 237, 0.6)',
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 24px rgba(36, 160, 237, 0.1)',
          '& .overlay': { opacity: 1 },
        },
      }}
    >
      <CardActionArea onClick={() => onClick(topic)} sx={{ height: '100%' }}>
        <CardContent sx={{ textAlign: 'center', p: 2 }}>
          <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'center', gap: 0.5 }}>
            {[1, 2, 3].map((step) => (
              <Box
                key={step}
                sx={{
                  width: '12px',
                  height: '4px',
                  borderRadius: '2px',
                  bgcolor: step <= topic.difficulty ? '#ff8c00' : 'rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </Box>

          <Typography variant="h6" fontWeight="800" sx={{ color: 'var(--card-title)', mb: 1 }}>
            {topic.title[lang]}
          </Typography>

          <Typography variant="body2" sx={{ color: 'var(--card-text)', mb: 2, minHeight: '40px' }}>
            {topic.description[lang]}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 0.5,
              mt: 'auto',
            }}
          >
            {topic.tags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                size="small"
                sx={{
                  height: '20px',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: '#24a0ed',
                  backgroundColor: 'rgba(36, 160, 237, 0.1)',
                  border: '1px solid rgba(36, 160, 237, 0.1)',
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            ))}
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
            transition: '0.3s ease-in-out',
            zIndex: 2,
            pointerEvents: 'none',
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
