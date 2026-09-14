"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/data/products";

const categories = [
  "all",
  "audio",
  "computing",
  "wearables",
  "peripherals",
  "home-tech",
  "accessories",
];

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;

    return products.filter(
      (product) =>
        product.category?.toLowerCase().replace(/\s+/g, "-") === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-10">
      <header className="mb-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Collection
        </p>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
            Curated essentials
          </h1>

          <Link
            href="/store"
            className="inline-flex w-fit rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-white"
          >
            Ver toda la tienda
          </Link>
        </div>
      </header>

      <section className="mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const label =
              category === "all"
                ? "Todas"
                : category.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white/50 text-zinc-800 hover:bg-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="soft-card group overflow-hidden rounded-[28px] p-3 transition duration-300 hover:-translate-y-1"
          >
            <Link href={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden rounded-[22px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={900}
                  className="h-72 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-700 backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>

              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-zinc-900">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-zinc-700">
                    ${product.price}
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
                  {product.description}
                </p>

                <button className="mt-4 w-full rounded-full border border-zinc-200 bg-white/50 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-white">
                  Ver producto
                </button>
              </div>
            </Link>
          </article>
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <div className="mt-8 rounded-[24px] border border-zinc-200 bg-white/40 p-8 text-center">
          <p className="text-zinc-600">No hay productos en esta categoría.</p>
        </div>
      )}
    </main>
  );
}