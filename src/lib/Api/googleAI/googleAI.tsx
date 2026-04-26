import { GoogleGenerativeAI } from "@google/generative-ai";
import type { catDataType } from "./models/types";

const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAi = new GoogleGenerativeAI(geminiKey);

export const getCatDiet = async (catData: catDataType) => {
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Ты ветеринарный диетолог. Составь краткий план питания для кота:
    - Имя: ${catData.name}
    - Вес: ${catData.weight} кг
    - Возраст: ${catData.age} лет
    - Цель: ${catData.goal}
    - Особенности: ${catData.comment || "нет"}
    - Дополнительно: ${catData.extra?.join(", ") || "нет"}
    
    Обязательно:
    1. Отвечай на русском языке.
    2. Порекомендуй конкретную линейку: Cat Energy Slim (если нужно похудение) или Cat Energy Pro (если нужен набор массы или активный рост).
    3. Укажи примерную дневную норму в граммах.
    4. Посоветуй минимальную дневную нагрузку для котика.
    5. Дополнительные добавки в течении дня-недели-месяца.`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Ошибка Gemini API:", error);
        throw error;
    }
};
