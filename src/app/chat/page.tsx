// src/app/chat/page.tsx
"use client";
import { useState } from "react";

export default function ChatPage() {
    const [q, setQ] = useState("");
    const [out, setOut] = useState("");

    async function ask(e: React.FormEvent) {
        e.preventDefault();
        setOut("");
        const res = await fetch("/api/ask", {
            method: "POST",
            body: JSON.stringify({ q }),
            headers: { "Content-Type": "application/json" },
        });
        if (!res.ok || !res.body) {
            const t = await res.text();
            setOut("Error: " + t);
            return;
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            setOut((prev) => prev + decoder.decode(value));
        }
    }

    return (
        <section className="container-1160" style={{ padding: "24px 0" }}>
            <h1>Чат</h1>
            <form onSubmit={ask} style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr auto" }}>
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Спросить..." />
                <button className="btn-primary" type="submit">Отправить</button>
            </form>
            <pre style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>{out}</pre>
        </section>
    );
}
