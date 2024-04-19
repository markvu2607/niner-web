import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "vi"],
  localePrefix: "never",
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
