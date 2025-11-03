// src/app/api/history/route.ts
import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

export async function GET() {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ items: [] });
    const items = await prisma.message.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: 100,
    });
    return NextResponse.json({ items });
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { role, content } = await req.json();
    const item = await prisma.message.create({
        data: { userId: session.user.id, role, content },
    });
    return NextResponse.json({ item });
}
