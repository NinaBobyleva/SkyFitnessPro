import { WorkoutType } from "../types";

export function getProgressCourse(workoutsUser: WorkoutType[]) {
  let result = 0;
  let workouts: boolean[] = [];

  console.log("workoutsUser", workoutsUser);

  workoutsUser.forEach((workout) => {
    if (workout.exercises) {
      const completed = workout.exercises.filter(
        (el) => el.progressWorkout === el.quantity
      ).length;
      workouts.push(completed === workout.exercises.length);
    } else {
      workouts.push(true)
    }
  });

  const completedWork = workouts.filter((w) => w === true).length;
  result = (completedWork / workouts.length) * 100;

  return result;
}
