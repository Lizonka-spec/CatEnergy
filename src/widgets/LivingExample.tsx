import { CatSlider } from "@/features";
import CountUp from "react-countup";

export const LivingExample = () => {
    return (
        <div className="px-5 mt-10 flex flex-col gap-10 lg:flex-row 2xl:mx-10">
            <div className="lg:w-[45%]">
                <div className="mb-10">
                    <h2 className="font-oswald text-4xl font-semibold mb-10">Живой пример</h2>
                    <p className="text-xs text-gray-500 md:text-lg">
                        Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat
                        Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не
                        менял своих привычек и по-прежнему спит по 16 часов в день.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between lg:flex-col">
                    <div className="flex gap-8 justify-around mb-5 lg:justify-center">
                        <div className="border border-gray-300 p-5 relative whitespace-nowrap md:p-8">
                            <span className="font-semibold text-lg uppercase">
                                <CountUp end={5} duration={1} /> кг
                            </span>
                            <span className="text-xs absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-white text-[10px] px-1 md:text-xs">
                                снижение веса
                            </span>
                        </div>
                        <div className="border border-gray-300 p-5 relative whitespace-nowrap md:p-8">
                            <span className="font-semibold text-lg uppercase ">
                                <CountUp end={60} duration={2} /> дней
                            </span>
                            <span className="text-xs absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-white text-[10px] px-1 md:text-xs">
                                затрачено времени
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 text-right font-oswald uppercase justify-center md:flex-col lg:flex-row">
                        <span className="md:text-lg">Затраты на питание:</span>
                        <span className="md:text-lg">
                            <CountUp end={15000} duration={5} /> руб
                        </span>
                    </div>
                </div>
            </div>
            <CatSlider />
        </div>
    );
};
