import { ReactNode } from "react";
import { Box } from "lucide-react";

export type BaseNavigationItem = {
  path: string;
  label: string;
  primary?: boolean;
};

export type NavItem = BaseNavigationItem & {
  className?: string;
};

export type ActionItem = BaseNavigationItem & {
  icon?: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  hideOnMobile?: boolean;
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    path: "/docs",
    label: "Documentation",
    className: "transition-colors hover:text-foreground/80",
  },
  {
    path: "/components",
    label: "Components",
    className: "transition-colors hover:text-foreground/80",
  },
];

export const ACTION_ITEMS: ActionItem[] = [
  {
    path: "https://ui.pro.hinddy.com/",
    label: "BuildY/UI Pro",
    size: "sm",
    variant: "default",
    className: "hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90 transition-colors rounded-lg",
    icon: <Box className="w-4 h-4 stroke-1" />
  },
]; 