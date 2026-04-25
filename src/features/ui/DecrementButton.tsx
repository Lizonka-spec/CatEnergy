import { decrementCartItem } from "@/lib/firestore/decrementItem";
import { FiMinus } from "react-icons/fi";
import { toast } from "sonner";

type DecrementProps = {
    count: number;
    productId: string;
};
export const DecrementButton = ({ count, productId }: DecrementProps) => {
    const handleDecrement = async () => {
        await decrementCartItem(productId, count);
        if (count === 1) {
            toast.info("Товар удален из корзины");
        }
    };

    return (
        <button
            onClick={handleDecrement}
            className="size-6 flex items-center justify-center rounded-md text-gray-500"
        >
            <FiMinus />
        </button>
    );
};
