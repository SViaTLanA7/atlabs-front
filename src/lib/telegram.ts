// безопасный доступ к Telegram WebApp только на клиенте
export function getTelegramWebApp() {
    if (typeof window === 'undefined') return null;
    // @ts-expect-error: Telegram может отсутствовать вне мини-аппа
    return window?.Telegram?.WebApp ?? null;
}
