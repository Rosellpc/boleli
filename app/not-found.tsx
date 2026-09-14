import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        404
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
        Página no encontrada
      </h1>

      <p className="mt-3 text-zinc-600">
        La página que buscas no existe o fue movida.
      </p>

      <Link
        href="/store"
        className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white"
      >
        Volver a la tienda
      </Link>
    </main>
  );
}