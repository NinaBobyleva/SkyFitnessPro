import { Navigate, Outlet } from "react-router-dom";
import { path } from "../../paths";

export function PrivateRoute({user}: {user: object | null}) {
    
    return user ? <Outlet/> : <Navigate to={path.LOGIN} />
}