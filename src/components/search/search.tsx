import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';

interface SearchElementProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: 'rgba(36, 160, 237, 0.1)',
  border: '1px solid rgba(36, 160, 237, 0.2)',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: 'rgba(36, 160, 237, 0.15)',
    borderColor: 'rgba(36, 160, 237, 0.4)',
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
  color: '#24a0ed',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#2c5269',
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
  },
}));

export default function SearchElement({ value, onChange }: SearchElementProps) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search topics..."
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={onChange}
      />
    </Search>
  );
}
