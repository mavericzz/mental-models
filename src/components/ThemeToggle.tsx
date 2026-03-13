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
        "bg-zinc-100 dark:bg-zinc-800",
        "text-zinc-600 dark:text-zinc-400",
        "hover:bg-zinc-200 dark:hover:bg-zinc-700",
        "transition-colors duration-200",
        "cursor-pointer"
      )}
      aria-label={themeLabels[theme]}
      title={themeLabels[theme]}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
