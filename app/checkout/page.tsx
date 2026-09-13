import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-10">
      <div className="mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Checkout
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
          Finaliza tu compra
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[28px] border border-zinc-200 bg-white/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Información</h2>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre"
                className="rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
              />
              <input
                type="text"
                placeholder="Apellido"
                className="rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
              />
            </div>

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
            />

            <input
              type="text"
              placeholder="Dirección"
              className="w-full rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Ciudad"
                className="rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
              />
              <input
                type="text"
                placeholder="Código postal"
                className="rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Pagar con Stripe
            </button>
          </form>
        </section>

        <aside className="rounded-[28px] border border-zinc-200 bg-white/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Resumen del pedido</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>Aura Headphones</span>
              <span>$249</span>
            </div>
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>Orion Smartwatch</span>
              <span>$320</span>
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-200 pt-4">
            <div className="flex items-center justify-between text-lg font-semibold text-zinc-900">
              <span>Total</span>
              <span>$569</span>
            </div>
          </div>

          <Link
            href="/cart"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white/50 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            Volver al carrito
          </Link>
        </aside>
      </div>
    </main>
  );
}