import { useLocation, Navigate, Outlet } from 'react-router-dom';
import IntroOverlay from './IntroOverlay';

const PrivateRoute = ({ auth, allowedRoles }) => {
    // Location props
    const location = useLocation();
    const {user: userSession} = auth;

    return (
        <>
            {
                auth.loading && (
                    <IntroOverlay />
                )
            }
            {
                !auth.loading && userSession?.token && allowedRoles.includes(userSession?.user?.role)
                    ? <Outlet />
                    : userSession.token
                        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                        : <Navigate to="/login" state={{ from: location }} replace />
            }
        </>
    )
}

export default PrivateRoute;