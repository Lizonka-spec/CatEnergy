import { initializeApp } from "firebase/app";
import { deleteDoc, doc, getFirestore, increment, updateDoc } from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const decrementCartItem = async (productId: string, currentCount: number) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    const cartItem = doc(db, "users", userId, "cart", productId);

    if (currentCount > 1) {
        await updateDoc(cartItem, {
            count: increment(-1),
        });
    } else {
        await deleteDoc(cartItem);
    }
};
