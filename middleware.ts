import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const locales = ["tr", "en", "es"];
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "development-secret-change-me");

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (!hasLocale && !pathname.startsWith("/api") && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    return NextResponse.redirect(new URL(`/tr${pathname}`, req.url));
  }

  const adminMatch = pathname.match(/^\/(tr|en|es)\/admin/);
  if (adminMatch) {
    const token = req.cookies.get("hko_session")?.value;
    if (!token) return NextResponse.redirect(new URL(`/${adminMatch[1]}/login`, req.url));
    try {
      await jwtVerify(token, secret);
    } catch {
      return NextResponse.redirect(new URL(`/${adminMatch[1]}/login`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
