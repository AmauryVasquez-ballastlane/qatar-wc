import { Sider } from "./sider";
import { Header } from "./header";
import { useLayout } from "../../hooks/useLayout";

export const Layout = (props: { children: JSX.Element }) => {
  const { isSiderActive, handleClick } = useLayout();
  const { children } = props;

  return (
    <div className="layout">
      <Header callback={handleClick} showButton={!isSiderActive} />
      {isSiderActive && <Sider callback={handleClick} />}
      {/* {children} */}
    </div>
  );
};
