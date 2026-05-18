import { YandexMaps } from "@/lib/Api/YandexMaps";
import { LocationContent } from "../shared/index";
import { FooterButtons } from "@/shared/ui/Buttons";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <LocationContent />
            <YandexMaps />
            <FooterButtons />
        </div>
    );
};
