import HomeBanner from "@/components/homepage/home-banner";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/homepage/main-hero";
import HomeLogosSection from "@/components/homepage/home-logos-section";
import HomeServicesSection from "@/components/homepage/home-services-section";
import MainFooter from "@/components/main-footer";
import HomeBlogSection from "@/components/homepage/home-blog-container";
import HomeTestimonialsSection from "@/components/homepage/home-testimonial-section";

export default function Home() {
  return (
    <main className="bg-zinc-50 max-w-6xl mx-auto">
      <MainHeader />
      <HomeBanner />
      <MainHero />
      <HomeLogosSection />
      <HomeServicesSection />
      <HomeBlogSection />
      <HomeTestimonialsSection />
      <MainFooter />
    </main>
  );
}
