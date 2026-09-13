import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/80 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Boleli
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-900">
            Diseño inteligente para cada día.
          </h3>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Navegación
          </p>

          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <Link href="/" className="block transition hover:text-zinc-900">
              Inicio
            </Link>
            <Link href="/store" className="block transition hover:text-zinc-900">
              Tienda
            </Link>
            <Link href="/cart" className="block transition hover:text-zinc-900">
              Carrito
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Soporte
          </p>

          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <Link href="/checkout" className="block transition hover:text-zinc-900">
              Checkout
            </Link>
            <Link href="/store" className="block transition hover:text-zinc-900">
              Envíos
            </Link>
            <Link href="/" className="block transition hover:text-zinc-900">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-zinc-500">
          <span>© 2026 Boleli</span>
          <span>Minimal technology</span>
        </div>
      </div>
    </footer>
  );
}