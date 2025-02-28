import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import ServicesSection from "@/components/ServicesSection";
import WhyusSection from "@/components/WhyusSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyusSection />
        <PhotoGallerySection />
        <ContactSection />
        <Footer />
    </>
  );
}
