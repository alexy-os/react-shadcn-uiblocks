import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DarkMode } from "../elements/dark-mode";
import { MobileSheet } from "./mobile-sheet";
import { Brand } from "@/components/elements/brand";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS, ACTION_ITEMS } from "./config";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center">
        <div className="mr-4 flex">
          <Brand />
        </div>

        <nav className={cn("hidden md:flex items-center space-x-6 text-sm font-medium", className)}>
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={item.className}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <DarkMode />
            <div className="flex items-center md:hidden">
              <MobileSheet />
            </div>
            {ACTION_ITEMS.map((item) => (
              <Button
                key={item.path}
                variant={item.variant}
                className={item.className}
                asChild
              >
                <Link to={item.path}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 