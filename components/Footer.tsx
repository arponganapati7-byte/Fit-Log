import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">

        <div className="flex items-center gap-2 font-black">
          <Dumbbell className="h-5 w-5" />
          FITLOG
        </div>

        <p className="text-center text-sm text-white/50">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}