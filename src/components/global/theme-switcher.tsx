"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("system");

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const cycleTheme = () => {
    const nextTheme =
      currentTheme === "system"
        ? "dark"
        : currentTheme === "dark"
        ? "light"
        : "system";

    setTheme(nextTheme);
    setCurrentTheme(nextTheme);
  };

  const getThemeLabel = (themeName: string) => {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1) + " Theme";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={cycleTheme}>
            <Sun
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                currentTheme === "light"
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-0"
              }`}
            />
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                currentTheme === "dark"
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-0"
              }`}
            />
            <Laptop
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                currentTheme === "system"
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-0"
              }`}
            />
            <span className="sr-only">Current theme: {currentTheme}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{getThemeLabel(currentTheme)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
