import React from 'react';
import { Button, Stack } from '@mui/material';
import './Buttons.css';

const Buttons = ({ buttons }) => {
  return (
    <div className="buttons-container">
      <Stack direction="row" spacing={2}>
        {buttons.map((button, index) => (
          <Button 
            key={index}
            variant={button.variant}
            endIcon={button.icon}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        ))}
      </Stack>
    </div>
  );
};

export default Buttons;
