import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface SearchElementProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  // Используем основную кнопку как базовый цвет для фона поиска с прозрачностью
  backgroundColor: 'rgba(49, 130, 206, 0.1)',
  // Или через переменную, если браузеры поддерживают относительные цвета:
  // backgroundColor: 'color-mix(in srgb, var(--btn-primary-bg), transparent 90%)',
  border: '1px solid var(--btn-primary-bg)',
  opacity: 0.8,
  transition: '0.3s',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'rgba(49, 130, 206, 0.15)',
    borderColor: 'var(--btn-primary-bg-hover)',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--btn-primary-bg)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'var(--primary-text-color)',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '25ch',
      },
    },
    '&::placeholder': {
      color: 'var(--primary-text-color)',
      opacity: 0.6,
    },
  },
}));

export default function SearchElement({ value, onChange }: SearchElementProps) {
  const { t } = useTranslation();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={t(i18nKeys.library.search.placeholder)}
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={onChange}
      />
    </Search>
  );
}
