import { Button } from "@/shared/model/Button";

export const SendByEmail = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full lg:w-100">
            Отправить на email
        </Button>
    );
};
