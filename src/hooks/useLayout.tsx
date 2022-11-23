import { useState, MouseEvent } from 'react';

export const useLayout = () => {
  const [isSiderActive, setActive] = useState(false);

  const handleClick = (e?: MouseEvent<HTMLButtonElement>) => {
    console.log('clicked');
    setActive(!isSiderActive);
  };

  return { isSiderActive, handleClick };
};
