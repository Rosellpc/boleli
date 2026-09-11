import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type MainProductsProps = {
  product: Product;
};

export function MainProducts({ product }: MainProductsProps) {
  return (
    <article className="soft-card group overflow-hidden rounded-[28px] p-3 transition duration-300 hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[22px]">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={900}
            className="h-72 w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-105"
            priority={false}
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-700 backdrop-blur-sm">
            {product.tag}
          </span>
        </div>

        <div className="px-2 pb-2 pt-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-medium text-zinc-900">{product.name}</h3>
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
  );
}