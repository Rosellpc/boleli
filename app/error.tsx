"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        Error
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
        Algo salió mal
      </h1>

      <p className="mt-3 text-zinc-600">
        Ocurrió un problema inesperado. Inténtalo otra vez.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white"
      >
        Reintentar
      </button>
    </main>
  );
}