import { get, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import { CourseProp, WorkoutType } from "../types";

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
