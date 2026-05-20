import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export const CatSlider = () => {
    const [sliderValue, setSliderValue] = useState([50]);
    return (
        <div className="w-full max-w-95 m-auto ">
            <div className="relative w-full aspect-square overflow-hidden">
                <img src="./cat_after.png" alt="#" className="h-full object-cover" />

                <div
                    style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
                    className="absolute inset-0 h-full w-full bg-white"
                >
                    <img src="./cat_before.png" alt="#" className="h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-row items-center gap-4 font-oswald uppercase text-sm font-semibold">
                <span className="border-b border-gray-200">Было</span>
                <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="mx-auto w-full max-w-xs bg-gray-200 h-1"
                />
                <span className="border-b border-gray-200">Стало</span>
            </div>
        </div>
    );
};
