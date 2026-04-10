import { ChangeEvent } from 'react';
import { Box, Pagination, Stack, useMediaQuery, useTheme, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchOffIcon from '@mui/icons-material/SearchOff';

import { CardTool } from './components/cardTool/cardTool';
import { Topic } from '@/types/topic';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface ActionAreaGridProps {
  items: Topic[];
  onReset: () => void;
  page: number;
  onPageChange: (newPage: number) => void;
  onCardClick: (topic: Topic) => void;
}

export default function ActionAreaGrid({
  items,
  onReset,
  page,
  onPageChange,
  onCardClick,
}: ActionAreaGridProps) {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsPerPage = 6;

  const count = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4, minHeight: '60vh' }}>
      {items.length > 0 ? (
        <>
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {currentItems.map((t) => (
              <Grid key={t.order} size={{ xs: 4, sm: 4, md: 4 }}>
                <CardTool topic={t} onClick={onCardClick} />
              </Grid>
            ))}
          </Grid>

          {count > 1 && (
            <Stack spacing={2} sx={{ mt: 10, alignItems: 'center' }}>
              <Pagination
                count={count}
                page={page}
                onChange={handlePageChange}
                size={isMobile ? 'medium' : 'large'}
                color="primary"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#24a0ed',
                    borderColor: 'rgba(36, 160, 237, 0.3)',
                  },
                }}
              />
            </Stack>
          )}
        </>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            mt: 10,
            p: 6,
            bgcolor: 'rgba(36, 160, 237, 0.05)',
            borderRadius: '30px',
            border: '1px dashed rgba(36, 160, 237, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SearchOffIcon
            sx={{
              fontSize: '64px',
              color: 'rgba(36, 160, 237, 0.4)',
              mb: 2,
            }}
          />

          <Typography variant="h5" sx={{ color: '#2c5269', mb: 1, fontWeight: 700 }}>
            {t(i18nKeys.library.nothingFound.title)}
          </Typography>

          <Typography variant="body1" sx={{ color: '#5f7d8f', mb: 3 }}>
            {t(i18nKeys.library.nothingFound.paragraph)}
          </Typography>

          <Button
            variant="contained"
            onClick={onReset}
            sx={{
              bgcolor: '#ff8c00',
              '&:hover': { bgcolor: '#e67e22' },
              borderRadius: '12px',
              px: 4,
              textTransform: 'none',
            }}
          >
            {t(i18nKeys.library.nothingFound.button)}
          </Button>
        </Box>
      )}
    </Box>
  );
}
