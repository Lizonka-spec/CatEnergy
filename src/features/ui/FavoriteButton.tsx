import { toggleFavorite } from "@/lib/firestore/toggleFavorite";
import { useEffect, useState } from "react";

import { toast } from "sonner";

import { GoHeart, GoHeartFill } from "react-icons/go";

type FavoriteButtonProps = {
    productId: string;
    isInFavorite: boolean;
};
export const FavoriteButton = ({ productId, isInFavorite }: FavoriteButtonProps) => {
    const [isFavorite, setIsFavorite] = useState(isInFavorite);

    useEffect(() => {
        setIsFavorite(isInFavorite);
    }, [isInFavorite]);

    const handleToggleFav = async () => {
        const result = await toggleFavorite(productId);
        if (result === true) {
            setIsFavorite(true);
            toast.success("Добавлено в избранное!");
        } else if (result === false) {
            setIsFavorite(false);
            toast.info("Удалено из избранного");
        }
    };

    return (
        <button className="flex items-center justify-center p-1" onClick={handleToggleFav}>
            {isFavorite ? (
                <GoHeartFill className="text-[#f61d1d] size-6" />
            ) : (
                <GoHeart className="text-gray-400 size-6" />
            )}
        </button>
    );
};
