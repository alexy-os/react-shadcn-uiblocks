import * as React from "react";
import { cn } from "@/lib/utils";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const COPYRIGHT = "Built with ❤️ by UI Blocks Team";

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t bg-background",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 flex h-16 items-center">
        <div className="flex flex-1 items-center justify-center sm:justify-end">
          <p className="text-sm text-muted-foreground">
            {COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  );
} 