import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const [isAuth, setIsAuth] = useState(true);
    return isAuth ? <Outlet/> : <Navigate to={"/signin"} />
}