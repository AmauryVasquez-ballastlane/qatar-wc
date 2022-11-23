import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import "../../styles/layout/sider.scss";
import "../../hooks/useSider";
import { useSider } from "../../hooks/useSider";

export const Sider = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { willSiderClose, onClose } = useSider(props.callback);

  return (
    <div className={`sider ${willSiderClose && "closeSider"}`}>
      <div className="top">
        <button className="closeButton" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <Link className="siderHomeLink" to={"/"}>
          FIFA WORLD CUP
        </Link>
      </div>
      <nav className="navigationMenu"></nav>
    </div>
  );
};
