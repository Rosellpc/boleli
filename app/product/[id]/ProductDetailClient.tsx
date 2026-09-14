"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import type { Product } from "@/data/products";

export function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem, isSaved } = useWishlist();

  const saved = isSaved(product.id);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-10">
      <div className="mb-6">
        <Link
          href="/store"
          className="inline-flex rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
        >
          ← Volver a la tienda
        </Link>
      </div>

      <article className="grid gap-8 rounded-[32px] border border-zinc-200 bg-white/40 p-4 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-xl md:grid-cols-2 md:p-8">
        <div className="overflow-hidden rounded-[24px]">
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={1200}
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-semibold text-zinc-900">
              ${product.price}
            </span>

            {product.originalPrice && (
              <span className="text-lg text-zinc-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <span className="mt-4 inline-flex w-fit rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            {product.tag}
          </span>

          <p className="mt-6 text-base leading-7 text-zinc-700">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => addItem(product)}
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0"
            >
              Añadir al carrito
            </button>

            <button
              type="button"
              onClick={() =>
                saved ? removeItem(product.id) : addToWishlist(product)
              }
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                saved
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-zinc-200 bg-white/50 text-zinc-900 hover:bg-white"
              }`}
            >
              {saved ? "Guardado ✓" : "Guardar"}
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}