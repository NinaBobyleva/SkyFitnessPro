import { Navigate, Outlet } from "react-router-dom";
import { path } from "../../paths";

export function PrivateRoute({isAuth}: {isAuth: boolean}) {
    
    return isAuth ? <Outlet/> : <Navigate to={path.LOGIN} />
}