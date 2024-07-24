import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './Complete.css';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';


export default function Complete() {
  const theme = useTheme(); // Get the current theme

  return (
    <div className="autocomplete-container">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => 
          <div style={{ position: 'relative' }}>
            <TextField
              {...params}
              placeholder="Placeholder" 
              size="small" 
              margin="dense" 
              InputLabelProps={{
                shrink: false, 
              }}
              InputProps={{
                ...params.InputProps,
                style: {
                  padding: '8px 0', 
                },
              }}
              sx={{ 
                minWidth: '200px',
                borderRadius: '8px', 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px', 
                },
              }} 
            />
           
          </div>
        }
        classes={{
          paper: 'autocomplete-paper', 
          option: 'autocomplete-option', 
        }}
      />
    </div>
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