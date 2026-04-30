import p1 from "@/assets/shop-banner/new1.png";
import p2 from "@/assets/shop-banner/new2.png";
import p3 from "@/assets/shop-banner/new3.png";
import p4 from "@/assets/shop-banner/new4.png";
import p5 from "@/assets/shop-banner/new5.png";
import p6 from "@/assets/products/product-7.jpg";

// 6 products, with middle two slightly larger for depth emphasis
const products = [
  { src: p1, scale: 0.88, delay: 0 },
  { src: p2, scale: 0.95, delay: 80 },
  { src: p3, scale: 1.05, delay: 160 },
  { src: p4, scale: 1.05, delay: 240 },
  { src: p5, scale: 0.95, delay: 320 },
  { src: p6, scale: 0.88, delay: 400 },
];

const ShopBySolutionsBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3efe6] to-[#e8e1d2]">
      <div className="relative mx-auto flex h-[280px] max-w-[1600px] items-end justify-center px-2 sm:h-[340px] md:h-[400px] lg:h-[440px]">
        {/* Decorative leaves */}
        <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 -translate-x-6 -translate-y-2 opacity-25 md:h-48 md:w-48">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
            <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-2 rotate-90 opacity-25 md:h-48 md:w-48">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full text-primary">
            <path d="M20 180 Q 60 120 50 60 Q 90 100 130 70 Q 110 130 60 160 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Product line-up */}
        <div className="relative flex h-full w-full items-end justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {products.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={`Praanroot product ${i + 1}`}
              loading="eager"
              style={{
                height: `${p.scale * 88}%`,
                animationDelay: `${p.delay}ms`,
              }}
              className="shop-banner-bottle w-auto max-w-[15%] object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-2"
            />
          ))}
        </div>

        {/* Dark overlay + centered title */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-black/45 to-black/55">
          <div className="text-center">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-white/70 md:text-sm">
              Praanroot
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Shop By Solutions
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-24 bg-accent md:w-32" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shopBannerRise {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shopBannerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .shop-banner-bottle {
          opacity: 0;
          animation:
            shopBannerRise 0.9s ease-out forwards,
            shopBannerFloat 6s ease-in-out infinite;
          animation-delay: inherit, calc(1s + var(--float-delay, 0ms));
        }
      `}</style>
    </section>
  );
};

export default ShopBySolutionsBanner;