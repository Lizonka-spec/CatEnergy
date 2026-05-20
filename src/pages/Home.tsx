import { LivingExample, ItemGroup } from "@/widgets";
import { Promo, TeaserList } from "../features/index";
import { YandexMaps } from "@/lib/Api/YandexMaps";
import { LocationContent } from "@/shared";

export const Home = () => {
    return (
        <div>
            <Promo />
            <TeaserList />
            <ItemGroup />
            <LivingExample />
            <YandexMaps />
            <LocationContent />
        </div>
    );
};
