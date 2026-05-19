import type { catDataType } from "./models/types";
import { Groq } from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

export const getCatDiet = async (catData: catDataType) => {
    const weight = Number(catData.weight);
    let diagnosis = "";
    let programTag = "";
    let recommendation = "";

    if (weight < 3.5) {
        diagnosis = "Дефицит массы тела (истощение).";
        programTag = "[PROGRAM_PRO]";
        recommendation = "необходимо усиленное питание для набора веса.";
    } else if (weight <= 5.5) {
        diagnosis = "Идеальный вес.";
        programTag = "[PROGRAM_PRO]";
        recommendation = "поддержание текущей формы.";
    } else if (weight <= 10) {
        diagnosis = "Ожирение средней степени.";
        programTag = "[PROGRAM_SLIM]";
        recommendation = "строгая диета для снижения нагрузки на суставы и сердце.";
    } else {
        diagnosis = "КРИТИЧЕСКОЕ ОЖИРЕНИЕ. Угроза жизни.";
        programTag = "[PROGRAM_SLIM]";
        recommendation = "немедленное ограничение калорий и визит к кардиологу.";
    }

    const manual: Record<string, string> = {
        sugar: "САХАРОЗАМЕНИТЕЛИ: Строгий запрет на ксилитол. Сладости ведут к диабету.",
        water: "ПИТЬЕВАЯ ВОДА: Обеспечить доступ к чистой воде 24/7. Кошки мало пьют, что опасно для почек.",
        milk: "МОЛОКО: Исключить обычное молоко. Лактоза вызывает диарею. Только спец. молоко для кошек.",
        vitamins: `ВИТАМИНЫ: Нужен комплекс строго под вес ${weight} кг.`,
    };

    const activeExtras = Array.isArray(catData.extra)
        ? catData.extra
              .map((id) => `- ${manual[id as keyof typeof manual]}`)
              .filter(Boolean)
              .join("\n")
        : "Специфических добавок не выбрано. Рекомендуется стандартный курс Омега-3.";

    const prompt = `
${programTag}

Ты — ведущий ветеринарный диетолог. Твоя задача — оформить медицинское заключение. Обязательно все переводи на русский язык, и цель хозяина тоже.

ДАННЫЕ:
- Имя: ${catData.name}
- Вес: ${weight} кг (Статус: ${diagnosis})
- Цель: ${catData.goal || "Не указана"}
- Комментарий владельца: ${catData.comment || "Отсутствует"}

ИНСТРУКЦИИ:
1. Твой вердикт по весу: ${diagnosis} ${recommendation}
2. Разбор комментария: Если в комментарии описаны вредные привычки (еда со стола, жирное), которые мешают цели "${catData.goal}", СТРОГО их запрети. Если комментарий пуст — не упоминай его.
3. Добавки: Напиши ТОЛЬКО этот текст ниже:
${activeExtras}

СТРУКТУРА ОТВЕТА:
## Медицинское заключение: ${catData.name}
(Пиши тут про вес и разбор комментария)

## План питания
- Линейка: ${programTag === "[PROGRAM_SLIM]" ? "**Cat Energy Slim**" : "**Cat Energy Pro**"}
- Суточная норма: **${programTag === "[PROGRAM_SLIM]" ? "30-45г" : "60-80г"}**

## Добавки
(Твой текст из раздела добавок.)

## Рекомендации по активности
(2-3 коротких совета) 

### ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ (СТРОГО):
- Раздел "Добавки" должен быть оформлен СТРОГО как маркированный список. 
- Каждый пункт раздела "Добавки" ОБЯЗАТЕЛЬНО должен начинаться с символа "-" и быть на новой строке.
- НЕ объединяй добавки в один абзац.

Обязательно в самой первой строке пиши [PROGRAM_SLIM] если коту надо худеть и [PROGRAM_PRO] если надо набрать вес или поддерживать его`;

    const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.1-8b-instant",
        temperature: 0,
    });

    return chatCompletion.choices[0]?.message?.content || "";
};
