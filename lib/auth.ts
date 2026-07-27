import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "development-secret-change-me");
export async function createSession(payload: { sub: string; email: string; role: string }) {
  return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(secret);
}
export async function getSession() {
  const token = (await cookies()).get("hko_session")?.value;
  if (!token) return null;
  try { return (await jwtVerify(token, secret)).payload; } catch { return null; }
}
