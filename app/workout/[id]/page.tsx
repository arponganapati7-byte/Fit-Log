"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";

import {
  ArrowLeft,
  Bookmark,
  Check,
  Plus,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getWorkout } from "@/lib/api";
import { Workout } from "@/types/workout";
import { useFitlog } from "@/context/FitlogContext";

export default function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 16:
  // params is a Promise, so unwrap it with React.use()
  const { id } = use(params);

  const [workout, setWorkout] =
    useState<Workout | null>(null);

  const [loading, setLoading] = useState(true);

  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitlog();

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadWorkout() {
      try {
        setLoading(true);

        const data = await getWorkout(id);

        setWorkout(data);
      } catch (error) {
        console.error(
          "Failed to load workout:",
          error
        );

        setWorkout(null);
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [id]);

  function showToast(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

          <p className="font-bold">
            Loading workout…
          </p>

        </div>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#080808] text-white">

        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center px-5 text-center">

          <div>

            <h1 className="text-5xl font-black uppercase">
              WORKOUT NOT FOUND
            </h1>

            <p className="mt-4 text-white/50">
              We couldn't find this workout.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 font-black text-black"
            >
              BACK TO LIBRARY
            </Link>

          </div>

        </section>

        <Footer />

      </main>
    );
  }

  const categories = Array.isArray(
    workout.category
  )
    ? workout.category
    : workout.category
      ? [workout.category]
      : [];

  const equipment = Array.isArray(
    workout.equipment
  )
    ? workout.equipment.join(", ")
    : workout.equipment || "None";

  function handlePlan() {
    const success = addToPlan(workout);

    if (success) {
      showToast("Added to today's plan");
    } else if (isInPlan(workout.id)) {
      showToast("Already in today's plan");
    } else {
      showToast(
        "Today's plan is full — maximum 5 workouts"
      );
    }
  }

  function handleSave() {
    const success = saveWorkout(workout);

    if (success) {
      showToast("Saved for later");
    } else {
      showToast("Already saved");
    }
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      <Navbar />

      {/* TOAST */}

      {message && (
        <div className="fixed right-5 top-24 z-[100] rounded-xl bg-[#ccff00] px-5 py-3 font-bold text-black shadow-2xl">
          {message}
        </div>
      )}

      <section className="mx-auto max-w-7xl px-5 py-12">

        {/* BACK BUTTON */}

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />

          Back to library
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ========================================
              LEFT — IMAGE
          ======================================== */}

          <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

            {workout.image ? (
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-white/20">
                NO IMAGE
              </div>
            )}

          </div>

          {/* ========================================
              RIGHT — DETAILS
          ======================================== */}

          <div>

            {/* CATEGORY */}

            <div className="mb-5 flex flex-wrap gap-2">

              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {category}
                </span>
              ))}

            </div>

            {/* TITLE */}

            <h1 className="text-5xl font-black uppercase leading-none md:text-7xl">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 text-lg leading-relaxed text-white/50">
              {workout.description ||
                "A powerful movement designed to build strength and improve performance."}
            </p>

            {/* ========================================
                SPECS
            ======================================== */}

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

              <Spec
                label="Equipment"
                value={equipment}
              />

              <Spec
                label="Difficulty"
                value={
                  workout.difficulty ||
                  "Intermediate"
                }
              />

              <Spec
                label="Sets"
                value={String(
                  workout.sets || 4
                )}
              />

              <Spec
                label="Reps"
                value={
                  workout.reps || "6-8"
                }
              />

              <Spec
                label="Duration"
                value={`${workout.duration || 0} min`}
              />

              <Spec
                label="Calories"
                value={`${workout.calories || 0} kcal`}
              />

              <Spec
                label="Rating"
                value={String(
                  workout.rating || 0
                )}
              />

            </div>

            {/* ========================================
                INSTRUCTIONS
            ======================================== */}

            <div className="mt-10">

              <h2 className="mb-5 text-xl font-black">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-4">

                {(workout.instructions || [
                  "Set up your equipment correctly.",
                  "Maintain proper posture throughout the movement.",
                  "Perform the movement with controlled tempo.",
                  "Return to the starting position and repeat.",
                ]).map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4"
                    >

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">
                        {index + 1}
                      </span>

                      <span className="pt-1 text-white/60">
                        {instruction}
                      </span>

                    </li>
                  )
                )}

              </ol>

            </div>

            {/* ========================================
                ACTION BUTTONS
            ======================================== */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              {/* ADD TO PLAN */}

              <button
                onClick={handlePlan}
                disabled={isInPlan(
                  workout.id
                )}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-5 py-4 font-black text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >

                {isInPlan(workout.id) ? (
                  <>
                    <Check className="h-5 w-5" />

                    IN TODAY'S PLAN
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5" />

                    ADD TO TODAY'S PLAN
                  </>
                )}

              </button>

              {/* SAVE */}

              <button
                onClick={handleSave}
                disabled={isSaved(
                  workout.id
                )}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-4 font-black transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
              >

                <Bookmark className="h-5 w-5" />

                {isSaved(workout.id)
                  ? "SAVED"
                  : "SAVE FOR LATER"}

              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}

/* ========================================
   SPEC COMPONENT
======================================== */

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#111] p-4">

      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
        {label}
      </div>

      <div className="mt-1 font-bold">
        {value}
      </div>

    </div>
  );
}