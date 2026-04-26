import { useForm } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { RequestButton } from "@/shared";

import { Mail, PhoneForwarded } from "lucide-react";
import { PROGRAM_ERRORS } from "@/constants/errors/programform";

type FormType = {
    email: string;
    phone: string;
    errors: string;
    age: number;
    weight: number;
    name: string;
};

export const ProgramForm = () => {
    const {
        register,
        reset,
        formState: { errors, isValid },
    } = useForm<FormType>({
        mode: "onChange",
    });

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
                    <div>
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                        <Input
                            placeholder="*ИМЯ:"
                            className="border border-gray-300 focus-visible:ring-1"
                            id="name"
                            type="text"
                            {...register("name", {
                                required: PROGRAM_ERRORS.REQUIRED,
                            })}
                        />
                    </div>
                    <div className="flex flex-col">
                        {errors.weight && (
                            <span className="text-red-500 text-sm">{errors.weight.message}</span>
                        )}
                        <Input
                            placeholder="*ВЕС (КГ):"
                            className="border border-gray-300 focus-visible:ring-1"
                            id="weight"
                            type="text"
                            {...register("weight", {
                                required: PROGRAM_ERRORS.REQUIRED,
                                pattern: {
                                    value: /^[0-9+()-\s]*$/,
                                    message: PROGRAM_ERRORS.INVALID_WEIGHT,
                                },
                            })}
                        />
                    </div>
                    <div className="flex flex-col">
                        {errors.age && (
                            <span className="text-red-500 text-sm ">{errors.age.message}</span>
                        )}
                        <Input
                            placeholder="*ВОЗРАСТ (ЛЕТ):"
                            className="border border-gray-300 focus-visible:ring-1"
                            id="age"
                            type="text"
                            {...register("age", {
                                required: PROGRAM_ERRORS.REQUIRED,
                                pattern: {
                                    value: /^[0-9+()-\s]*$/,
                                    message: PROGRAM_ERRORS.INVALID_AGE,
                                },
                            })}
                        />
                    </div>
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
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto]">
                <div className="flex flex-col relative">
                    {errors.email && (
                        <span className="text-red-500 text-sm absolute -top-5 left-0">
                            {errors.email.message}
                        </span>
                    )}
                    <Input
                        placeholder="*E-MAIL:"
                        className="border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus-visible:ring-1"
                        id="email"
                        type="email"
                        {...register("email", {
                            required: PROGRAM_ERRORS.REQUIRED,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: PROGRAM_ERRORS.INVALID_EMAIL,
                            },
                        })}
                    />
                </div>

                <Mail className="text-gray-600 lg:mr-10" />
                <div className="flex flex-col relative">
                    {errors.phone && (
                        <span className="text-red-500 text-sm absolute -top-5 left-0">
                            {errors.phone.message}
                        </span>
                    )}
                    <Input
                        placeholder="*ТЕЛЕФОН:"
                        className="border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus-visible:ring-1"
                        id="phone"
                        type="text"
                        {...register("phone", {
                            required: PROGRAM_ERRORS.REQUIRED,
                            pattern: {
                                value: /^[0-9+()-\s]*$/,
                                message: PROGRAM_ERRORS.INVALID_PHONE,
                            },
                        })}
                    />
                </div>
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
                <RequestButton onClick={() => reset} disabled={!isValid} />
                <p className="md:text-lg">* — обязательные поля</p>
            </div>
        </form>
    );
};
