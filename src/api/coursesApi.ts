import { get, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import { CourseProp, ExerciseType, WorkoutType } from "../types";

export async function getCourses(): Promise<CourseProp[]> {
  try {
    const coursesDB = ref(db, "courses");
    const snapshot = await get(coursesDB);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

// гет Воркаутс

export async function getWorkouts(): Promise<WorkoutType[]> {
  try {
    const workoutsDB = ref(db, "workouts",);
    const snapshot = await get(workoutsDB);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getExercises(userId: string, courseId: string, workoutId: string): Promise<ExerciseType[]> {
  try {
      const userDB = ref(db, `/users/${userId}/courses/${courseId}/workouts/${workoutId}/exercises`);
      const snapshot = await get(userDB);
      if(snapshot.exists()){
          return Object.values(snapshot.val())
      }
      return [];
  } catch (error) {
      console.log(error)
      return [];
  }
}
