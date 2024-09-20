import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "./Header";

describe("Компонент Header", () => {
  it("Должен отрендерить логотип", () => {
    render(<Header />);
    const img = screen.getByAltText("logo");

    expect(img).toBeInTheDocument();
  });

  it("Успешный рендер Header", () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
