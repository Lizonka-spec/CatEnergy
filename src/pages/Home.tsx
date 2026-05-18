import { LivingExample, ItemGroup } from "@/widgets";
import { Promo, TeaserList } from "../features/index";

export const Home = () => {
    return (
        <div>
            <Promo />
            <TeaserList />
            <ItemGroup />
            <LivingExample />
        </div>
    );
};
