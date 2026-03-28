import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import { ChangeEvent } from 'react';
import { TOPICS } from '../../Topics/topics';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface SelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ value, onChange }: SelectProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const dynamicTopics = [
    { id: 'all', label: t(i18nKeys.library.select.all) },
    ...TOPICS.map((topic) => ({
      id: topic.title.en,
      label: topic.title[currentLang],
    })),
  ];

  const uniqueTopics = Array.from(new Map(dynamicTopics.map((item) => [item.id, item])).values());

  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: 200, margin: 0 }}>
      <InputLabel shrink variant="standard" htmlFor="category-native" sx={{ color: '#2d3748' }}>
        {t(i18nKeys.library.select.title)}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        inputProps={{ name: 'category', id: 'category-native' }}
        sx={{
          color: '#2d3748',
          '&:before': { borderColor: 'rgba(36, 160, 237, 0.3)' },
          '&:after': { borderColor: '#ff8c00' },
        }}
      >
        {uniqueTopics.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
