type ModalType = {
    data: string;
    onClose: () => void;
};

export const ModalWindow = ({ data, onClose }: ModalType) => {
    return (
        <div className="fixed inset-0  bg-black/40 backdrop-blur-md flex items-center justify-center rounded-lg p-4">
            <div className="bg-white p-6 rounded shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-gray-500 hover:text-[#68B738]"
                >
                    ✕
                </button>

                <h3>Подробное состояние отправлено {data} из формы программы</h3>
            </div>
        </div>
    );
};
