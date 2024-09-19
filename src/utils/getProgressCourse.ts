import { WorkoutType } from "../types";

// type GetProgressCourseProp = {
//   // exercises: ExerciseType[];
//   workoutsUser: WorkoutType[];
//   // workoutId: string | undefined;
// };

export function getProgressCourse(workoutsUser: WorkoutType[]) {
  let result = 0;
  let workouts: any = [];

  workoutsUser.forEach((workout) => {
    const completed = workout.exercises.filter((el) => el.progressWorkout === el.quantity).length;
    workouts.push(completed === workout.exercises.length);
  });
  
  const completedWork = workouts.filter((w) => w === true).length;
  result = completedWork / workouts.length * 100
  
  return result;
}
