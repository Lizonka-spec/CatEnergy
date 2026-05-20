import type { ProductType } from "@/widgets/model/product";
import { DecrementButton } from "./DecrementButton";
import { IncrementButton } from "./IncrementButton";

export const Counter = ({ item }: { item: ProductType }) => {
    return (
        <div className="flex flex-row gap-1 items-center text-lg">
            <DecrementButton productId={item.id} count={item.count || 1} />
            <span className="font-oswald">{item.count}</span>
            <IncrementButton productId={item.id} />
        </div>
    );
};
