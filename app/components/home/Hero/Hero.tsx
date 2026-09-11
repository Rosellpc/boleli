export const Hero = () => {
  return (
    <section className="glass-panel w-full rounded-[32px] p-8 md:p-10">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        Nuevos lanzamientos
      </p>

      <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-zinc-900 md:text-7xl">
        Boleli
      </h1>

      <p className="mt-4 max-w-xl text-base leading-7 text-zinc-700 md:text-lg">
        Descubre prendas y accesorios con estilo premium para cada día.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
          Ver colección
        </button>

        <button className="rounded-full border border-zinc-200 bg-white/40 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white/60">
          Ver lookbook
        </button>
      </div>
    </section>
  );
};