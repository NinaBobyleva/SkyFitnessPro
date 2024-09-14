import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { WorkoutPage } from "./pages/WorkoutPage/WorkoutPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SigninPage } from "./pages/SigninPage/SigninPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { path } from "./paths";
import { useEffect, useState } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { getCourses } from "./api/coursesApi";
import { CourseProp } from "./types";

export function RoutesApp() {
  const [isAuth, setIsAuth] = useState(true);
  const [courses, setCourses] = useState<CourseProp[] | null>([]);

  useEffect(() => {
    const getDataCourses = async () => {
      const res = await getCourses();
      setCourses(res);
    };
    getDataCourses();
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={path.WORKOUT} element={<WorkoutPage courses={courses} />} />
        <Route path={path.PROFILE} element={<ProfilePage />} />
      </Route>

      <Route path={path.HOME} element={<HomePage courses={courses}/>}>
        <Route path={path.LOGIN} element={<SigninPage />} />
        <Route path={path.SIGNUP} element={<SignupPage />} />
      </Route>

      <Route path={path.COURSE} element={<CoursesPage courses={courses} />} />
    </Routes>
  );
}
