import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { WorkoutPage } from "./pages/WorkoutPage/[course]/[courseid]/[id]/WorkoutPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SigninPage } from "./pages/SigninPage/SigninPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { path } from "./paths";
import { useEffect, useState } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { getCourses } from "./api/coursesApi";
import { CourseProp } from "./types";
import SelectionPage from "./pages/SelectionPage/[id]/SelectionPage";
import { useUser } from "./context/UserContext";
import ResetPage from "./pages/ResetPage/ResetPage";

export function RoutesApp() {
  const [courses, setCourses] = useState<CourseProp[]>([]);
  const {user} = useUser();

  useEffect(() => {
    const getDataCourses = async () => {
      const res = await getCourses();
      setCourses(res);
    };
    getDataCourses();
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={path.WORKOUT} element={<WorkoutPage courses={courses} />} />
        <Route path={path.SELECTION} element={<SelectionPage />} />
        <Route path={path.PROFILE} element={<ProfilePage />} />
        <Route path={path.RESET} element={<ResetPage />} /> 
      </Route>

      <Route path={path.HOME} element={<HomePage courses={courses} />}>
        <Route path={path.LOGIN} element={<SigninPage />} />
        <Route path={path.SIGNUP} element={<SignupPage />} />
      </Route>

      <Route path={path.COURSE} element={<CoursesPage courses={courses} />} />
    </Routes>
  );
}
