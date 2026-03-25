import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import { ChangeEvent } from 'react';
import { TOPICS } from '../../Topics/topics';

interface SelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ value, onChange }: SelectProps) {
  const dynamicTopics = ['All', ...Array.from(new Set(TOPICS.map((topic) => topic.title.en)))];

  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: 200, margin: 0 }}>
      <InputLabel
        shrink
        variant="standard"
        htmlFor="category-native"
        sx={{
          color: '#2d3748',
          fontSize: '1.05em',
          fontFamily: 'Times New Roman',
        }}
      >
        Topics
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        inputProps={{
          name: 'category',
          id: 'category-native',
        }}
        sx={{
          color: '#2d3748',
          fontWeight: 400,
          '&:hover:not(.Mui-disabled):before': {
            borderColor: '#ff8c00',
          },
          '&:before': { borderColor: 'rgba(36, 160, 237, 0.3)' },
          '&:after': { borderColor: '#ff8c00' },
        }}
      >
        {dynamicTopics.map((topicName) => (
          <option key={topicName} value={topicName}>
            {topicName}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
