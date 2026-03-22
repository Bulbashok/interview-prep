import { InputLabel, FormControl, NativeSelect } from '@mui/material';

const TOPICS = [
  'Async/Await & Promises',
  'Algorithm Basics',
  'Arrays & Objects',
  'Prototypes',
  'Closures',
  'Event Loop',
];

export default function Select() {
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
        defaultValue={TOPICS[0]}
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
        {TOPICS.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
