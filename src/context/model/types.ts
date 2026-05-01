import type { catDataType } from "@/lib/Api/GroqAI/models/types";
import type { User as FirebaseUser } from "firebase/auth";

export type AuthContextType = {
    user: FirebaseUser | undefined | null;
    isLoading: boolean;
    planLoading: boolean;
    logIn: (credentials: UserCredentialType) => Promise<void>;
    signIn: (credentials: UserCredentialType) => Promise<void>;
    logOut: () => Promise<void>;
    dietPlan: string | null;
    generateDiet: (data: catDataType) => Promise<void>;
};

export type UserCredentialType = {
    email: string;
    pass: string;
};
