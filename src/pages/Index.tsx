import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhySection />
      <BenefitsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
