import { useState } from "react";
import { ModalWindow } from "@/shared";
import { SendByEmail, SendByTel } from "@/shared/ui/Buttons";

export const SendMessage = () => {
    const [modalData, setModalData] = useState<string | null>(null);

    return (
        <div className="flex flex-col p-5">
            <h2 className="font-oswald uppercase text-2xl font-semibold mb-6">
                Хотите больше подробной информации?
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row">
                <SendByEmail onClick={() => setModalData("на почту")} />
                <SendByTel onClick={() => setModalData("по номеру телефона")} />
            </div>
            {modalData && <ModalWindow data={modalData} onClose={() => setModalData(null)} />}
        </div>
    );
};
