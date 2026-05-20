import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    FirestoreError,
    getDoc,
    getFirestore,
    increment,
    onSnapshot,
    setDoc,
    updateDoc,
} from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import type { ProductType } from "@/widgets/model/product";
import { FIRESTORE_ERROR } from "@/constants/errors/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const cloneToCart = async (productId: string) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    try {
        const cartItem = doc(db, "users", userId, "cart", productId);
        const cartSnapshot = await getDoc(cartItem);
        if (cartSnapshot.exists()) {
            await updateDoc(cartItem, {
                count: increment(1),
            });
            return productId;
        } else {
            const productItem = doc(db, "products", productId);
            const productSnapshot = await getDoc(productItem);

            if (productSnapshot.exists()) {
                const productData = productSnapshot.data() as ProductType;
                await setDoc(cartItem, {
                    ...productData,
                    count: 1,
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

export const getToCart = (callback: (data: ProductType[]) => void) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    const newCol = collection(db, "users", userId, "cart");

    return onSnapshot(newCol, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as ProductType[];
        callback(items);
    });
};
