import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brand } from "@/components/elements/brand";
import { NAVIGATION_ITEMS, ACTION_ITEMS } from "./config";
import { Blocks } from "@/blocks";
import { cn } from "@/lib/utils";

export function MobileSheet() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const blocks = Blocks();

  const handleNavigation = React.useCallback((path: string) => {
    setOpen(false);
    navigate(path);
  }, [navigate]);

  const MemoizedContent = React.memo(() => (
    <SheetContent 
      side="left" 
      className="w-[300px] sm:w-[400px] overflow-y-auto"
    >
      <div className="mb-6">
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => {
            handleNavigation('/');
          }}
        >
          <Brand />
        </Button>
      </div>
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <SheetDescription className="sr-only">
        Main navigation for mobile devices
      </SheetDescription>
      <nav className="flex flex-col">
        <Accordion type="single" collapsible className="w-full">
          {NAVIGATION_ITEMS.map((item) => {
            const isComponents = item.path === "/components" && blocks.length > 0;
            
            return isComponents ? (
              <AccordionItem key={item.path} value={item.path}>
                <AccordionTrigger className="text-sm">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {blocks.map((block) => (
                      <Button
                        key={block.path}
                        variant="ghost"
                        className="justify-start w-full text-sm"
                        onClick={() => handleNavigation(block.path)}
                      >
                        {block.title}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Button
                key={item.path}
                variant="ghost"
                className="justify-start w-full text-sm"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            );
          })}
        </Accordion>
        
        <div className="mt-4 flex flex-col space-y-2">
          {ACTION_ITEMS.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button
                key={item.path}
                variant={item.variant || "outline"}
                size={item.size}
                className={cn("justify-start w-full", !item.hideOnMobile && "flex")}
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
    </SheetContent>
  ));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <MemoizedContent />
    </Sheet>
  );
}

export default React.memo(MobileSheet); 