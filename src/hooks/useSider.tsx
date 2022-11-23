import { useState, MouseEvent } from 'react';

export const useSider = (callback: Function) => {
  // Constants
  const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  // State
  const [willSiderClose, setWillClose] = useState(false);

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    setWillClose(true);
    setTimeout(() => {
      callback();
    }, 300);
  };

  return { groupNames, onClose, willSiderClose };
};
