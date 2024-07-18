import React, { useState } from 'react';
import Forms from './Forms';


const top100Films = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' },
  { label: 'Fight Club' },
  { label: 'Forrest Gump' },
  { label: 'Inception' },
];

const radioOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const Details = () => {
  const handleReset = () => {
    console.log('Reset clicked');
  };

  const handleSaveDraft = () => {
    console.log('Save Draft clicked');
  };

  const handleNext = () => {
    console.log('Next clicked');
  };

  const buttons = [
    {
      label: 'RESET',
      variant: 'outlined',
      onClick: handleReset,
    },
    {
      label: 'SAVE DRAFT',
      variant: 'outlined',
      onClick: handleSaveDraft,
    },
    {
      label: 'NEXT',
      variant: 'contained',
      onClick: handleNext,
    },
  ];

  return (
    <Forms 
      autocompleteOptions={top100Films}
      autocompleteLabel="Placeholder"
      radioOptions={radioOptions}
      radioLabel="Mandatory"
      buttons={buttons}
    />
  );
};

export default Details;
