import renderer from "react-test-renderer";
import { Title } from "./Title";

describe("Компонент Title", () => {

  it("Успешный рендер Title", () => {
    const component = renderer.create(<Title title="Hello" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});