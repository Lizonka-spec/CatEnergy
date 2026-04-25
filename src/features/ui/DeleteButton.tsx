import { remoteFromCart } from "@/lib/firestore/remoteFromCart";
import { Button } from "@/shared";
import { toast } from "sonner";

type DeleteButtonProps = {
    cartProductId: string;
};

export const DeleteButton = ({ cartProductId }: DeleteButtonProps) => {
    const hadleRemoteFromCart = async () => {
        const isDeleted = await remoteFromCart(cartProductId);

        if (isDeleted) {
            toast.success("Товар удален из корзины");
        } else {
            toast.error("Не удалось удалить");
        }
    };
    return (
        <Button onClick={hadleRemoteFromCart} className="w-full bg-[#f61d1d]">
            Удалить
        </Button>
    );
};
