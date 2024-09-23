import { ref, set } from "firebase/database";
import { CourseProp, NewWorkoutContentType } from "../types";
import { db } from "../api/firebaseConfig";
import { getCourseWorkouts } from "./getCourseWorkouts";

type WriteUserDataType = {
  userId: string | undefined;
  courseId: string;
  course: CourseProp;
};

export async function addUserCourse({
  userId,
  courseId,
  course,
}: WriteUserDataType) {
  let workoutsList: NewWorkoutContentType = {};

  await getCourseWorkouts({ course, workoutsList });

  await set(ref(db, `users/${userId}/courses/${courseId}`), {
    _id: course._id,
    nameEN: course.nameEN,
    nameRU: course.nameRU,
    workouts: workoutsList,
    progressCourse: 0,
  });
}
