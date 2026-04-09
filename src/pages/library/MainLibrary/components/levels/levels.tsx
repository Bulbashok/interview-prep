import './levels.scss';
import { Chip, Stack } from '@mui/material';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface LevelsProps {
  value: string;
  onChange: (level: string) => void;
}

export default function Levels({ value, onChange }: LevelsProps) {
  const { t } = useTranslation();

  const levels = [
    { id: 'all', label: t(i18nKeys.library.levels.all) },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
  ];

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <span className="title">{t(i18nKeys.library.levels.title)}:</span>
      {levels.map((level) => (
        <Chip
          key={level.id}
          label={level.label}
          clickable
          sx={{
            color: value === level.id ? 'var(--btn-primary-text)' : 'var(--primary-text-color)',
            backgroundColor: value === level.id ? 'var(--btn-cta)' : 'rgba(49, 130, 206, 0.2)',
            '&:hover': {
              backgroundColor:
                value === level.id ? 'var(--btn-cta-hover)' : 'rgba(49, 130, 206, 0.4)',
            },
          }}
          onClick={() => onChange(level.id)}
        />
      ))}
    </Stack>
  );
}
