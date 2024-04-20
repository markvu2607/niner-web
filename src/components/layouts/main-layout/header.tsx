import { ModeToggle } from "@/components/common/mode-toggle";
import { MainNav } from "@/components/layouts/main-layout/main-nav";
import { Search } from "@/components/layouts/main-layout/search";
import { UserNav } from "@/components/layouts/main-layout/user-nav";

export function Header() {
  return (
    <header className="border-b fixed top-0 left-0 right-0 z-1 bg-background">
      <div className="flex h-16 items-center mx-auto px-4 max-w-[1200px]">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
