import { useState, type ChangeEvent } from "react";

type Props = {
    onSearchChange: (value: string) => void;
};

export const Searching = ({ onSearchChange }: Props) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onSearchChange(newValue);
    };
    return (
        <input
            className="p-2 ml-3 rounded-lg font-oswald border border-gray-300"
            type="text"
            placeholder="Поиск товаров"
            value={value}
            onChange={handleChange}
        />
    );
};
