import { cloneToCart } from "@/lib/firestore/addToCart";
import { GoPlus } from "react-icons/go";

export const IncrementButton = ({ productId }: { productId: string }) => {
    const handleIncrement = async () => {
        await cloneToCart(productId);
    };

    return (
        <button
            onClick={handleIncrement}
            className="size-6 flex items-center justify-center rounded-md text-gray-500"
        >
            <GoPlus />
        </button>
    );
};
