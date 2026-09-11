// ...existing code...
import { Hero } from "./components/home/Hero/Hero";
import { MainProducts } from "./components/home/MainProducts";
import { products } from "../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-6">
      <Hero />

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Colección
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-zinc-900">
              Lo más destacado
            </h2>
          </div>

          <button className="hidden rounded-full border border-zinc-200 bg-white/35 px-4 py-2 text-sm font-medium text-zinc-800 md:inline-flex">
            Ver más
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <MainProducts key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}