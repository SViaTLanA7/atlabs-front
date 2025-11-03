// src/app/api/billing/portal/route.ts
import { NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";
import { stripe, appBaseUrl } from "../../../../lib/stripe";

export async function POST() {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user?.stripeCustomerId) return NextResponse.json({ error: "No customer" }, { status: 400 });

    const portal = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: `${appBaseUrl}/pricing`,
    });
    return NextResponse.json({ url: portal.url });
}
