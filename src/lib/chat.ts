// src/lib/chat.ts
export type ChatRole = "user" | "assistant" | "system";
export type ChatMsg = {
    id: string;
    role: ChatRole;
    content: string;
    ts: number;
    files?: { name: string; size?: number }[];
};

const KEY = "sf_chat";

function parse<T>(raw: string | null): T[] {
    if (!raw) return [];
    try {
        const v = JSON.parse(raw);
        return Array.isArray(v) ? v : [];
    } catch {
        return [];
    }
}

export function chatList(): ChatMsg[] {
    if (typeof window === "undefined") return [];
    return parse<ChatMsg>(localStorage.getItem(KEY));
}

export function chatSave(list: ChatMsg[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(list.slice(-500)));
}

export function chatClear() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
}
