import HomeLogosSection from "@/components/home-logos-section";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <MainHero />
      <HomeLogosSection />
    </main>
  );
}
