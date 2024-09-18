import { db } from "../api/firebaseConfig";
import { CourseProp, NewWorkoutContentType, UserWorkoutType } from "../types";
import { child, get, ref } from "firebase/database";

export async function getCourseWorkouts({
  course,
  workoutsList,
}: {
  course: CourseProp;
  workoutsList: NewWorkoutContentType;
}) {
  let arrAllWorkouts: UserWorkoutType[] = [];

  await get(child(ref(db), "workouts"))
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
  console.log(arrAllWorkouts);
  const courseWorkouts = arrAllWorkouts.filter((workout) =>
    course.workouts.includes(workout[0])
  );
  console.log(courseWorkouts);
  Object.values(courseWorkouts).forEach((workout) => {
    console.log(workout);
    const workoutNewContent = { ...workout[1] };
    const newKey: string = workout[0];
    workoutsList[newKey] = workoutNewContent;
  });

  return workoutsList;
}
