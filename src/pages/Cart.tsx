import { OrderBlock, ProductBlock } from "@/widgets";
import { Counter, DeleteButton } from "@/features";
import { useFirestore } from "@/hooks/UseFirestore";
import { SkeletonList } from "@/widgets/SkeletonList";
import type { ProductType } from "@/widgets/model/product";
import { OrderButton } from "@/shared/ui/Buttons";

export const Cart = () => {
    const { data: cartItem, isLoading } = useFirestore<ProductType>("cart");
    if (isLoading) return <SkeletonList />;

    return (
        <div className="p-5">
            <OrderBlock />
            {cartItem.length === 0 ? (
                <div className="text-center py-10">Ваша корзина пуста :(</div>
            ) : (
                <div className="grid grid-cols-1 my-5 mw:grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
                    {cartItem.map((item) => (
                        <ProductBlock key={item.id} item={item}>
                            <div className="flex flex-row gap-3">
                                <DeleteButton cartProductId={item.id} />
                                <Counter item={item} />
                            </div>
                        </ProductBlock>
                    ))}
                </div>
            )}

            <OrderButton />
        </div>
    );
};
