import React, { useState, useCallback } from 'react';

export const useInput = (
  initState = ''
): [string, React.ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(initState);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value } = event.target;
    setState(value);
  }, []);

  return [state, handleInput, setState];
};
