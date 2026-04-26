export const AUTH_ERRORS = {
    INVALID_EMAIL: "Некорректный email",
    WRONG_PASSWORD: "Неверный пароль",
    USER_NOT_FOUND: "Пользователь не найден",
    EMAIL_ALREADY_IS_USE: "Пользователь с таким email уже существует",
    WEAK_PASSWORD: "Пароль должен состоять из 6 символов",
    UNKNOWN: "неизвестная ошибка регистрации, попробуйте еще раз",
    REQUIRED: "Это поле обязательно",
    INTERNER_FAILURE: "Сбой подключения",
} as const;

export const FIREBASE_ERROR: Record<string, string> = {
    "auth/email-already-in-use": AUTH_ERRORS.EMAIL_ALREADY_IS_USE,
    "auth/invalid-email": AUTH_ERRORS.INVALID_EMAIL,
    "auth/user-not-found": AUTH_ERRORS.USER_NOT_FOUND,
    "auth/wrong-password": AUTH_ERRORS.WRONG_PASSWORD,
    "auth/weak-password": AUTH_ERRORS.WEAK_PASSWORD,
    "auth/network-request-failed": AUTH_ERRORS.INTERNER_FAILURE,
};
