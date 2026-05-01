import { useEffect, useState } from "react";

import type { ReactNode } from "react";
import type { User as FirebaseUser } from "firebase/auth";
import type { UserCredentialType } from "./model/types";
import type { catDataType } from "@/lib/Api/GroqAI/models/types";

import { onAuthStateChanged } from "firebase/auth";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "@/lib/firebase/firebase";

import { AppContext } from "./appContext";
import { getCatDiet } from "@/lib/Api/GroqAI/GroqAI";

type AppContextProp = {
    children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProp) => {
    const [user, setUser] = useState<FirebaseUser | undefined | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [planLoading, setPlanLoading] = useState<boolean>(false);
    const [dietPlan, setDietPlan] = useState<string | null>(null);

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

    const generateDiet = async (data: catDataType) => {
        setPlanLoading(true);
        try {
            const result = await getCatDiet(data);
            setDietPlan(result);
        } catch (err) {
            console.log(err);
        } finally {
            setPlanLoading(false);
        }
    };
    return (
        <AppContext.Provider
            value={{
                user,
                isLoading,
                planLoading,
                dietPlan,
                logIn,
                signIn,
                logOut,
                generateDiet,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
