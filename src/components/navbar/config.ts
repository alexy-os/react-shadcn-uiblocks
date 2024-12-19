import { ReactNode } from "react";

export type BaseNavigationItem = {
  path: string;
  label: string;
  primary?: boolean;
};

export type NavItem = BaseNavigationItem & {
  className?: string;
};

export type ActionItem = BaseNavigationItem & {
  icon?: () => ReactNode;
  variant?: "default" | "outline" | "ghost";
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
    path: "https://github.com/alexy-os/react-shadcn-uiblocks",
    label: "GitHub",
    variant: "outline",
    className: "hidden md:flex",
  },
]; 