import { Header } from "@/components/layouts/main-layout/header";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="pt-20">
      <Header />
      {children}
    </div>
  );
}
