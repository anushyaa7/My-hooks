import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import './RadioOptions.css';

const RadioOptions = ({ options, label = 'Select an option' }) => {
  return (
    <div className="radio-options-container">
      <Typography variant="h6" gutterBottom marginRight={'40px'}>
        {label}
      </Typography>
      <RadioGroup row>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioOptions;
