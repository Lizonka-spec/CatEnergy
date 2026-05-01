import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export const useDiet = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useDiet must be used within DietProvider");
    return context;
};
