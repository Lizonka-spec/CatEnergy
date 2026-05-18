import { Button } from "../../index";
import { cn } from "@/lib/utils";

export const RequestButton = ({ ...props }) => {
    return (
        <Button
            {...props}
            className={cn("rounded-lg w-full md:w-[40%] md:mt-5", "disabled:bg-gray-400")}
        >
            Отправить заявку
        </Button>
    );
};
