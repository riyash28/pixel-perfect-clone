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

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Shop Banner — product line-up with centered title */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3efe6] to-[#e8e1d2]">
        <div className="relative mx-auto flex h-[260px] max-w-[1600px] items-end justify-center px-2 sm:h-[320px] md:h-[380px] lg:h-[420px]">
          {/* Decorative leaves */}
          <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 -translate-x-6 -translate-y-2 opacity-30 md:h-48 md:w-48">
            <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
              <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-2 rotate-90 opacity-30 md:h-48 md:w-48">
            <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
              <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Product line-up — uniform height across all bottles */}
          <div className="relative flex h-full w-full items-end justify-center gap-1 sm:gap-2 md:gap-3">
            {bannerProducts.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Praanroot product ${i + 1}`}
                loading="lazy"
                className="h-[160px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-2 sm:h-[210px] md:h-[270px] lg:h-[320px]"
              />
            ))}
          </div>

          {/* Dark overlay + centered title */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/55">
            <div className="text-center">
              <h1 className="font-display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                Shop By Solutions
              </h1>
              <div className="mx-auto mt-4 h-[2px] w-24 bg-accent md:w-32" />
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
