import { Button } from "../index";

export const RequestButton = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full md:w-[40%] md:mt-5 ">
            Отправить заявку
        </Button>
    );
};
