import { NextResponse } from 'next/server';

export async function POST(req: Request){
    const { text, files } = await req.json().catch(()=>({text:'', files:[]}));
    const now = Date.now();

    return NextResponse.json({
        id: `sol_${now}`,
        createdAt: now,
        input: { text, files: Array.isArray(files)?files:[] },
        output: {
            title: 'Пошаговое решение',
            steps: [
                '1) Привели условие к стандартной форме.',
                '2) Выполнили преобразования и упростили выражения.',
                '3) Посчитали промежуточные значения и проверили ограничения.',
                '4) Сформировали итоговый ответ и краткое пояснение.'
            ],
            note: 'Для итоговой проверки используйте оригинальные допущения/единицы из условия.'
        },
        tokensSpent: 5,
        status: 'done'
    });
}
