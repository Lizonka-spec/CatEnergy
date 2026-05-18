import { FavoriteButton } from "@/features/ui/FavoriteButton";
import type { ProductType } from "./model/product";
import { useEffect, useState } from "react";
import { getToFavorites } from "@/lib/firestore/addToFavorite";

type ProductCardProps = {
    item: ProductType;
    children?: React.ReactNode;
};

export const ProductBlock = ({ item, children }: ProductCardProps) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const deleteFav = getToFavorites((favorites) => {
            const found = favorites.some((fav) => fav.id === item.id);
            setIsFav(found);
        });

        return () => deleteFav();
    }, [item.id]);

    return (
        <div className="relative min-w-50 gap-3 p-3 mw:bg-gray-100">
            <div className="absolute top-2 right-2 z-10">
                <FavoriteButton productId={item.id} isInFavorite={isFav} />
            </div>

            <div className="flex py-4 items-center gap-10 justify-center mb-3 mw:flex-col mw:gap-5 ">
                <div className="size-20 mw:size-30 lg:size-35">
                    <img src={item.imageUrl} alt="#" />
                </div>

                <div className="w-[50%] mw:w-full mw:p-3">
                    <h2 className="w-25 font-oswald mb-4 mw:text-center mw:mx-auto mw:w-30">
                        {item.name}
                    </h2>

                    <div className="text-xs text-gray-700 grid grid-cols-2 gap-x-4 w-full mw:gap-x-0">
                        <span className="text-sm mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            Масса:
                        </span>
                        <span className="text-sm text-right mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            {item.weight} г
                        </span>

                        <span className="text-sm mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            Вкус:
                        </span>
                        <span className="text-sm text-right mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            {item.taste}
                        </span>

                        <span className="text-sm mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            Цена:
                        </span>
                        <span className="text-sm text-right mw:py-1 mw:border-b mw:border-gray-300 lg:text-lg">
                            {item.price} Р.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mx-auto">{children}</div>
        </div>
    );
};
