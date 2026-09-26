import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutGrid from "@/components/WorkoutGrid";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      <Navbar />

      {/* HERO */}

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">

        <div>

          <p className="mb-5 text-sm font-black tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/50">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today's plan, and watch
            the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-4 font-black text-black transition hover:scale-105"
          >
            BROWSE WORKOUTS
            <ArrowDown className="h-5 w-5" />
          </Link>

        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-black text-[#ccff00]">
                12
              </div>

              <div className="mt-2 font-bold tracking-[0.2em] text-white/40">
                LIFTS
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* LIBRARY */}

      <WorkoutGrid workouts={workouts} />

      <Footer />

    </main>
  );
}