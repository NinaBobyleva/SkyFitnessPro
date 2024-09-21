import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Компонент Header", () => {
  it("Должен отрендерить логотип", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const img = screen.getByAltText("logo");

    expect(img).toBeInTheDocument();
  });

  it("Успешный рендер Header", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
