import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './Complete.css';

export default function Complete() {
  return (
    <Stack spacing={2} sx={{ width: 300 }} className="autocomplete-container">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => 
            <TextField
            {...params}
            label="Placeholder"
            size="small" // Reduce the size of the TextField
            margin="dense" // Reduce the margin
            sx={{ minWidth: '200px' }} // Customize the width if needed
          />
        }
        classes={{
          paper: 'autocomplete-paper', 
          option: 'autocomplete-option', 
        }}
      />
    </Stack>
  );
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
];