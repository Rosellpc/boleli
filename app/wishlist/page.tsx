"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/app/context/WishlistContext";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-10">
      <header className="mb-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Wishlist
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
          Mis productos guardados
        </h1>
      </header>

      {items.length === 0 ? (
        <div className="rounded-[28px] border border-zinc-200 bg-white/40 p-10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Aún no tienes favoritos
          </h2>
          <p className="mt-2 text-zinc-600">
            Guarda productos para verlos después.
          </p>

          <Link
            href="/store"
            className="mt-6 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white"
          >
            Explorar tienda
          </Link>
        </div>
      ) : (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white/40 p-3"
            >
              <Link href={`/product/${product.id}`}>
                <div className="overflow-hidden rounded-[22px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={900}
                    className="h-72 w-full rounded-[22px] object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-zinc-900">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-zinc-700">
                    ${product.price}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-600">{product.category}</p>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 rounded-full bg-zinc-950 px-4 py-2 text-center text-sm font-medium !text-white"
                  >
                    Ver
                  </Link>

                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm font-medium text-zinc-900"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}