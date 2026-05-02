import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    doc,
    FirestoreError,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    writeBatch,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import type { ProductType } from "@/widgets/model/product";
import { FIRESTORE_ERROR } from "@/constants/errors/firestore";
import type { OrderType } from "./filters/models/types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createOrder = async (cartItems: ProductType[]) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;
    const ordersItem = collection(db, "users", userId, "orders");

    try {
        const batch = writeBatch(db);

        const finalPrice = cartItems.reduce((acc, item) => {
            const price = Number(item.price || 0);
            const count = Number(item.count || 1);
            return acc + price * count;
        }, 0);

        const ordersData = {
            items: cartItems,
            status: "processing",
            createdAt: serverTimestamp(),
            totalPrice: finalPrice,
        };

        await addDoc(ordersItem, ordersData);

        cartItems.forEach((item) => {
            const cartItemRef = doc(db, "users", userId, "cart", item.id);
            batch.delete(cartItemRef);
        });

        await batch.commit();
        return { success: true };
    } catch (error: unknown) {
        if (error instanceof FirestoreError) {
            console.log(FIRESTORE_ERROR.CLONING_ERROR);
        }
    }
};

export const getToOrder = (callback: (items: OrderType[]) => void) => {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;

    const ordersItem = collection(db, "users", userId, "orders");
    const q = query(ordersItem, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as unknown as OrderType[];
        callback(orders);
    });
    return unsubscribe;
};
