import HomeBlogPosts from "@/components/home-blog-posts";
import HomeLogosSection from "@/components/home-logos-section";
import HomeServicesSection from "@/components/home-services-section";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-50 max-w-6xl mx-auto">
      <MainHeader />
      <MainHero />
      <HomeLogosSection />
      <HomeServicesSection />
      <HomeBlogPosts />
    </main>
  );
}
