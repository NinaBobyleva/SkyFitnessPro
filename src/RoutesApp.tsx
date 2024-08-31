import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";

export function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursesPage />} />
        </Routes>
    );
}