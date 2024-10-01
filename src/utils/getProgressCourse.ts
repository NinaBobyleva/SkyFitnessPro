import { child, get, ref } from "firebase/database";
import { UserWorkoutType } from "../types";
import { db } from "../api/firebaseConfig";

export async function getProgressCourse(uid: string, courseId: string) {
  let result = 0;
  let workouts: boolean[] = [];

  let arrAllWorkouts: UserWorkoutType[] = [];

  await get(child(ref(db), `/users/${uid}/courses/${courseId}/workouts`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        arrAllWorkouts = Object.entries(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const workoutsUser = arrAllWorkouts.map((el) => el[1]);

  workoutsUser.forEach((workout) => {
    if (workout.exercises) {
      const completed = workout.exercises.filter(
        (el) => el.progressWorkout === el.quantity
      ).length;
      workouts.push(completed === workout.exercises.length);
    } else {
      workouts.push(true);
    }
  });

  const completedWork = workouts.filter((w) => w === true).length;
  result = (completedWork / workouts.length) * 100;

  return result.toFixed();
}
