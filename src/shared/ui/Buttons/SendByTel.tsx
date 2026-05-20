import { Button } from "@/shared/model/Button";

export const SendByTel = ({ ...props }) => {
    return (
        <Button {...props} className="rounded-lg w-full">
            Отправить СМС
        </Button>
    );
};
