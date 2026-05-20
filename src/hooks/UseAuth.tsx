import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("context is undefind");
    }
    return context;
};
