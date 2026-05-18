import { useState } from "react";

import {
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Select,
} from "@/components/ui/select";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Sheet,
    SheetDescription,
} from "@/components/ui/sheet";

import { FilterButton, ResettingFiltersButton } from "@/shared/ui/Buttons";

import { TbFilterSearch } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import type { FiltersType } from "@/lib/firestore/filters/models/types";

export const FiltersProduct = ({ onApply }: { onApply: (filters: FiltersType) => void }) => {
    const [open, setOpen] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [taste, setTaste] = useState<string | null>(null);
    const [weight, setWeight] = useState<string | null>(null);

    const onFilter = () => {
        const activeFilters: FiltersType = {
            minPrice: minPrice === "" ? 0 : Number(minPrice),
            maxPrice: maxPrice === "" ? Infinity : Number(maxPrice),
            taste: taste === "Все варианты" ? null : taste,
            weight: weight === "Все варианты" ? null : Number(weight),
        };
        setOpen(false);

        onApply(activeFilters);
    };

    const handleClear = () => {
        setMinPrice("");
        setMaxPrice("");
        setTaste("Все варианты");
        setWeight("Все варианты");

        onApply({
            minPrice: 0,
            maxPrice: Infinity,
            taste: null,
            weight: null,
        });

        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2 rounded-lg font-oswald border border-gray-300">
                <TbFilterSearch className="text-[#68B738]" size={20} />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-gray-300">
                <SheetHeader className="border-b pb-4 mb-6">
                    <SheetTitle className="font-oswald text-2xl uppercase">Фильтры</SheetTitle>
                    <SheetDescription className="text-gray-400 font-oswald">
                        Выберите параметры для поиска товаров
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-8 p-3">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 uppercase">
                            Цена (₽)
                        </label>
                        <div className="flex items-center gap-2">
                            <Input
                                className="border-gray-300 focus-visible:ring-1"
                                type="number"
                                placeholder="От"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span className="text-gray-400">—</span>
                            <Input
                                className="border-gray-300 focus-visible:ring-1"
                                type="number"
                                placeholder="До"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700 uppercase ">
                            Вкус
                        </label>
                        <Select onValueChange={setTaste} value={taste || "Все варианты"}>
                            <SelectTrigger className="w-full border-gray-300">
                                <SelectValue placeholder="Выберите вкус" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="bg-white">
                                <SelectItem value="Все варианты">Все варианты</SelectItem>
                                <SelectItem value="Гречка">Гречка</SelectItem>
                                <SelectItem value="Курица">Курица</SelectItem>
                                <SelectItem value="Рыба">Рыба</SelectItem>
                                <SelectItem value="Pис">Рис</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700 uppercase">
                            Масса (г)
                        </label>
                        <Select
                            onValueChange={setWeight}
                            value={weight?.toString() || "Все варианты"}
                        >
                            <SelectTrigger className="w-full border-gray-300">
                                <SelectValue placeholder="Выберите массу" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="bg-white w-ful">
                                <SelectItem value="Все варианты">Все варианты</SelectItem>
                                <SelectItem value="500">500 г</SelectItem>
                                <SelectItem value="1000">1000 г</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full flex flex-row gap-3">
                        <FilterButton onClick={onFilter} />

                        <ResettingFiltersButton onClick={handleClear} />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
