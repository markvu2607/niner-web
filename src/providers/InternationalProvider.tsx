import { NextIntlClientProvider, useMessages } from "next-intl";

export function InternationalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
