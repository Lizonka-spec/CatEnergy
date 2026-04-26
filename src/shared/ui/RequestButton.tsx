import { Button } from "../index";

export const RequestButton = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full">
            Отправить заявку
        </Button>
    );
};
