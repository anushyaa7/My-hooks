import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Autocomplete.css';
import { styled } from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '45px', 
    borderRadius: '8px', 
  },
  '& .MuiOutlinedInput-root': {
    padding: '0 8px', 
  },
  '& .MuiOutlinedInput-input': {
    padding: '6px 8px',
  },
}));

const AutocompleteComp = ({ options, label = 'Select an option' }) => {
  return (
    <div className="autocomplete-container">
      <Autocomplete
        options={options}
        renderInput={(params) => <CustomTextField {...params} label={label} />}
      />
    </div>
  );
};
export default AutocompleteComp;
