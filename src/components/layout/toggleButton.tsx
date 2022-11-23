import { MouseEvent } from "react";

import "../../styles/layout/toggleButton.scss";

export const ToggleButton = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}) => {
  const { callback, disabled } = props;

  return (
    <button
      className={`menuButton ${disabled && "disabled"}`}
      disabled={disabled}
      onClick={callback}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
