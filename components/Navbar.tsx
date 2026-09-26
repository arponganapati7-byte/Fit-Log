"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitlog } from "@/context/FitlogContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useFitlog();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link
          href="/"
          className="flex items-center gap-2 font-black tracking-tight"
        >
          <Dumbbell className="h-6 w-6" />
          <span>FITLOG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-[#ccff00]"
                : "text-white/60 hover:text-white"
            }
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? "font-bold text-[#ccff00]"
                : "text-white/60 hover:text-white"
            }
          >
            My Plan
          </Link>

        </div>

        <Link
          href="/my-plan"
          className="flex items-center gap-2"
        >
          <span className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black">
            Plan {plan.length}
          </span>

          <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-black">
            Saved {saved.length}
          </span>
        </Link>

      </nav>
    </header>
  );
}