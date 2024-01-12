import HomeBanner from "@/components/homepage/home-banner";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/homepage/main-hero";
import HomeLogosSection from "@/components/homepage/home-logos-section";
import HomeServicesSection from "@/components/homepage/home-services-section";
import HomeBlogPosts from "@/components/homepage/home-blog-container";
import HomeCarousel from "@/components/homepage/home-carousel";
import MainFooter from "@/components/main-footer";

export default function Home() {
  return (
    <main className="bg-zinc-50 max-w-6xl mx-auto">
      <MainHeader />
      <HomeBanner />
      <MainHero />
      <HomeLogosSection />
      <HomeServicesSection />
      <HomeBlogPosts />
      <HomeCarousel />
      <MainFooter />
    </main>
  );
}
