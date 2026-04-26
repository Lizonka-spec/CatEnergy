import { Button } from "../index";

export const ProgramButton = ({ ...props }) => {
    return (
        <Button
            {...props}
            className="relative w-[90%] mx-4 mt-45 mw:mt-55 
tm:w-61 tm:z-50 tm:mt-0 tm:ml-17
lg:absolute lg:top-65 lg:ml-8"
        >
            Подобрать программу
        </Button>
    );
};
