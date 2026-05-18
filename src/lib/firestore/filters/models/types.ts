import type { ProductType } from "@/widgets/model/product";

export type FiltersType = {
    minPrice: number;
    maxPrice: number;
    taste: string | null;
    weight: string | number | null;
};

export type OrderType = {
    id: string;
    items: ProductType[];
    status: string;
    totalPrice: number;
    createdAt: string;
};
