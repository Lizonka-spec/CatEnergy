import { YandexMaps } from "@/lib/Api/YandexMaps";
import { FooterButtons, LocationContent } from "../shared/index";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <LocationContent />
            <YandexMaps />
            <FooterButtons />
        </div>
    );
};
