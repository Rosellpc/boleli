import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function CollectionPage() {
  const categories = [
    "audio",
    "computing",
    "wearables",
    "peripherals",
    "home-tech",
    "accessories",
  ];

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

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category}
            className="soft-card rounded-[24px] px-5 py-4 text-center"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Categoria
            </p>
            <h2 className="mt-3 text-xl font-semibold capitalize text-zinc-900">
              {category}
            </h2>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
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
    </main>
  );
}