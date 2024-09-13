import { get, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import { ExerciseType } from "../types";

export async function getUser(userId: string, courseId: string, workoutId: string): Promise<ExerciseType[] | null> {
    try {
        const userDB = ref(db, `/users/${userId}/courses/${courseId}/workouts/${workoutId}/exercises`);
        const snapshot = await get(userDB);
        if(snapshot.exists()){
            return Object.values(snapshot.val())
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}
