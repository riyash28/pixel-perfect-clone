import { useEffect, useState } from "react";
import heroBannerMen from "@/assets/hero-banner-men.png";
import heroBannerWomen from "@/assets/hero-banner-women.png";
import heroBannerOriginal from "@/assets/hero-banner.jpg";

const slides = [
  {
    src: heroBannerMen,
    alt: "Ayurvedic Care for Men's Health & Vitality - Praanroot",
  },
  {
    src: heroBannerWomen,
    alt: "Ayurvedic Care for Women's Health - Praanroot",
  },
  {
    src: heroBannerOriginal,
    alt: "Premium Ayurvedic Health Brand - Praanroot",
  },
];

const AUTOPLAY_MS = 5000;

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "2172 / 724" }}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover transition-transform ease-out ${
                isActive ? "scale-105 duration-[6000ms]" : "scale-100 duration-700"
              }`}
            />
          </div>
        );
      })}

      {/* Floating leaf particles */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute block h-2 w-2 rounded-full bg-primary/20 animate-pulse"
            style={{
              left: `${(i * 17 + 8) % 100}%`,
              top: `${(i * 23 + 12) % 90}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active
                ? "w-8 bg-primary"
                : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
