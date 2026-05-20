import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getToCart } from "@/lib/firestore/addToCart";
import { getToFavorites } from "@/lib/firestore/addToFavorite";
import { getProduct } from "@/lib/firestore/productCol";
import type { ProductType } from "@/widgets/model/product";
import { getToOrder } from "@/lib/firestore/addToOrder";
import type { OrderType } from "@/lib/firestore/filters/models/types";

export const useFirestore = <Type extends ProductType | OrderType>(
    collectionName: "cart" | "favorites" | "products" | "orders",
) => {
    const [data, setData] = useState<Type[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (!user && collectionName !== "products") {
                setIsDataLoading(false);
                setData([]);
                return;
            }

            let unsubscribeSnap: () => void = () => {};

            if (collectionName === "products") {
                unsubscribeSnap = getProduct((items) => {
                    setData(items as Type[]);
                    setIsDataLoading(false);
                });
            } else if (collectionName === "cart") {
                unsubscribeSnap = getToCart((items) => {
                    setData(items as Type[]);
                    setIsDataLoading(false);
                });
            } else if (collectionName === "favorites") {
                unsubscribeSnap = getToFavorites((items) => {
                    setData(items as Type[]);
                    setIsDataLoading(false);
                });
            } else if (collectionName === "orders") {
                unsubscribeSnap = getToOrder((orders) => {
                    setData(orders as Type[]);
                    setIsDataLoading(false);
                });
            }

            return () => unsubscribeSnap();
        });

        return () => unsubscribeAuth();
    }, [collectionName]);

    return { data, isLoading: isDataLoading };
};
