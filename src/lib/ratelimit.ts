// src/lib/ratelimit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Если переменных нет — даём in-memory фоллбэк (чтобы не падало на билде)
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export const ratelimit =
    REDIS_URL && REDIS_TOKEN
        ? new Ratelimit({
            redis: new Redis({ url: REDIS_URL, token: REDIS_TOKEN }),
            limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 запросов в минуту
            analytics: true,
        })
        : {
            // очень простой локальный лимитер для dev
            _bucket: new Map<string, number[]>(),
            async limit(key: string) {
                const now = Date.now();
                const windowMs = 60_000;
                const limit = 10;
                const arr = this._bucket.get(key) ?? [];
                const fresh = arr.filter((t) => now - t < windowMs);
                fresh.push(now);
                this._bucket.set(key, fresh);
                return { success: fresh.length <= limit };
            },
        };
