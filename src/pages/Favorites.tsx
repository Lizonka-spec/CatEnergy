import { ProductBlock } from "@/widgets";
import { OrderButton } from "@/features";
import { useFirestore } from "@/hooks/UseFirestore";
import { SkeletonList } from "@/widgets/SkeletonList";

export const Favorites = () => {
    const { data: favItem, isLoading } = useFirestore("favorites");
    if (isLoading) return <SkeletonList />;

    if (favItem.length === 0) {
        return <div className="text-center py-10">У вас нет избранных товаров :( </div>;
    }
    return (
        <div className="grid grid-cols-1 mw:grid-cols-2 gap-3 mw:p-3 md:grid-cols-4 xl:grid-cols-6">
            {favItem.map((item) => (
                <ProductBlock key={item.id} item={item}>
                    <OrderButton productId={item.id} />
                </ProductBlock>
            ))}
        </div>
    );
};
