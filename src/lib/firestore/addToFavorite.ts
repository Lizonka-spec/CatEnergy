import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    FirestoreError,
    getDoc,
    getFirestore,
    onSnapshot,
    setDoc,
} from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import type { ProductType } from "@/widgets/model/product";
import { FIRESTORE_ERROR } from "@/constants/error";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addToFavorites = async (productId: string) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    try {
        const favItem = doc(db, "users", userId, "favorites", productId);
        const favSnapshot = await getDoc(favItem);

        if (favSnapshot.exists()) {
            return productId;
        } else {
            const productItem = doc(db, "products", productId);
            const productSnapshot = await getDoc(productItem);

            if (productSnapshot.exists()) {
                const productData = productSnapshot.data() as ProductType;
                await setDoc(favItem, {
                    ...productData,
                });

                return productId;
            } else {
                console.log(FIRESTORE_ERROR.DOC_NOT_FOUND);
            }
        }
    } catch (error: unknown) {
        if (error instanceof FirestoreError) {
            console.log(FIRESTORE_ERROR.CLONING_ERROR);
        }
    }
};

export const getToFavorites = (callback: (data: ProductType[]) => void) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    const favCol = collection(db, "users", userId, "favorites");

    return onSnapshot(favCol, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as ProductType[];
        callback(items);
    });
};
