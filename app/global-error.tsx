"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#f5f5f3] text-zinc-900">
        <main className="mx-auto max-w-xl px-4 py-20 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Error crítico
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
            La app falló
          </h1>

          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white"
          >
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}