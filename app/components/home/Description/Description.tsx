export const Description = () => {
  return (
    <section className="mt-20 rounded-[32px] border border-zinc-200 bg-white/40 p-6 shadow-[0_18px_60px_rgba(17,17,17,0.05)] backdrop-blur-xl md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Boleli
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-zinc-900 md:text-5xl">
            Tecnología elegante para la vida diaria.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
            Diseñamos productos tecnológicos con una estética sobria, funcional y
            premium. Cada pieza combina materiales refinados, detalles cuidados y
            una experiencia de uso moderna que encaja perfectamente en tu rutina.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[24px] border border-zinc-200 bg-white/50 p-4">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900">
              30+
            </p>
            <p className="mt-2 text-sm text-zinc-600">productos premium</p>
          </div>

          <div className="rounded-[24px] border border-zinc-200 bg-white/50 p-4">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900">
              4.9
            </p>
            <p className="mt-2 text-sm text-zinc-600">valoración de clientes</p>
          </div>

          <div className="rounded-[24px] border border-zinc-200 bg-white/50 p-4">
            <p className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900">
              24h
            </p>
            <p className="mt-2 text-sm text-zinc-600">envío express</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-zinc-200 bg-zinc-50/80 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Diseño
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            Formas limpias, acabados premium y una presencia visual minimalista.
          </p>
        </div>

        <div className="rounded-[24px] border border-zinc-200 bg-zinc-50/80 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Rendimiento
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            Tecnología de alto nivel pensada para un uso diario fluido y eficiente.
          </p>
        </div>

        <div className="rounded-[24px] border border-zinc-200 bg-zinc-50/80 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Experiencia
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            Una compra sencilla, clara y agradable, con atención enfocada al detalle.
          </p>
        </div>
      </div>
    </section>
  );
};