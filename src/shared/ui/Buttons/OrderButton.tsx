import { Button } from "@/shared/model/Button";

import { createOrder } from "@/lib/firestore/addToOrder";
import { toast } from "sonner";
import { useState } from "react";
import { useFirestore } from "@/hooks/UseFirestore";
import type { ProductType } from "@/widgets/model/product";
import { cn } from "@/lib/utils";

export const OrderButton = () => {
    const { data: cartItem } = useFirestore<ProductType>("cart");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const totalPrice = cartItem.reduce((acc, item) => {
        const price = Number(item.price || 0);
        const count = Number(item.count || 1);

        return acc + price * count;
    }, 0);

    const handleOrder = async () => {
        if (cartItem.length === 0) return;

        setIsSubmitting(true);
        try {
            await createOrder(cartItem);

            toast.success("Заказ оформлен!", {
                description: "Мы уже начали его готовить.",
            });
        } catch {
            toast.error("Ошибка оформления", {
                description: "Не удалось создать заказ. Попробуйте позже.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <Button
            onClick={handleOrder}
            disabled={isSubmitting || cartItem.length === 0}
            className={cn("rounded-lg w-full md:w-150", "disabled:bg-gray-400")}
        >
            {isSubmitting ? "Обработка..." : `Оформить заказ — ${totalPrice} ₽`}
        </Button>
    );
};
