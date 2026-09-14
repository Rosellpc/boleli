"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3 4h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L19 7H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="17.5" r="1.2" fill="currentColor" />
      <circle cx="17" cy="17.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

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
          <Link
            href="/wishlist"
            className="rounded-full border border-zinc-200 bg-white/35 px-3 py-2 text-sm text-zinc-800 transition hover:bg-white/55">
            Favoritos
          </Link>
          <Link href="/cart" className="transition hover:text-zinc-950">
            Carrito
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
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium !text-white transition hover:bg-zinc-800"
          >
            <div className="relative">
              <CartIcon />
              {itemCount > 0 && (
                <span className=" absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold text-zinc-900 !color:white">
                  {itemCount}
                </span>
              )}
            </div>

            <span>Carrito</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}