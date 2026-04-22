import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import doctor1 from "@/assets/doctors/doctor-1.jpg";
import doctor2 from "@/assets/doctors/doctor-2.jpg";
import doctor3 from "@/assets/doctors/doctor-3.jpg";
import doctor4 from "@/assets/doctors/doctor-4.jpg";

const testimonials = [
  {
    name: "Dr. Shalini Patodiya",
    title: "Dermatologist & Holistic Wellness Expert",
    image: doctor1,
    quote:
      "ZeroHarm's comprehensive approach to holistic wellness is revolutionary. As an expert, I wholeheartedly endorse their dedication to nurturing health from within.",
  },
  {
    name: "Dr. Bharat Patodiya",
    title: "Consultant Medical Oncologist",
    image: doctor2,
    quote:
      "I've seen remarkable transformations with ZeroHarm's holistic care. Their commitment to overall well-being and natural health solutions is exemplary.",
  },
  {
    name: "Dr. Sudhakar Darbawar",
    title: "45 Years of Experience in Medical Field",
    image: doctor3,
    quote:
      "ZeroHarm's holistic vision reshapes health standards. I proudly support their integrative approach that empowers individuals towards sustained well-being.",
  },
  {
    name: "Dr. Snehal R Pansare",
    title: "Advisor-Obstetrician and Gynaecologist",
    image: doctor4,
    quote:
      "Having witnessed ZeroHarm's impact firsthand, I believe in their holistic methods for women's care. Their comprehensive approach fosters empowerment.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const len = testimonials.length;
  const mod = (n: number) => ((n % len) + len) % len;
  const next = () => setCurrent((c) => mod(c + 1));
  const prev = () => setCurrent((c) => mod(c - 1));

  // Reveal on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCurrent((c) => mod(c + 1));
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-card py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
        style={{ animation: "pulse 6s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
      />

      <div
        className={`relative mx-auto max-w-7xl px-4 text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          What Leading Industry Experts Say
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-primary/30" />

        {/* 3D-style center carousel */}
        <div className="relative mt-14 h-[460px] md:h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {testimonials.map((t, i) => {
              // Relative position: -1 left, 0 center, 1 right; others hidden
              let offset = i - current;
              if (offset > len / 2) offset -= len;
              if (offset < -len / 2) offset += len;

              const isCenter = offset === 0;
              const isSide = Math.abs(offset) === 1;
              const visibleSlide = isCenter || isSide;

              const translatePct = offset * 62; // % of container width
              const scale = isCenter ? 1 : isSide ? 0.78 : 0.6;
              const opacity = isCenter ? 1 : isSide ? 0.55 : 0;
              const zIndex = isCenter ? 30 : isSide ? 20 : 10;

              return (
                <div
                  key={i}
                  aria-hidden={!isCenter}
                  onClick={() => !isCenter && visibleSlide && setCurrent(i)}
                  className={`absolute top-1/2 left-1/2 w-[78%] max-w-[420px] md:w-[36%] md:max-w-[440px] transition-all duration-700 ease-in-out ${
                    !isCenter && visibleSlide ? "cursor-pointer" : ""
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translatePct}%) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: visibleSlide ? "auto" : "none",
                  }}
                >
                  <div className="group relative overflow-hidden rounded-3xl bg-background shadow-xl ring-1 ring-foreground/5 transition-all duration-500 hover:shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle bottom gradient for legibility */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Specialization pill */}
                    <div className="absolute left-1/2 top-[58%] z-10 -translate-x-1/2">
                      <span className="inline-block whitespace-nowrap rounded-full bg-accent px-4 py-1 font-body text-[11px] font-medium text-accent-foreground shadow-md md:text-xs">
                        {t.title}
                      </span>
                    </div>

                    {/* Name card */}
                    <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
                      <div className="flex items-center gap-2 rounded-2xl bg-background px-5 py-3 shadow-lg ring-1 ring-foreground/5">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span className="font-display text-base font-semibold text-foreground md:text-lg">
                          {t.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons (bottom-right, like reference) */}
          <div className="absolute bottom-2 right-4 z-40 flex items-center gap-3 md:right-8">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === current ? "w-8 bg-primary" : "w-1.5 bg-primary/25 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Quote + name + title (below images) */}
        <div key={current} className="mx-auto mt-10 max-w-3xl animate-fade-in px-4">
          <p className="font-body text-base italic leading-relaxed text-muted-foreground md:text-lg">
            "{testimonials[current].quote}"
          </p>
          <h4 className="mt-6 font-display text-xl font-semibold text-foreground md:text-2xl">
            {testimonials[current].name}
          </h4>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            {testimonials[current].title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
