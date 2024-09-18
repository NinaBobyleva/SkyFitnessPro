import { ExerciseType } from "../types";

export function getProgress(exercise: ExerciseType) {
  const progresses = Math.floor(
    !exercise.progressWorkout
      ? 0
      : exercise.progressWorkout < exercise.quantity
      ? (exercise.progressWorkout / exercise.quantity) * 100
      : 100
  )
    .toString()
    .concat("%");
    
    return progresses;
}
