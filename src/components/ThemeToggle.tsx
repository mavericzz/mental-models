import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const themeOrder = ["system", "light", "dark"] as const;

const themeIcons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

const themeLabels = {
  system: "System theme",
  light: "Light theme",
  dark: "Dark theme",
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const Icon = themeIcons[theme];

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "inline-flex items-center justify-center",
        "h-9 w-9 rounded-full",
        "bg-zinc-100/80 dark:bg-zinc-800/80",
        "text-zinc-600 dark:text-zinc-400",
        "hover:bg-violet-100 hover:text-violet-600",
        "dark:hover:bg-violet-900/30 dark:hover:text-violet-400",
        "transition-all duration-300",
        "cursor-pointer",
        "backdrop-blur-sm"
      )}
      aria-label={themeLabels[theme]}
      title={themeLabels[theme]}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
