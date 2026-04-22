import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ZeroHarm's comprehensive approach to holistic wellness is revolutionary. As an expert, I wholeheartedly endorse their dedication to nurturing health from within.",
    name: "Dr. Shalini Patodiya",
    title: "Dermatologist & Holistic Wellness Expert",
  },
  {
    quote:
      "I've seen remarkable transformations with ZeroHarm's holistic care. Their commitment to overall well-being and natural health solutions is exemplary.",
    name: "Dr. Bharat Patodiya",
    title: "Consultant Medical Oncologist",
  },
  {
    quote:
      "ZeroHarm's holistic vision reshapes health standards. I proudly support their integrative approach that empowers individuals towards sustained well-being.",
    name: "Dr. Sudhakar Darbawar",
    title: "45 Years of Experience in Medical Field",
  },
  {
    quote:
      "Having witnessed ZeroHarm's impact firsthand, I believe in their holistic methods for women's care. Their comprehensive approach fosters empowerment.",
    name: "Dr. Snehal R Pansare",
    title: "Obstetrician and Gynaecologist",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [current]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      className="relative overflow-hidden bg-card py-20 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-float-logo" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-float-logo" style={{ animationDelay: "2s" }} />

      <div
        className={`relative mx-auto max-w-3xl px-4 text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What Leading Industry Experts Say
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-primary/30" />

        <div className="relative mt-12 min-h-[260px] sm:min-h-[240px]">
          <Quote
            size={44}
            className="mx-auto text-primary/15"
            strokeWidth={1.5}
          />

          <div key={animKey} className="animate-testimonial-in mt-5">
            <p className="mx-auto max-w-2xl font-body text-base italic leading-relaxed text-muted-foreground sm:text-lg">
              "{t.quote}"
            </p>
            <h4 className="mt-8 font-display text-lg font-semibold text-foreground sm:text-xl">
              {t.name}
            </h4>
            <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
              {t.title}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5 sm:gap-6">
          <button
            onClick={() => go(-1)}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  i === current ? "w-8 bg-primary" : "w-1.5 bg-primary/25 hover:bg-primary/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
