import Link from "next/link";
import { Hero } from "./components/home/Hero/Hero";
import { MainProducts } from "./components/home/MainProducts";
import { Description } from "./components/home/Description";
import { products } from "../data/products";

const promos = [
  {
    id: 1,
    title: "Black Friday edit",
    description: "Hasta 30% de descuento en accesorios premium.",
    badge: "Hot deal",
    href: "/store",
  },
  {
    id: 2,
    title: "Lanzamiento 2026",
    description: "Nuevos audio y wearables para tu rutina diaria.",
    badge: "New",
    href: "/collection",
  },
  {
    id: 3,
    title: "Envíos gratis",
    description: "En compras mayores a $200. Aprovecha antes de terminar el mes.",
    badge: "Free ship",
    href: "/store",
  },
];

export default function Home() {
  return (
    <main className=" mx-auto max-w-6xl px-4 pb-20 pt-6">
      <Hero />
      <Description />

      <section className="mt-16">
        <div className="mb-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Promociones
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-zinc-900">
            Descubre ofertas del momento
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {promos.map((promo) => (
            <Link
              key={promo.id}
              href={promo.href}
              className="soft-card group rounded-[28px] p-5 transition duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-700">
                {promo.badge}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-900">
                {promo.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {promo.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-medium text-zinc-900">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Colección
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-zinc-900">
              Todo lo que estamos recomendando
            </h2>
          </div>

          <Link
            href="/store"
            className="hidden rounded-full border border-zinc-200 bg-white/35 px-4 py-2 text-sm font-medium text-zinc-800 md:inline-flex"
          >
            Ver más
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <MainProducts key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}