import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { render, screen, prettyDOM, fireEvent } from "@testing-library/react";

// import { Sider } from "../components/layout/sider";
import { Header } from "../components/layout/header";
import { Layout } from "../components/layout/layout";
import { Sider } from "components/layout/sider";
// import { ToggleButton } from '../components/layout/toggleButton';

describe("App layout tests", () => {
  test("Renders layout", () => {
    const layout = render(
      <Layout>
        <h1> hola </h1>
      </Layout>,
      { wrapper: BrowserRouter }
    );
    const link = layout.container.getElementsByTagName("a");
    const button = layout.container.getElementsByTagName("button");

    expect(link).toHaveLength(1);
    expect(screen.getByText("Groups")).toBeInTheDocument();
    expect(button).toHaveLength(1);
  });

  test("Header button test", () => {
    const mockupFunction = jest.fn(() => {
      console.log("I will open sider");
    });
    const header = render(
      <Header callback={mockupFunction} showButton={true} />,
      { wrapper: BrowserRouter }
    );
    const button = header.container.getElementsByTagName("button");
    expect(button).toHaveLength(1);
    fireEvent.click(button[0]);
    expect(mockupFunction).toBeCalledTimes(1);
  });

  const mockup = jest.fn(() => "I will close sider");
  jest.mock("../hooks/useSider", () => {
    return {
      ...jest.requireActual("../hooks/useSider"),
      useSider: () => {
        return { onClose: mockup };
      },
    };
  });

  test("Active sider test", () => {
    const sider = render(<Sider callback={mockup} />, {
      wrapper: BrowserRouter,
    });
    const closeButton = sider.container.getElementsByTagName("button");
    expect(closeButton).toHaveLength(1);
    fireEvent.click(closeButton[0]);
    console.log(prettyDOM(closeButton[0]));
    expect(mockup).toBeCalledTimes(1);
  });
});
