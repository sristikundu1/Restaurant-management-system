import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg flex justify-center items-center"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={location.pathname} replace ></Navigate>;
};

export default AdminRoutes;