import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RequestButton } from "@/shared";

import { Mail, PhoneForwarded } from "lucide-react";

const App = () => {
    return <Mail />;
};

export default App;

export const ProgramForm = () => {
    return (
        <form>
            <h1>Подбор программы</h1>
            <p>Заполните анкету, и мы подберем программу питания для вашего кота</p>
            <div>
                <Input placeholder="ИМЯ:*" />
                <Input placeholder="ВЕС (КГ):*" />
                <Input placeholder="ВОЗРАСТ (ЛЕТ):*" />
            </div>
            <RadioGroup defaultValue="weightLoss" className="w-fit">
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
                <h2>Контактные данные (владельца кота)</h2>
                <div>
                    <Input placeholder="E-MAIL:*" /> <Mail />
                    <Input placeholder="ТЕЛЕФОН:*" />
                    <PhoneForwarded />
                </div>
            </RadioGroup>
            <h2>Комментарий</h2>
            <Input placeholder="РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА" />
            <h2>Дополнительно</h2>
            <FieldGroup className="mx-auto w-56">
                <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                    <FieldLabel htmlFor="terms-checkbox-basic">Сахарозаменитель</FieldLabel>
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                    <FieldLabel htmlFor="terms-checkbox-basic">Питьевая вода</FieldLabel>
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                    <FieldLabel htmlFor="terms-checkbox-basic">Молоко</FieldLabel>
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                    <FieldLabel htmlFor="terms-checkbox-basic">Витамины</FieldLabel>
                </Field>
            </FieldGroup>
            <div>
                <RequestButton />
                <p>*-обязательные поля</p>
            </div>
        </form>
    );
};
