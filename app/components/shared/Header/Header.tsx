"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.04em] text-zinc-900"
        >
          Boleli
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
          <Link href="/" className="transition hover:text-zinc-950">
            Inicio
          </Link>
          <Link href="/store" className="transition hover:text-zinc-950">
            Tienda
          </Link>
          <Link href="/collection" className="transition hover:text-zinc-950">
            Colección
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/collection"
            className="rounded-full border border-zinc-200 bg-white/35 px-3 py-2 text-sm text-zinc-800 transition hover:bg-white/55"
          >
            Explorar
          </Link>

          <Link
            href="/cart"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Carrito ({itemCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}