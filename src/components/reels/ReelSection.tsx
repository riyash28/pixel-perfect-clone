import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import ReelCard from "./ReelCard";
import ReelModal from "./ReelModal";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Reel {
  url: string;
  video: string;
  products: Product[];
}

const reels: Reel[] = [
  {
    url: "https://www.instagram.com/reel/DLHgXwmTTOE/",
    video: "https://cdn.pixabay.com/video/2023/10/17/185748-876342497_large.mp4",
    products: [{ id: 1, name: "Ritu Calm Bottle", price: "₹999", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&h=100&fit=crop" }],
  },
  {
    url: "https://www.instagram.com/reel/DRg6RBjk56H/",
    video: "https://cdn.pixabay.com/video/2024/03/08/203038-921392600_large.mp4",
    products: [{ id: 2, name: "Herbal Balance Pack", price: "₹1,499", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop" }],
  },
  {
    url: "https://www.instagram.com/reel/DWUbaz7EyEe/",
    video: "https://cdn.pixabay.com/video/2022/12/05/142316-777964595_large.mp4",
    products: [{ id: 3, name: "Hormone Support Kit", price: "₹1,999", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=100&h=100&fit=crop" }],
  },
  {
    url: "https://www.instagram.com/reel/DVK5avGk7zr/",
    video: "https://cdn.pixabay.com/video/2023/05/16/162760-827985692_large.mp4",
    products: [{ id: 4, name: "Ayurvedic Capsules", price: "₹799", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop" }],
  },
  {
    url: "https://www.instagram.com/reel/DP6er6ak2mA/",
    video: "https://cdn.pixabay.com/video/2023/06/06/166293-834702757_large.mp4",
    products: [{ id: 5, name: "Wellness Combo", price: "₹1,299", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop" }],
  },
  {
    url: "https://www.instagram.com/reel/DO3mVeqEnbp/",
    video: "https://cdn.pixabay.com/video/2023/08/05/174362-852038073_large.mp4",
    products: [{ id: 6, name: "Natural Relief Pack", price: "₹1,099", image: "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?w=100&h=100&fit=crop" }],
  },
];

const ReelSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReel, setActiveReel] = useState<Reel | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-background py-16 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Instagram size={22} className="text-accent" />
                <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent">
                  As Seen On Instagram
                </span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl">
                Shop Our Reels
              </h2>
            </div>

            {/* Desktop arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reels.map((reel, i) => (
              <ReelCard
                key={i}
                videoUrl={reel.video}
                onPlay={() => setActiveReel(reel)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeReel && (
        <ReelModal
          reelUrl={activeReel.url}
          products={activeReel.products}
          onClose={() => setActiveReel(null)}
        />
      )}
    </>
  );
};

export default ReelSection;
