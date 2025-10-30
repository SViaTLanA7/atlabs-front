// src/app/dashboard/page.tsx
export default function DashboardPage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Личный кабинет</h1>
            <p className="mb-6">Вы успешно вошли.</p>

            <form action="/api/logout" method="POST">
                <button className="rounded bg-black text-white px-4 py-2">
                    Выйти
                </button>
            </form>
        </main>
    );
}
