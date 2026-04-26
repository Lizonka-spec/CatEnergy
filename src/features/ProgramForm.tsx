import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { RequestButton } from "@/shared";

import { Mail, PhoneForwarded } from "lucide-react";

const App = () => {
    return <Mail />;
};

export default App;

export const ProgramForm = () => {
    return (
        <form className="px-5 flex flex-col gap-5 2xl:mx-10">
            <div className="flex-col flex gap-2">
                <h1 className="font-oswald uppercase text-2xl font-semibold">Подбор программы</h1>
                <p className="text-sm font-oswald text-gray-500 lg:text-lg">
                    Заполните анкету, и мы подберем программу питания для вашего кота
                </p>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-2 lg:w-[50%]">
                    <Input
                        placeholder="*ИМЯ:"
                        className="border border-gray-300 focus-visible:ring-1"
                    />
                    <Input
                        placeholder="*ВЕС (КГ):"
                        className="border border-gray-300 focus-visible:ring-1"
                    />
                    <Input
                        placeholder="*ВОЗРАСТ (ЛЕТ):"
                        className="border border-gray-300 focus-visible:ring-1"
                    />
                </div>
                <RadioGroup
                    defaultValue="weightLoss"
                    className="w-fit flex flex-col justify-center gap-2 font-oswald uppercase text-gray-900 border border-gray-200 px-5 py-3 mx-auto lg:w-[50%] "
                >
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="weightLoss" id="r1" />
                        <Label htmlFor="r1">Похудение</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="weightGain" id="r2" />
                        <Label htmlFor="r2">Набор массы</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="needAdvice" id="r3" />
                        <Label htmlFor="r3">Не знаю (нужен ваш совет)</Label>
                    </div>
                </RadioGroup>
            </div>
            <h2 className="font-oswald uppercase text-sm border-b border-[#68B738] w-fit md:text-lg">
                Контактные данные (владельца кота)
            </h2>
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto] ">
                <Input
                    placeholder="*E-MAIL:"
                    className="border border-gray-300 focus-visible:ring-1"
                />
                <Mail className="text-gray-600" />
                <Input
                    placeholder="*ТЕЛЕФОН:"
                    className="border border-gray-300 focus-visible:ring-1"
                />
                <PhoneForwarded className="text-gray-600" />
            </div>

            <h2 className="font-oswald uppercase text-sm border-b border-[#68B738] w-fit md:text-lg">
                Комментарий
            </h2>
            <Textarea
                placeholder="РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА"
                className="w-full h-50 placeholder:text-sm border border-gray-300 focus-visible:ring-1 lg:placeholder:text-lg"
            />
            <h2 className="font-oswald uppercase text-sm border-b border-[#68B738] w-fit md:text-lg">
                Дополнительно
            </h2>
            <Field
                orientation="horizontal"
                className="grid grid-cols-[auto_1fr] font-oswald uppercase text-gray-900 md:grid-cols-[auto_1fr_auto_1fr] lg:grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr]"
            >
                <Checkbox id="sugar" className="size-5 border border-gray-300 lg:size-7" />
                <FieldLabel htmlFor="sugar" className="lg:text-lg">
                    Сахарозаменитель
                </FieldLabel>
                <Checkbox id="water" className="size-5 border border-gray-300 lg:size-7" />
                <FieldLabel htmlFor="water" className="lg:text-lg">
                    Питьевая вода
                </FieldLabel>
                <Checkbox id="milk" className="size-5 border border-gray-300 lg:size-7" />
                <FieldLabel htmlFor="milk" className="lg:text-lg">
                    Молоко
                </FieldLabel>
                <Checkbox id="vitamins" className="size-5 border border-gray-300 lg:size-7" />
                <FieldLabel htmlFor="vitamins" className="lg:text-lg">
                    Витамины
                </FieldLabel>
            </Field>
            <div className="flex flex-col gap-5 justify-center items-center md:flex-row lg:justify-start">
                <RequestButton />
                <p className="md:text-lg">* — обязательные поля</p>
            </div>
        </form>
    );
};
