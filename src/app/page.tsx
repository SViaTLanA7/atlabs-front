export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
            <section className="max-w-xl text-center p-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">AtLabs — AI ассистент</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Решай задачи, пиши работы и готовься к экзаменам — всё в одном месте.
                </p>
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Начать
                </button>
            </section>
        </main>
    );
}
