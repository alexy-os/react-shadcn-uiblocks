import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  fullHeight?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, fullHeight = false, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "bg-background text-foreground",
        fullHeight && "min-h-[calc(100vh-4rem-4rem)]",
        "py-12 sm:py-24 md:py-32",
        className
      )}
      {...props}
    />
  )
);
Section.displayName = "Section"; 