"use client";

import Link from "next/link";
import {
  Clock,
  Flame,
  Star,
} from "lucide-react";

import { Workout } from "@/types/workout";

interface Props {
  workout: Workout;
}

function getCategory(category: Workout["category"]) {
  if (Array.isArray(category)) {
    return category;
  }

  return category ? [category] : [];
}

export default function WorkoutCard({
  workout,
}: Props) {
  const categories = getCategory(workout.category);

  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition hover:-translate-y-1 hover:border-[#ccff00]/50"
    >

      <div className="aspect-\[4/3]\ overflow-hidden bg-white/5">

        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-white/20">
            NO IMAGE
          </div>
        )}

      </div>

      <div className="p-5">

        <div className="mb-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase text-black"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-black uppercase">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-white/50">
          {Array.isArray(workout.equipment)
            ? workout.equipment.join(", ")
            : workout.equipment || "No equipment"}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-white/60">

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
    </Link>
  );
}