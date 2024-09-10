import { get, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import { CoursesArrayType } from "../pages/CoursesPage/CoursesPage";

export async function getCourses(): Promise<CoursesArrayType | null> {
    try {
        const coursesDB = ref(db, "courses");
        const snapshot = await get(coursesDB)
        if(snapshot.exists()){
            return Object.values(snapshot.val())
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}