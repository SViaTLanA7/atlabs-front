// prisma/seed.ts
import { PrismaClient, Plan } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // ничего особого — дефолтные планы в коде, тут просто sanity
    console.log("Seed complete (nothing to seed)");
}
main().finally(() => prisma.$disconnect());
