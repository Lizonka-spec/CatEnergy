import { useAuth } from "@/hooks/UseAuth";
import { SkeletonList } from "@/widgets";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <SkeletonList />;
    } else if (!user) {
        return <Navigate to="/auth" replace />;
    }
    return <Outlet />;
};
