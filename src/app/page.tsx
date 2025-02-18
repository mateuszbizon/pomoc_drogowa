import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <main>
            <AboutSection />
            <ServicesSection />
        </main>
    </>
  );
}
