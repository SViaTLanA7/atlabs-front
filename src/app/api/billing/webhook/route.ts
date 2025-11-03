// src/app/api/billing/webhook/route.ts
import { NextResponse } from "next/server";
import { stripe } from "../../../../lib/stripe";
import { prisma } from "../../../../lib/prisma";
import { Plan } from "@prisma/client";

export const runtime = "nodejs";

export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature");
    const rawBody = await req.text();

    let event: any;
    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            sig!,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as any;
            const userId = session.metadata?.userId as string | undefined;
            if (userId) {
                // выясняем план по priceId
                const line = session.display_items?.[0] ?? session.line_items?.data?.[0];
                // лучше хранить план в metadata в checkout
                const plan = (session.metadata?.plan as Plan) ?? "STUDENT";
                await prisma.subscription.upsert({
                    where: { userId },
                    create: {
                        userId,
                        plan,
                        active: true,
                        stripeSubscriptionId: session.subscription as string,
                        periodEnd: new Date(
                            (session.expires_at ? session.expires_at * 1000 : Date.now()) + 1000
                        ),
                    },
                    update: {
                        plan,
                        active: true,
                        stripeSubscriptionId: session.subscription as string,
                    },
                });
                // Выдать лимит по плану
                const tokensLimit = plan === "PRO" ? 200000 : 10000;
                await prisma.user.update({
                    where: { id: userId },
                    data: { plan },
                });
                await prisma.usage.upsert({
                    where: { userId },
                    create: { userId, tokensLimit, tokensUsed: 0 },
                    update: { tokensLimit },
                });
            }
            break;
        }
        case "customer.subscription.deleted": {
            const sub = event.data.object as any;
            const customerId = sub.customer as string;
            const user = await prisma.user.findFirst({
                where: { stripeCustomerId: customerId },
            });
            if (user) {
                await prisma.subscription.updateMany({
                    where: { userId: user.id },
                    data: { active: false },
                });
                await prisma.user.update({
                    where: { id: user.id },
                    data: { plan: "FREE" },
                });
                await prisma.usage.updateMany({
                    where: { userId: user.id },
                    data: { tokensLimit: 100 },
                });
            }
            break;
        }
        default:
            // no-op
            break;
    }

    return NextResponse.json({ received: true });
}
