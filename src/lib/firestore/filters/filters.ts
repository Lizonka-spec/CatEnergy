import { query, collection, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../productCol";
import type { ProductType } from "@/widgets/model/product";
import type { FiltersType } from "./models/types";

export async function getFilteredProducts({ minPrice, maxPrice, taste, weight }: FiltersType) {
    try {
        const productsRef = collection(db, "products");

        const constraints = [];

        if (taste && taste !== "Все варианты") {
            constraints.push(where("taste", "==", taste));
        }

        if (weight && weight !== "Все варианты") {
            constraints.push(where("weight", "==", weight));
        }

        if (minPrice > 0 || (maxPrice !== Infinity && maxPrice > 0)) {
            constraints.push(
                where("price", ">=", minPrice),
                where("price", "<=", maxPrice),
                orderBy("price"),
            );
        }

        const q = query(productsRef, ...constraints);
        const querySnapshot = await getDocs(q);

        const finalFilters = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<ProductType, "id">),
        }));

        return finalFilters;
    } catch (error) {
        console.error("Ошибка при фильтрации товаров:", error);
        return [];
    }
}
