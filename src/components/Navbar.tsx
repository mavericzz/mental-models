import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Brain, Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";
import { useProgressContext } from "../context/ProgressContext";
import { calculateLevel, xpProgress } from "../lib/xp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/profile", label: "Profile" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress } = useProgressContext();
  const level = calculateLevel(progress.totalXP);
  const progressPct = xpProgress(progress.totalXP);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-white/70 dark:bg-zinc-950/70",
        "backdrop-blur-xl",
        "border-b border-transparent",
        "shadow-[0_1px_0_0_rgba(124,58,237,0.15),0_4px_12px_-4px_rgba(124,58,237,0.08)] dark:shadow-[0_1px_0_0_rgba(167,139,250,0.15),0_4px_12px_-4px_rgba(167,139,250,0.08)]"
      )}
    >
      {/* Gradient border line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-lg font-bold text-zinc-900 dark:text-zinc-50 transition-all duration-300"
        >
          <div className="relative">
            <Brain className="h-7 w-7 text-violet-500 dark:text-violet-400 transition-all duration-500 group-hover:scale-110 group-hover:[transform:rotateY(360deg)] animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute inset-0 h-7 w-7 rounded-full bg-violet-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="transition-all duration-300 group-hover:gradient-text">
            Mental Models
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300 shadow-[0_0_12px_rgba(124,58,237,0.15)] dark:shadow-[0_0_12px_rgba(167,139,250,0.15)]"
                    : "text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-violet-400/10 dark:bg-violet-400/5 blur-sm" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* XP / Level indicator */}
          <div className="ml-3 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-orange-100 dark:from-violet-500/10 dark:to-orange-500/10 px-3 py-1.5 border border-violet-200/50 dark:border-violet-500/20">
            <Zap className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400" />
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-violet-700 dark:text-violet-300">
                Lv.{level}
              </span>
              <div className="h-1.5 w-12 rounded-full bg-violet-200/60 dark:bg-violet-900/40 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 tabular-nums">
                {progress.totalXP}xp
              </span>
            </div>
          </div>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          {/* Mobile XP badge */}
          <div className="flex items-center gap-1 rounded-full bg-violet-100 dark:bg-violet-500/10 px-2 py-1 border border-violet-200/50 dark:border-violet-500/20">
            <Zap className="h-3 w-3 text-orange-500" />
            <span className="text-[10px] font-bold text-violet-700 dark:text-violet-300">
              Lv.{level}
            </span>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={cn("transition-transform duration-300", mobileOpen && "rotate-90")}>
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 px-4 pb-4 pt-2 backdrop-blur-xl bg-white/50 dark:bg-zinc-950/50 space-y-1">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                  "animate-slide-up",
                  isActive
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300 shadow-[0_0_12px_rgba(124,58,237,0.1)]"
                    : "text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/60"
                )
              }
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
