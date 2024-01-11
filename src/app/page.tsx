import HomeLogosSection from "@/components/home-logos-section";
import HomeServicesSection from "@/components/home-services-section";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <MainHeader />
      <MainHero />
      <HomeLogosSection />
      <HomeServicesSection />
      <section className="flackinjurylawresources py-10">
        <h2>Flack Injury Law Resources</h2>
        <p>
          The Flack Injury Blog contains information about personal injury law
          in Atlanta and the State of Georgia. We specialize in Truck Accidents,
          Slip and Falls, Medical Transport, and other cases throughout the City
          of Atlanta and state of Georgia.
        </p>
      </section>
    </main>
  );
}
