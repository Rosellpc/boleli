import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-20 text-center">
      <div className="rounded-[32px] border border-zinc-200 bg-white/40 p-10 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Pago cancelado
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
          La compra fue cancelada
        </h1>

        <p className="mt-4 text-zinc-600">
          No te preocupes, puedes intentar otra vez cuando quieras.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/checkout"
            className="inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Reintentar
          </Link>

          <Link
            href="/cart"
            className="inline-flex rounded-full border border-zinc-200 bg-white/50 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            Volver al carrito
          </Link>
        </div>
      </div>
    </main>
  );
}