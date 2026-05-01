import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/UseAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Skeleton />;
    } else if (!user) {
        return <Navigate to="/auth" replace />;
    }
    return <Outlet />;
};
