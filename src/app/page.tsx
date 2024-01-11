import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <MainHero />
      <section className="logos">
        <div className="flex flex-wrap justify-between bg-slate-900 max-w-6xl mx-auto py-20 text-white">
          <p>Image 1</p>
          <p>Image 2</p>
          <p>Image 3</p>
        </div>
      </section>
    </main>
  );
}
