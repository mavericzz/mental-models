import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="noise-bg relative min-h-screen flex flex-col overflow-x-hidden perspective-container">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden preserve-3d" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-400/8 dark:bg-violet-600/5 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ transform: 'translateZ(-100px)' }} />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-orange-400/6 dark:bg-orange-500/4 blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s]" style={{ transform: 'translateZ(-50px)' }} />
        <div className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-300/6 dark:bg-violet-500/3 blur-3xl animate-[pulse_12s_ease-in-out_infinite_4s]" style={{ transform: 'translateZ(-150px)' }} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col preserve-3d">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 animate-fade-in">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
