import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ auth, allowedRoles }) => {
    const location = useLocation();

    return (
        auth?.user?.role && allowedRoles.includes(auth?.user?.role)
            ? <Outlet />
            : auth?.token
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default PrivateRoute;