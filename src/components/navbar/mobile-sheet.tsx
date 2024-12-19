import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Brand } from "@/components/elements/brand";
import { NAVIGATION_ITEMS } from "./config";

type NavigationButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  primary?: boolean;
};

const NavigationButton = React.memo(function NavigationButton({ 
  onClick, 
  children, 
  primary 
}: NavigationButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        text-sm px-2 py-1 text-left w-full transition-colors
        hover:text-primary
        ${primary ? "font-semibold flex items-center gap-2 ms-2 text-primary" : ""}
      `}
    >
      {children}
    </button>
  );
});

const MemoizedSheetContent = React.memo(function MemoizedSheetContent({
  handleNavigation,
  currentPath,
  onBrandClick
}: {
  handleNavigation: (path: string) => void;
  currentPath: string;
  onBrandClick: () => void;
}) {
  return (
    <SheetContent 
      side="left" 
      className="w-[300px] sm:w-[400px] p-6"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <SheetDescription className="sr-only">
        Main navigation for mobile devices
      </SheetDescription>
      <div className="flex mb-6" onClick={onBrandClick}>
        <Brand />
      </div>
      <nav className="flex flex-col gap-4">
        {NAVIGATION_ITEMS.map(({ path, label, primary }) => (
          <NavigationButton
            key={path}
            onClick={() => handleNavigation(path)}
            primary={currentPath === path || primary}
          >
            {label}
          </NavigationButton>
        ))}
      </nav>
    </SheetContent>
  );
});

export function MobileSheet() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = React.useRef(location.pathname);

  const handleNavigation = React.useCallback((path: string) => {
    if (location.pathname !== path) {
      setOpen(false);
      navigate(path);
      previousPath.current = path;
    } else {
      setOpen(false);
    }
  }, [navigate, location.pathname]);

  const handleBrandClick = React.useCallback(() => {
    setOpen(false);
    navigate('/');
  }, [navigate]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <MemoizedSheetContent 
        handleNavigation={handleNavigation} 
        currentPath={location.pathname}
        onBrandClick={handleBrandClick}
      />
    </Sheet>
  );
}

export default React.memo(MobileSheet); 