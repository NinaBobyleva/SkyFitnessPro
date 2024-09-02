import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { WorkoutPage } from "./pages/WorkoutPage/WorkoutPage";

export function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursesPage />} />
            <Route path="/workout" element={<WorkoutPage />} />
        </Routes>
    );
}