"use client";

import { ReactNode } from "react";
import { FitlogProvider } from "@/context/FitlogContext";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <FitlogProvider>
      {children}
    </FitlogProvider>
  );
}