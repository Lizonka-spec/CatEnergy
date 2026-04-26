import { CatSlider } from "@/features";

export const LivingExample = () => {
    return (
        <div className="px-5 mt-10 flex flex-col justify-between">
            <h2 className="font-oswald text-4xl font-semibold">Живой пример</h2>
            <p className="text-xs text-gray-500">
                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim.
                Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и
                по-прежнему спит по 16 часов в день.
            </p>
            <div>
                <div>
                    <span>5 кг</span>
                    <span>снижение веса</span>
                </div>
                <div>
                    <span>60 дней</span>
                    <span>затрачено времени</span>
                </div>
                <div>
                    <span>Затраты на питание</span>
                    <span>15 000 руб</span>
                </div>
            </div>
            <CatSlider />
        </div>
    );
};
