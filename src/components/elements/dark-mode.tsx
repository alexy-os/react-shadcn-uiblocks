import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/lib/settings";

declare global {
  interface Window {
    __INITIAL_THEME__?: "dark" | "light";
  }
}

export function DarkMode() {
  const { getSetting, setSetting } = useSettings();
  const [mounted, setMounted] = React.useState(false);
  
  // Определяем текущую тему
  const theme = getSetting('theme', window.__INITIAL_THEME__);
  const isDark = theme === 'dark';
  
  // Обработчик переключения темы
  const toggleDarkMode = React.useCallback(() => {
    const newTheme = isDark ? 'light' : 'dark';
    setSetting('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  }, [isDark, setSetting]);

  // Устанавливаем mounted после первого рендера
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Избегаем гидратации
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}