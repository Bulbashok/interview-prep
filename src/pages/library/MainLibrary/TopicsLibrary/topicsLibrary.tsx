import { useState, ChangeEvent } from 'react';
import { Box, Pagination, Stack, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';

import { CardTool } from './components/cardTool/cardTool';
import { TOPICS } from './components/Topics/topics';

export default function SoftPaginatedGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const allItems = TOPICS;
  const itemsPerPage = 6;

  const [page, setPage] = useState<number>(1);

  const count = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, minHeight: '100vh' }}>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {currentItems.map((t) => (
          <Grid key={t.order} size={{ xs: 4, sm: 4, md: 4 }}>
            <CardTool topic={t} />
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} sx={{ mt: 10, alignItems: 'center' }}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          size={isMobile ? 'medium' : 'large'}
          siblingCount={isMobile ? 0 : 1}
          boundaryCount={1}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#24a0ed',
              borderColor: 'rgba(36, 160, 237, 0.3)',
            },
          }}
        />
      </Stack>
    </Box>
  );
}
