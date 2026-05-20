import { Button } from "@/shared/model/Button";

export const SendByEmail = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full">
            Отправить на email
        </Button>
    );
};
