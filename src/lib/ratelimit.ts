// src/lib/ratelimit.ts
// Универсальный рейт-лимит: Upstash Redis (если настроен) или in-memory (fallback)
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Result = { success: boolean; remaining: number; reset: number };

let limiter:
    | { limit: (key: string) => Promise<Result> }
    | undefined;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    const rl = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(30, "1 m"), // 30 req / min на анонимов
        analytics: true,
    });
    limiter = {
        limit: async (key: string) => {
            const res = await rl.limit(key);
            return { success: res.success, remaining: res.remaining, reset: res.reset };
        },
    };
} else {
    // простая in-memory реализация (перезапускается при деплое)
    const store = new Map<string, { count: number; reset: number }>();
    const WINDOW = 60_000;
    const MAX = 30;
    limiter = {
        async limit(key: string) {
            const now = Date.now();
            const item = store.get(key);
            if (!item || item.reset < now) {
                store.set(key, { count: 1, reset: now + WINDOW });
                return { success: true, remaining: MAX - 1, reset: now + WINDOW };
            }
            if (item.count >= MAX) return { success: false, remaining: 0, reset: item.reset };
            item.count++;
            return { success: true, remaining: MAX - item.count, reset: item.reset };
        },
    };
}

export const rateLimit = limiter!;
