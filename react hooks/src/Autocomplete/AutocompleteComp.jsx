import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Autocomplete.css';

const AutocompleteComp = ({ options, label = 'Select an option' }) => {
  return (
    <div className="autocomplete-container">
      <Autocomplete
        options={options}
        sx={{ width: 375 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
};

export default AutocompleteComp;
