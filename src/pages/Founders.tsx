import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Founders = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About
        </Link>
      </div>
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Founders;