import { getProgress } from "./getProgress";

const exercise = {
  name: "Приветствие солнца (10 повторений)",
  progressWorkout: 10,
  quantity: 10,
};

describe("Функция расчета прогресса тренировки", () => {
  it("", () => {
    const result = getProgress(exercise);
    expect(result).toBe(100);
  });
});
