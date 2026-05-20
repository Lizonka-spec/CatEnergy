import { Button } from "../../index";

export const FilterButton = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full">
            Показать результаты
        </Button>
    );
};
