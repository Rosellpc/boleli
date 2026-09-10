import { Description } from "./components/home/Description";
import { MainProducts } from "./components/home/MainProducts";
import { Hero } from "./components/home/Hero";

export default function Home() {
  console.log("Hola cara de bola")
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Description />
        <MainProducts />
      </main>
    </div>
  );
}
