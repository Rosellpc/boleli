import Link from "next/link";

export default function CheckoutSuccessPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-20 pt-20 text-center">
            <div className="rounded-[32px] border border-zinc-200 bg-white/40 p-10 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
                <p className="text[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                    Pedido confirmado
                </p>

                <h1  className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">
                    Pago exitoso
                </h1>

                <p className="mt-4 text-zinc-600">
                   Checkout de prueba 
                </p>

                <Link href="/store"
                className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium !text-white">
                    Seguir comprando
                </Link>
            </div>
        </main>
    )
}