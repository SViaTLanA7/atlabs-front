// src/lib/history.ts
export type HistoryItem = {
    id: string;
    createdAt: number;
    input: { text: string; files: { name: string; size?: number }[] };
    output: { title: string; steps: string[]; note?: string };
    tokensSpent: number;
    status: "done" | "error";
};

const KEY = "sf_history";

function safeParse<T>(s: string | null): T[] {
    if (!s) return [];
    try {
        const v = JSON.parse(s);
        return Array.isArray(v) ? v : [];
    } catch {
        return [];
    }
}

export function historyList(): HistoryItem[] {
    if (typeof window === "undefined") return [];
    return safeParse<HistoryItem>(localStorage.getItem(KEY));
}

export function historyAdd(item: HistoryItem) {
    if (typeof window === "undefined") return;
    const list = historyList();
    list.unshift(item); // новое — вверх
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 500)));
}

export function historyClear() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
}
