import './levels.scss';

import { useState } from 'react';
import { Chip, Stack } from '@mui/material';

const levels = ['All', '1', '2', '3'];

export default function Levels() {
  const [selected, setSelected] = useState('All');

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <span className="title">Levels:</span>
      {levels.map((level) => (
        <Chip
          key={level}
          label={level}
          clickable
          sx={{
            color: selected === level ? 'white' : '#2d3748',
            backgroundColor: selected === level ? '#ff8c00' : 'rgba(36, 160, 237, 0.3)',
            '&:hover': {
              backgroundColor: selected === level ? '#e67e22' : 'rgba(36, 160, 237, 0.5)',
            },
          }}
          onClick={() => setSelected(level)}
        />
      ))}
    </Stack>
  );
}
