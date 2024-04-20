import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/sign-up"];
const privateRoutes = ["/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken) {
    if (privateRoutes.some((route) => pathname === route)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (pathname === "/login" || pathname === "/sign-up") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
