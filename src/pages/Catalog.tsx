import { useState } from "react";

import { useFirestore } from "@/hooks/UseFirestore";

import { getFilteredProducts } from "@/lib/firestore/filters/filters";
import type { FiltersType } from "@/lib/firestore/filters/models/types";

import type { ProductType } from "@/widgets/model/product";

import { OrderButton, Searching, FiltersProduct } from "@/features";
import { ProductBlock, SkeletonList } from "@/widgets";

export const Catalog = () => {
    const { data: items, isLoading } = useFirestore<ProductType>("products");

    const [isFiltering, setIsFiltering] = useState(false);
    const [filteredItems, setFilteredItems] = useState<ProductType[] | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleApplyFilters = async (filters: FiltersType) => {
        setIsFiltering(true);
        const result = await getFilteredProducts(filters);

        setFilteredItems(result);
        setIsFiltering(false);
    };

    const displayItems = (filteredItems !== null ? filteredItems : items).filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return (
        <div className="w-full">
            <h1 className="font-oswald text-3xl border-y border-gray-300 p-5 mb-5">
                Каталог продукции
            </h1>
            <div className="flex flex-row gap-4">
                <Searching onSearchChange={setSearchQuery} />
                <FiltersProduct onApply={handleApplyFilters} />
            </div>

            {isLoading || isFiltering ? (
                <SkeletonList count={6} />
            ) : (
                <div className="grid grid-cols-1 mw:grid-cols-2 gap-3 mw:p-3 md:grid-cols-4 xl:grid-cols-6">
                    {displayItems.length > 0 ? (
                        displayItems.map((item) => (
                            <ProductBlock key={item.id} item={item}>
                                <OrderButton productId={item.id} />
                            </ProductBlock>
                        ))
                    ) : (
                        <div className="col-span-full p-10 text-center text-gray-500">
                            <p className="mb-2 text-black text-lg font-semibold">
                                По вашему запросу ничего не найдено
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
