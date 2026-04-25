import { initializeApp } from "firebase/app";
import { deleteDoc, doc, FirestoreError, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import type { ProductType } from "@/widgets/model/product";
import { FIRESTORE_ERROR } from "@/constants/error";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const toggleFavorite = async (productId: string) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;

    try {
        const favItem = doc(db, "users", userId, "favorites", productId);
        const favSnapshot = await getDoc(favItem);

        if (favSnapshot.exists()) {
            await deleteDoc(favItem);
            return false;
        } else {
            const productItem = doc(db, "products", productId);
            const productSnapshot = await getDoc(productItem);

            if (productSnapshot.exists()) {
                const productData = productSnapshot.data() as ProductType;
                await setDoc(favItem, productData);
                return true;
            }
        }
    } catch (error: unknown) {
        if (error instanceof FirestoreError) {
            console.log(FIRESTORE_ERROR.FAVORITE_ERROR);
        }
    }
};
