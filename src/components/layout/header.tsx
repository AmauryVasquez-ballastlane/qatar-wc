import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import "../../styles/layout/header.scss";
import worldCup from "../../assets/worldCup.svg";
import { ToggleButton } from "./toggleButton";

export const Header = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  showButton: boolean;
}) => {
  const { callback, showButton } = props;

  return (
    <header className="header">
      <Link className="homeLink" to={"/"}>
        <img src={worldCup} alt={"Qatar world cup logo"} />
        <span>
          FIFA WORLD CUP <br />
          Qatar 2022
        </span>
      </Link>
      <span className="pageName">Groups</span>
      <ToggleButton callback={callback} disabled={!showButton} />
    </header>
  );
};
