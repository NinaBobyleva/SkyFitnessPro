import { Navigate, Outlet } from "react-router-dom";
import { path } from "../../paths";
import { User } from "firebase/auth";

export function PrivateRoute({user}: {user: User}) {
    
    return user ? <Outlet/> : <Navigate to={path.LOGIN} />
}