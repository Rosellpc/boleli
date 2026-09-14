import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="glass-panel w-full rounded-[32px] p-6 md:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Nuevos lanzamientos
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-zinc-900 md:text-6xl lg:text-7xl">
            Boleli
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-700 md:text-lg">
            Tecnología elegante para la vida diaria.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/store"
              className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white">
              Tienda
            </Link>

            <Link href="/collection"
              className="mt-8 inline-flex border rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white">
               Colección
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[36px] bg-zinc-200/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/30 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <Image
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
              alt="Producto tecnológico premium"
              width={1200}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[420px] w-full object-cover md:h-[500px]"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/40 bg-white/35 p-4 backdrop-blur-md">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Editado para ti
              </p>

              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-zinc-900">
                    Aura Headphones
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">Audio premium</p>
                </div>

                <span className="rounded-full bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white">
                  $249
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};