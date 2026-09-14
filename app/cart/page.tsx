"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-10">
      <header className="mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Cart
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
          Tu carrito
        </h1>
      </header>

      {items.length === 0 ? (
        <div className="rounded-[28px] border border-zinc-200 bg-white/40 p-10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Tu carrito está vacío
          </h2>
          <p className="mt-2 text-zinc-600">
            Descubre nuestra colección y añade productos.
          </p>

          <Link
            href="/store"
            className="mt-6 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white"
          >
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex items-center gap-4 rounded-[24px] border border-zinc-200 bg-white/40 p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-[20px] object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-medium text-zinc-900">
                    {item.name}
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-8 w-8 rounded-full border border-zinc-200 bg-white text-zinc-900"
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center text-sm text-zinc-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-8 w-8 rounded-full border border-zinc-200 bg-white text-zinc-900"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-zinc-900">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-xs text-zinc-500 underline"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="rounded-[28px] border border-zinc-200 bg-white/40 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
            <h2 className="text-xl font-semibold text-zinc-900">Resumen</h2>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Impuestos</span>
                <span>$0</span>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-200 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-zinc-900">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white transition hover:bg-zinc-800"
            >
              Ir al checkout
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}