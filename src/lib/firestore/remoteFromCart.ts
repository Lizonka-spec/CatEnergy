import { initializeApp } from "firebase/app";
import { deleteDoc, doc, FirestoreError, getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import { FIRESTORE_ERROR } from "@/constants/errors/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const remoteFromCart = async (cartProductId: string) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    try {
        const cartProductRef = doc(db, "users", userId, "cart", cartProductId);
        await deleteDoc(cartProductRef);

        return true;
    } catch (error: unknown) {
        if (error instanceof FirestoreError) {
            console.error(FIRESTORE_ERROR.DELETE_ERROR, error.message);
        }

        return false;
    }
};
