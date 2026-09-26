"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types/workout";

interface FitlogContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: string | number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeSaved: (id: string | number) => void;

  isInPlan: (id: string | number) => boolean;
  isSaved: (id: string | number) => boolean;

  markDone: (id: string | number) => void;
}

const FitlogContext = createContext<
  FitlogContextType | undefined
>(undefined);

export function FitlogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

  function addToPlan(workout: Workout) {
    if (plan.length >= 5) {
      return false;
    }

    const exists = plan.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (exists) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  }

  function removeFromPlan(id: string | number) {
    setPlan((current) =>
      current.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  }

  function saveWorkout(workout: Workout) {
    const exists = saved.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (exists) {
      return false;
    }

    setSaved((current) => [...current, workout]);

    return true;
  }

  function removeSaved(id: string | number) {
    setSaved((current) =>
      current.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  }

  function isInPlan(id: string | number) {
    return plan.some(
      (item) => String(item.id) === String(id)
    );
  }

  function isSaved(id: string | number) {
    return saved.some(
      (item) => String(item.id) === String(id)
    );
  }

  function markDone(id: string | number) {
    removeFromPlan(id);
  }

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        isInPlan,
        isSaved,
        markDone,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
}

export function useFitlog() {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "useFitlog must be used inside FitlogProvider"
    );
  }

  return context;
}