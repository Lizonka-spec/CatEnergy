import { SendByEmail, SendByTel } from "@/shared/ui/Buttons";

export const SendMessage = () => {
    return (
        <div className="flex flex-col p-5 ">
            <h2 className="font-oswald uppercase text-2xl font-semibold mb-6">
                Хотите больше подробной информации?
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row ">
                <SendByEmail />
                <SendByTel />
            </div>
        </div>
    );
};
