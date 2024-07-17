import React, { useState } from "react";

const useAutocomplete = (initialOptions) => {
    const [options, setOptions] = useState(initialOptions);
  
    return {
      options,
    };
  };
  
  export default useAutocomplete;