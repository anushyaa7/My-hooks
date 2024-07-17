import React from 'react';
import { Button, Stack } from '@mui/material';
import './Buttons.css';

const Buttons = ({ label, variant, onClick }) => {
  return (
    <div className="buttons-container">
      <Stack direction="row" spacing={2}>
        <Button
          variant={variant}
          onClick={onClick}
        >
          {label}
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
