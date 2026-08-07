import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const locales = ["tr", "en", "es"];
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "development-secret-change-me");

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (req.nextUrl.hostname === "hkotradehub.com") {
    const canonicalUrl = req.nextUrl.clone();
    canonicalUrl.hostname = "www.hkotradehub.com";
    canonicalUrl.protocol = "https:";
    return NextResponse.redirect(canonicalUrl, 308);
  }
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (!hasLocale && !pathname.startsWith("/api") && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    const savedLocale = req.cookies.get("hko_language")?.value;
    const locale = savedLocale && locales.includes(savedLocale) ? savedLocale : "tr";
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
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

  const requestHeaders = new Headers(req.headers);
  const locale = pathname.match(/^\/(tr|en|es)(?:\/|$)/)?.[1] || "tr";
  requestHeaders.set("x-hko-locale", locale);
  requestHeaders.set("x-hko-path", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
