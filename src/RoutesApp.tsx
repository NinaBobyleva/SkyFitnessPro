import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { WorkoutPage } from "./pages/WorkoutPage/WorkoutPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SigninPage } from "./pages/SigninPage/SigninPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { path } from "./paths";
import { useState } from "react";

export function RoutesApp() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={path.WORKOUT} element={<WorkoutPage />} />
      </Route>

      <Route path={path.HOME} element={<HomePage />}>
        <Route path={path.LOGIN} element={<SigninPage />} />
        <Route path={path.SIGNUP} element={<SignupPage />} />
      </Route>

      <Route path={path.COURSE} element={<CoursesPage />} />
    </Routes>
  );
}
