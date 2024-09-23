import { ExerciseType } from "../types";

export function getProgress(exercise: ExerciseType) {
  console.log(exercise);
  const progresses = Math.floor(
    !exercise.progressWorkout
      ? 0
      : exercise.progressWorkout < exercise.quantity
      ? (exercise.progressWorkout / exercise.quantity) * 100
      : 100
  );

  return progresses;
}
