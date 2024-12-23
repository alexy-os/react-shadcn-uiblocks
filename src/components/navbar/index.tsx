import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DarkMode } from "../elements/dark-mode";
import { MobileSheet } from "./mobile-sheet";
import { Brand } from "@/components/elements/brand";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS, ACTION_ITEMS } from "./config";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Blocks } from "@/blocks";

// Define proper types for the ListItem props
type ListItemProps = {
  title: string;
  href: string;
  description?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href">;

// Helper component for submenu items
const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, href, description, ...props }, ref) => {
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              href={href}
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              {description && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {description}
                </p>
              )}
            </a>
          </NavigationMenuLink>
        </li>
      );
    }

    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {description && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {description}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

// Desktop Navigation component
const DesktopNavigation = () => {
  const blocks = Blocks();
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          {NAVIGATION_ITEMS.map((item) => {
            const isComponents = item.path === "/components" && blocks.length > 0;
            
            return (
              <NavigationMenuItem key={item.path}>
                {isComponents ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {blocks.map((block) => (
                          <ListItem
                            key={block.path}
                            title={block.title}
                            href={block.path}
                            description={block.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link to={item.path} className={cn(navigationMenuTriggerStyle(), item.className)}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

// Main Navbar component
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-ato px-4 flex h-14 items-center">
        <div className="mr-4 flex">
          <Brand />
        </div>

        <DesktopNavigation />

        <div className="flex flex-1 items-center justify-end space-x-2">
          <DarkMode />
          <div className="flex items-center md:hidden">
            <MobileSheet />
          </div>
          {ACTION_ITEMS.map((item) => (
            <Button
              key={item.path}
              size={item.size}
              variant={item.variant}
              className={item.className}
              asChild
            >
              <Link to={item.path}>
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
} 