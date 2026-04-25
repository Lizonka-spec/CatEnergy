import { useEffect, useState } from "react";

import type { ReactNode } from "react";
import type { User as FirebaseUser } from "firebase/auth";
import type { UserCredentialType } from "./model/types";

import { onAuthStateChanged } from "firebase/auth";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "@/lib/firebase/firebase";

import { AppContext } from "./appContext";

type AppContextProp = {
    children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProp) => {
    const [user, setUser] = useState<FirebaseUser | undefined | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });
    }, []);

    const logIn = async ({ email, pass }: UserCredentialType) => {
        await createUserWithEmailAndPassword(auth, email, pass);
    };

    const signIn = async ({ email, pass }: UserCredentialType) => {
        await signInWithEmailAndPassword(auth, email, pass);
    };

    const logOut = async () => {
        await signOut(auth);
    };
    return (
        <AppContext.Provider
            value={{
                user,
                isLoading,
                logIn,
                signIn,
                logOut,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
