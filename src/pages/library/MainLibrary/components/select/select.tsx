import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import { ChangeEvent } from 'react';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

import { Topic } from '@/types/topic';

interface SelectProps {
  topics: Topic[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ topics, value, onChange }: SelectProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const uniqueTopics = [
    { id: 'all', label: t(i18nKeys.library.select.all) },
    ...topics.map((topic) => ({
      id: topic.title.en,
      label: topic.title[currentLang],
    })),
  ];

  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: 200, margin: 0 }}>
      <InputLabel
        shrink
        variant="standard"
        htmlFor="category-native"
        sx={{
          color: 'var(--primary-text-color)',
          '&.Mui-focused': {
            color: 'var(--btn-cta)',
          },
        }}
      >
        {t(i18nKeys.library.select.title)}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        inputProps={{ name: 'category', id: 'category-native' }}
        sx={{
          color: 'var(--primary-text-color)',
          '&:before': { borderColor: 'rgba(49, 130, 206, 0.4)' },
          '&:after': { borderColor: 'var(--btn-cta)' },
          '& .MuiNativeSelect-icon': { color: 'var(--btn-primary-bg)' },
        }}
      >
        {uniqueTopics.map((topic) => (
          <option
            key={topic.id}
            value={topic.id}
            style={{
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--primary-text-color)',
            }}
          >
            {topic.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
