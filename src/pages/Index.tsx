import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerBar from "@/components/TickerBar";
import CategorySection from "@/components/CategorySection";
import InTheSpotlight from "@/components/InTheSpotlight";
import WhyWeAreDifferent from "@/components/WhyWeAreDifferent";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ImpactSection from "@/components/ImpactSection";
import ReelSection from "@/components/reels/ReelSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TickerBar />
      <CategorySection />
      <InTheSpotlight />
      <WhyWeAreDifferent />
      <FounderSection />
      <TestimonialsSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
