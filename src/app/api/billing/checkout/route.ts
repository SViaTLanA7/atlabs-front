// src/app/api/billing/checkout/route.ts
import { NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";
import { stripe, appBaseUrl } from "../../../../lib/stripe";
import { Plan } from "@prisma/client";

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { plan } = await req.json();
    const normalized = (String(plan || "STUDENT").toUpperCase() as Plan) ?? "STUDENT";
    if (!["STUDENT", "PRO"].includes(normalized)) {
        return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
    }

    let user = await prisma.user.findUnique({ where: { id: session.user.id } });

    // гарантируем наличие customer
    if (!user?.stripeCustomerId) {
        const customer = await stripe.customers.create({
            email: user?.email || undefined,
            name: user?.name || undefined,
            metadata: { userId: session.user.id },
        });
        user = await prisma.user.update({
            where: { id: session.user.id },
            data: { stripeCustomerId: customer.id },
        });
    }

    const priceId =
        normalized === "PRO"
            ? process.env.STRIPE_PRICE_PRO
            : process.env.STRIPE_PRICE_STUDENT;

    if (!priceId) {
        return NextResponse.json({ error: "Stripe price not configured" }, { status: 500 });
    }

    const checkout = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer: user!.stripeCustomerId!,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${appBaseUrl}/pricing?success=1`,
        cancel_url: `${appBaseUrl}/pricing?canceled=1`,
        metadata: { userId: session.user.id, plan: normalized },
    });

    return NextResponse.json({ url: checkout.url });
}
