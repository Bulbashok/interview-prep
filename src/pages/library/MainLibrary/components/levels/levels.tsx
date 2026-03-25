import './levels.scss';
import { Chip, Stack } from '@mui/material';

interface LevelsProps {
  value: string;
  onChange: (level: string) => void;
}

const levels = ['All', '1', '2', '3'];

export default function Levels({ value, onChange }: LevelsProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <span className="title">Levels:</span>
      {levels.map((level) => (
        <Chip
          key={level}
          label={level}
          clickable
          sx={{
            color: value === level ? 'white' : '#2d3748',
            backgroundColor: value === level ? '#ff8c00' : 'rgba(36, 160, 237, 0.3)',
            '&:hover': {
              backgroundColor: value === level ? '#e67e22' : 'rgba(36, 160, 237, 0.5)',
            },
          }}
          onClick={() => onChange(level)}
        />
      ))}
    </Stack>
  );
}
