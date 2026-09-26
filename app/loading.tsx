export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
      <div className="text-center">

        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="font-bold">
          Loading workouts…
        </p>

      </div>
    </main>
  );
}