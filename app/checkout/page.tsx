"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const handleCheckout = async () => {
    if (!items.length) {
      alert("Tu carrito está vacío");
      return;
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Error al iniciar el pago");
      return;
    }

    clearCart();
    window.location.href = data.url;
  };

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

      {items.length === 0 ? (
        <div className="rounded-[28px] border border-zinc-200 bg-white/40 p-10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Tu carrito está vacío
          </h2>

          <p className="mt-2 text-zinc-600">
            Agrega productos antes de continuar con el checkout.
          </p>

          <Link
            href="/store"
            className="mt-6 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white"
          >
            Explorar tienda
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[28px] border border-zinc-200 bg-white/40 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
            <h2 className="text-xl font-semibold text-zinc-900">Información</h2>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
                />
              </div>

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
              />

              <input
                type="text"
                placeholder="Dirección"
                className="w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Código postal"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="flex-1 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Pagar
                </button>

                <Link
                  href="/cart"
                  className="rounded-full border border-zinc-200 bg-white/50 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
                >
                  Volver
                </Link>
              </div>
            </div>
          </section>

          <aside className="rounded-[28px] border border-zinc-200 bg-white/40 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
            <h2 className="text-xl font-semibold text-zinc-900">
              Resumen del pedido
            </h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm text-zinc-700"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-zinc-200 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-zinc-900">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>

            <Link
              href="/collection"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white/50 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
            >
              Seguir comprando
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}