import type { User as FirebaseUser } from "firebase/auth";

export type AuthContextType = {
    user: FirebaseUser | undefined | null;
    isLoading: boolean;
    logIn: (credentials: UserCredentialType) => Promise<void>;
    signIn: (credentials: UserCredentialType) => Promise<void>;
    logOut: () => Promise<void>;
};

export type UserCredentialType = {
    email: string;
    pass: string;
};
