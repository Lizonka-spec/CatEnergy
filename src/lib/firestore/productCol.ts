import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";

import { firebaseConfig } from "../firebase/firebase";
import type { ProductType } from "@/widgets/model/product";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProduct = (callback: (data: ProductType[]) => void) => {
    const productsQuery = query(collection(db, "products"), orderBy("taste", "asc"));

    return onSnapshot(productsQuery, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as ProductType[];

        callback(items);
    });
};
