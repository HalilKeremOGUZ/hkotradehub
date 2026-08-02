import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@hkotradehub.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeThisStrongPassword123!";
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { name: "HKO Administrator", email, password: await bcrypt.hash(password, 12), role: Role.ADMIN }
  });
  console.log(`Admin ready: ${email}`);
}

main().finally(() => prisma.$disconnect());
