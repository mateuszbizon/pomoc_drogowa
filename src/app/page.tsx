import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import ServicesSection from "@/components/ServicesSection";
import WhyusSection from "@/components/WhyusSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <main>
            <AboutSection />
            <ServicesSection />
            <WhyusSection />
            <PhotoGallerySection />
        </main>
    </>
  );
}
