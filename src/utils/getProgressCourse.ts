import { ExerciseType, WorkoutType } from "../types";

type GetProgressCourseProp = {
  exercises: ExerciseType[];
  workouts: WorkoutType[];
  workoutId: string | undefined;
};

export function getProgressCourse({
  exercises,
  workouts,
  workoutId,
}: GetProgressCourseProp) {
  const arrAvr = exercises.map((exercise) =>
    exercise.progressWorkout < exercise.quantity
      ? (exercise.progressWorkout / exercise.quantity) * 100
      : 100
  );

  console.log(arrAvr);

  const prog = exercises.map((el) => el.progressWorkout);
  console.log(prog);

  const workoutUser = workouts?.filter((el) => el._id === workoutId);
  console.log(workoutUser);

  const progressWorkoutList = workoutUser?.map((el) =>
    el._id === workoutId ? arrAvr : prog
  );

  const progressCourse = Math.floor(
    progressWorkoutList[0].reduce((acc, number) => acc + number) /
      workoutUser.length
  );

  return progressCourse;
}
