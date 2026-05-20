import { Button } from "../../index";

export const ResettingFiltersButton = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg text w-full bg-gray-400">
            Сбросить фильтры
        </Button>
    );
};
