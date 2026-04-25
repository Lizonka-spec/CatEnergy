import { cloneToCart } from "@/lib/firestore/addToCart";
import { Button } from "../../shared/model/Button";
import { toast } from "sonner";

type OrderProps = {
    productId: string;
};

export const OrderButton = ({ productId }: OrderProps) => {
    const handleAddToCart = async () => {
        const newId = await cloneToCart(productId);
        if (newId) {
            toast.success("Товар в корзине!");
        } else {
            toast.error("Не удалось добавить");
        }
    };
    return (
        <Button onClick={handleAddToCart} className="w-full">
            Заказать
        </Button>
    );
};
