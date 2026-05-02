import { YandexMaps } from "@/lib/Api/YandexMaps";
import { FooterButtons, LocationContent } from "../shared/index";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <LocationContent />
            <YandexMaps />
            <FooterButtons />
        </div>
    );
};
