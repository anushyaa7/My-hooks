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
    const [isReset, setIsReset] = useState(true);
  
    const handleReset = () => {
      console.log('Reset clicked');
      setIsReset(false); 
    };
  
    const handleNext = () => {
      console.log('Next clicked');
      setIsReset(true); 
    };
  
    return (
      <Forms 
        autocompleteOptions={top100Films}
        autocompleteLabel="Placeholder"
        radioOptions={radioOptions}
        radioLabel="Mandatory"
        buttonLabel={isReset ? "RESET" : "NEXT"}
        buttonVariant={isReset ? "outlined" : "contained"}
        buttonOnClick={isReset ? handleReset : handleNext}
      />
    );
  };

export default Details;
