import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { bestSellers, combos } from "@/data/products";
import p1 from "@/assets/shop-banner/new1.png";
import p2 from "@/assets/shop-banner/new2.png";
import p3 from "@/assets/shop-banner/new3.png";
import p4 from "@/assets/shop-banner/new4.png";
import p5 from "@/assets/shop-banner/new5.png";
import p6 from "@/assets/shop-banner/new6.png";

// Order: keep Play High (p6) right after Yakripure (p5)
const bannerProducts = [p1, p2, p3, p4, p5, p6];

// Depth-curve scaling: center products larger, edges smaller
const getDepthScale = (i: number, total: number) => {
  const center = (total - 1) / 2;
  const distance = Math.abs(i - center);
  const maxDistance = center;
  // Scale from 1.0 (center) down to 0.8 (edge)
  return 1 - (distance / maxDistance) * 0.2;
};

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Shop Banner — product line-up with centered title */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3efe6] to-[#e8e1d2]">
        <div className="relative h-[200px] w-full">
          {/* Decorative leaves (very subtle) */}
          <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 -translate-x-3 -translate-y-1 opacity-20">
            <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
              <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 translate-x-3 -translate-y-1 rotate-90 opacity-20">
            <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
              <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Product strip — full-width, tightly overlapping, depth scaled */}
          <div className="absolute inset-0 flex items-end justify-between [filter:blur(0.4px)]">
            {bannerProducts.map((src, i) => {
              const scale = getDepthScale(i, bannerProducts.length);
              return (
                <img
                  key={i}
                  src={src}
                  alt={`Praanroot product ${i + 1}`}
                  loading="lazy"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "bottom center",
                    animationDelay: `${i * 80}ms`,
                  }}
                  className="h-[92%] w-[20%] -mx-[2%] object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,0.45)] animate-fade-in"
                />
              );
            })}
          </div>

          {/* Dark overlay + centered title */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="animate-scale-in text-center">
              <h1 className="font-display text-4xl font-bold tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
                Shop By Solutions
              </h1>
              <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-accent md:w-32" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold text-foreground">All Products</h1>
          <p className="mt-2 font-body text-base text-muted-foreground">
            Explore our complete range of plant-based nano supplements
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {[...bestSellers, ...combos].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
