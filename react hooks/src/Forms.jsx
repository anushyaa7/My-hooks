import React from 'react';
import { Typography } from '@mui/material';

// import RadioOptions from './RadioOptions';

import './Forms.css';
import Buttons from './Buttons/Buttons';
import RadioOptions from './RadioOptions/RadioOptions';
import AutocompleteComp from './Autocomplete/AutocompleteComp';


const Forms = ({ autocompleteOptions, autocompleteLabel, radioOptions, radioLabel, buttonLabel, buttonVariant, buttonIcon, buttonOnClick }) => {
    return (
      <div className="form-container">
        <Typography variant="h6" gutterBottom>
          Answer Type
        </Typography>
        <AutocompleteComp options={autocompleteOptions} label={autocompleteLabel} />
        <RadioOptions options={radioOptions} label={radioLabel} />
        <Buttons 
          label={buttonLabel}
          variant={buttonVariant}
          onClick={buttonOnClick}
        />
      </div>
    );
  };
  
export default Forms;
