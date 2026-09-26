"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowLeft,
  Check,
  Clock,
  Flame,
  Star,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutCard from "@/components/WorkoutCard";

import { useFitlog } from "@/context/FitlogContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markDone,
  } = useFitlog();

  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");

  const [message, setMessage] = useState("");

  const activeList =
    activeTab === "plan" ? plan : saved;

  const minutes = plan.reduce(
    (total, item) =>
      total + Number(item.duration || 0),
    0
  );

  const calories = plan.reduce(
    (total, item) =>
      total + Number(item.calories || 0),
    0
  );

  function toast(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      <Navbar />

      {message && (
        <div className="fixed right-5 top-24 z-50 rounded-xl bg-[#ccff00] px-5 py-3 font-bold text-black">
          {message}
        </div>
      )}

      <section className="mx-auto max-w-7xl px-5 py-16">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to workouts
        </Link>

        <div className="mb-10">

          <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
            YOUR WORKOUT LOG
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase md:text-7xl">
            MY PLAN
          </h1>

          <p className="mt-4 text-white/50">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>

        </div>

        {/* METRICS */}

        <div className="mb-10 grid gap-4 sm:grid-cols-3">

          <Metric
            label="Exercises"
            value={plan.length}
          />

          <Metric
            label="Minutes"
            value={minutes}
          />

          <Metric
            label="Calories"
            value={calories}
          />

        </div>

        {/* TABS */}

        <div className="mb-8 flex border-b border-white/10">

          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-4 font-bold ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-4 font-bold ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40"
            }`}
          >
            Saved
          </button>

        </div>

        {/* LIST */}

        {activeList.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-[#111] px-5 py-20 text-center">

            <h2 className="text-3xl font-black uppercase">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get
              today moving.
            </p>

            <Link
              href="/"
              className="mt-7 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-black text-black"
            >
              GO TO WORKOUTS
            </Link>

          </div>

        ) : (

          <div className="space-y-4">

            {activeList.map((workout) => (

              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111] p-4 md:flex-row md:items-center"
              >

                <div className="h-32 w-full overflow-hidden rounded-xl bg-black md:w-44">

                  {workout.image && (
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full w-full object-cover"
                    />
                  )}

                </div>

                <div className="flex-1">

                  <h2 className="text-2xl font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-sm text-white/40">
                    {Array.isArray(workout.equipment)
                      ? workout.equipment.join(", ")
                      : workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/50">

                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {workout.duration || 0} min
                    </span>

                    <span className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      {workout.calories || 0} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {workout.rating || 0}
                    </span>

                  </div>

                </div>

                <div className="flex flex-wrap gap-2">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => {
                        markDone(workout.id);
                        toast("Workout marked as done");
                      }}
                      className="flex items-center gap-1 rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-black text-black"
                    >
                      <Check className="h-4 w-4" />
                      Done
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(workout.id);
                      } else {
                        removeSaved(workout.id);
                      }

                      toast("Workout removed");
                    }}
                    className="rounded-lg border border-red-500/30 p-2 text-red-400"
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      <Footer />

    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-6">

      <p className="text-xs font-black tracking-widest text-white/40">
        {label}
      </p>

      <p className="mt-3 text-4xl font-black text-[#ccff00]">
        {value}
      </p>

    </div>
  );
}