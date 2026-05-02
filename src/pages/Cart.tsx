import { OrderBlock, ProductBlock } from "@/widgets";
import { Counter, DeleteButton } from "@/features";
import { useFirestore } from "@/hooks/UseFirestore";
import { SkeletonList } from "@/widgets/SkeletonList";
import type { ProductType } from "@/widgets/model/product";

export const Cart = () => {
    const { data: cartItem, isLoading } = useFirestore<ProductType>("cart");
    if (isLoading) return <SkeletonList />;

    if (cartItem.length === 0) {
        return <div className="text-center py-10">Ваша корзина пуста :(</div>;
    }
    return (
        <div className="p-5">
            <OrderBlock />
            <div className="grid grid-cols-1 mt-3 mw:grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
                {cartItem.map((item) => (
                    <ProductBlock key={item.id} item={item}>
                        <div className="flex flex-row gap-3">
                            <DeleteButton cartProductId={item.id} />
                            <Counter item={item} />
                        </div>
                    </ProductBlock>
                ))}
            </div>
        </div>
    );
};
