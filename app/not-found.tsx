import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-5 text-center text-white">

      <div>

        <p className="text-8xl font-black text-[#ccff00]">
          404
        </p>

        <h1 className="mt-5 text-4xl font-black uppercase">
          WORKOUT NOT FOUND
        </h1>

        <p className="mt-3 text-white/50">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-black text-black"
        >
          BACK TO FITLOG
        </Link>

      </div>

    </main>
  );
}