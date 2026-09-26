"use client";

import { useMemo, useState } from "react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface Props {
  workouts: Workout[];
}

export default function WorkoutGrid({
  workouts,
}: Props) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const copy = [...workouts];

    copy.sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration || 0) - Number(b.duration || 0);
      }

      if (sortBy === "calories") {
        return Number(b.calories || 0) - Number(a.calories || 0);
      }

      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0);
      }

      return 0;
    });

    return copy;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-5 py-20"
    >

      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>
          <p className="mb-2 text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none"
        >
          <option value="duration">
            Sort By: Duration
          </option>

          <option value="calories">
            Sort By: Calories
          </option>

          <option value="rating">
            Sort By: Rating
          </option>
        </select>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>

    </section>
  );
}