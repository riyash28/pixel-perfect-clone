import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import doctor1 from "@/assets/doctors/doctor-1.jpg";
import doctor2 from "@/assets/doctors/doctor-2.jpg";
import doctor3 from "@/assets/doctors/doctor-3.jpg";
import doctor4 from "@/assets/doctors/doctor-4.jpg";

const testimonials = [
  {
    quote: "ZeroHarm's comprehensive approach to holistic wellness is revolutionary. As an expert, I wholeheartedly endorse their dedication to nurturing health from within.",
    name: "Dr. Shalini Patodiya",
    title: "Dermatologist & Holistic Wellness Expert",
    image: doctor1,
  },
  {
    quote: "I've seen remarkable transformations with ZeroHarm's holistic care. Their commitment to overall well-being and natural health solutions is exemplary.",
    name: "Dr. Bharat Patodiya",
    title: "Consultant Medical Oncologist",
    image: doctor2,
  },
  {
    quote: "ZeroHarm's holistic vision reshapes health standards. I proudly support their integrative approach that empowers individuals towards sustained well-being.",
    name: "Dr. Sudhakar Darbawar",
    title: "45 Years of Experience in Medical Field",
    image: doctor3,
  },
  {
    quote: "Having witnessed ZeroHarm's impact firsthand, I believe in their holistic methods for women's care. Their comprehensive approach fosters empowerment.",
    name: "Dr. Snehal R Pansare",
    title: "Obstetrician and Gynaecologist",
    image: doctor4,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const goTo = (i: number) => {
    setCurrent(((i % testimonials.length) + testimonials.length) % testimonials.length);
    setAnimKey((k) => k + 1);
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

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
      setCurrent((c) => (c + 1) % testimonials.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-card py-20 lg:py-28"
    >
      {/* Decorative background glow */}
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
        className={`relative mx-auto max-w-3xl px-4 text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          What Leading Industry Experts Say
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-primary/30" />

        <div className="relative mt-12 min-h-[260px]">
          <Quote
            size={56}
            strokeWidth={1.25}
            className="mx-auto text-primary/15"
          />

          <div key={animKey} className="animate-fade-in">
            <div className="mx-auto mt-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 blur-sm" />
                <img
                  src={t.image}
                  alt={t.name}
                  className="relative h-24 w-24 rounded-full border-4 border-card object-cover shadow-lg md:h-28 md:w-28"
                />
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg italic leading-relaxed text-muted-foreground md:text-xl">
              {t.quote}
            </p>
            <h4 className="mt-6 font-display text-xl font-semibold text-foreground md:text-2xl">
              {t.name}
            </h4>
            <p className="mt-1 font-body text-sm uppercase tracking-wider text-muted-foreground">
              {t.title}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === current ? "w-8 bg-primary" : "w-1.5 bg-primary/25 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
