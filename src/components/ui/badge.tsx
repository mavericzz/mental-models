import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeVariant = "default" | "secondary" | "outline" | "success" | "warning";

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400",
  secondary:
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  outline:
    "border border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
  success:
    "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
  warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        "transition-colors duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
