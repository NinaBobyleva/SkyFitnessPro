import renderer from "react-test-renderer";
import WorkoutProgress from "./WorkoutProgress";

describe("Компонент Header", () => {
  it("Успешный рендер Header", () => {
    const component = renderer
      .create(
        <WorkoutProgress title="округлите спину" progress="60%" />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
