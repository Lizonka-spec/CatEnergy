import { createContext } from "react";
import type { AuthContextType } from "./model/types";

export const AppContext = createContext<AuthContextType | undefined>(undefined);
