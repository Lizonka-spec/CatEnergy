import { ProgramButton, PromoContent } from "../shared";

export const Promo = () => {
    return (
        <div className="relative">
            <PromoContent />
            <div
                className="absolute top-50.5 mm:top-60.5 mw:top-70.5 left-1/2 size-70 mw:size-90 -translate-x-1/2
            tm:top-60 md:size-100 md:top-65
            lg:top-35"
            >
                <img src="/index-can.png" alt="Cat Energy" className="object-contain" />
            </div>
            <ProgramButton />
        </div>
    );
};
