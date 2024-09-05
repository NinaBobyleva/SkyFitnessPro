import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CoursesPage } from "./pages/CoursesPage/CoursesPage";
import { WorkoutPage } from "./pages/WorkoutPage/WorkoutPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SigninPage } from "./pages/SigninPage/SigninPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { path } from "./paths";

export function RoutesApp() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={path.WORKOUT} element={<WorkoutPage />} />
      </Route>

      <Route path={path.HOME} element={<HomePage />} />
      <Route path={path.LOGIN} element={<SigninPage />} />
      <Route path={path.SIGNUP} element={<SignupPage />} />
      <Route path={path.COURSE} element={<CoursesPage />} />
    </Routes>
  );
}
