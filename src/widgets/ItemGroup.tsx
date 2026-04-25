import { InfoItem } from "../shared";

export const ItemGroup = () => {
    return (
        <div className="mt-10 px-5 2xl:mx-10 ">
            <h2 className="font-semibold font-oswald text-4xl mb-10">Как это работает?</h2>
            <div className="flex flex-col gap-4  md:grid md:grid-cols-2 md:gap-10 2xl:grid-cols-4 2xl:gap-7">
                <InfoItem
                    imgSrc="/Group 1.png"
                    description="Функциональное питание
содержит только полезные
питательные вещества."
                    number="1"
                />
                <InfoItem
                    imgSrc="/Group 2.png"
                    description="Выпускается в виде порошка, 
который нужно лишь залить 
кипятком и готово."
                    number="2"
                />
                <InfoItem
                    imgSrc="/Group 3.png"
                    description="Замените один-два приема 
обычной еды на наше 
функциональное питание."
                    number="3"
                />
                <InfoItem
                    imgSrc="/Group 4.png"
                    description="Уже через месяц наслаждайтесь 
изменениями к лучшему 
вашего питомца!"
                    number="4"
                />
            </div>
        </div>
    );
};
