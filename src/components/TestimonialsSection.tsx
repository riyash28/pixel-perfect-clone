import { useState } from "react";
import doctor1 from "@/assets/doctors/doctor-1.jpg";
import doctor2 from "@/assets/doctors/doctor-2.jpg";
import doctor3 from "@/assets/doctors/doctor-3.jpg";
import doctor4 from "@/assets/doctors/doctor-4.jpg";

const experts = [
  {
    name: "Dr. Geeta",
    title: "MD (Ayurveda)",
    image: doctor1,
    quote:
      "Praanroot's holistic formulations reflect true Ayurvedic wisdom — purity, potency, and purpose in every dose.",
  },
  {
    name: "Dr. Vishakha",
    title: "BAMS",
    image: doctor2,
    quote:
      "I recommend Praanroot to my patients for safe, plant-based wellness rooted in classical Ayurveda.",
  },
  {
    name: "Dr. Sakshi Gupta",
    title: "MD (Ayurveda)",
    image: doctor3,
    quote:
      "Their products consistently deliver visible results without side effects — a rare combination today.",
  },
  {
    name: "Dr. Sakshi Sharma",
    title: "BAMS",
    image: doctor4,
    quote:
      "Praanroot blends tradition with modern science beautifully. A trustworthy choice for everyday wellness.",
  },
  {
    name: "Dr. Neha",
    title: "MD (Ayurveda)",
    image: doctor1,
    quote:
      "From sourcing to formulation, the integrity of Praanroot is unmatched in the natural wellness space.",
  },
  {
    name: "Dr. Megha",
    title: "BAMS",
    image: doctor2,
    quote:
      "An honest, effective Ayurvedic brand I confidently endorse for whole-body care.",
  },
];

// Duplicate list so the marquee can scroll seamlessly
const loop = [...experts, ...experts];

const TestimonialsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-card py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Approved By Experts
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted-foreground md:text-base">
          Validated and Endorsed by Qualified and Certified Healthcare Professionals.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="group relative mt-14 overflow-hidden"
        onMouseLeave={() => setHovered(null)}
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-card to-transparent" />

        <div
          className="flex w-max gap-6 px-6 [animation:marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]"
        >
          {loop.map((e, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                className="relative flex-shrink-0"
                style={{ zIndex: isHovered ? 30 : 1 }}
              >
                {/* Card */}
                <div className="relative h-[340px] w-[240px] overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-foreground/5 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <h4 className="font-display text-base font-semibold text-white">
                      {e.name}
                    </h4>
                    <p className="font-body text-xs text-white/85">{e.title}</p>
                  </div>
                </div>

                {/* Hover sticky-note testimonial */}
                <div
                  className={`pointer-events-none absolute left-full top-1/2 ml-4 w-64 origin-left -translate-y-1/2 transition-all duration-500 ease-out ${
                    isHovered
                      ? "scale-100 rotate-[6deg] opacity-100"
                      : "scale-90 rotate-[14deg] opacity-0"
                  }`}
                >
                  <div className="relative rounded-md border border-foreground/10 bg-[hsl(var(--background))] p-5 shadow-xl">
                    <span className="absolute left-3 top-2 h-1.5 w-12 rounded-full bg-accent/70" />
                    <p className="mt-3 font-body text-sm italic leading-relaxed text-foreground/80">
                      "{e.quote}"
                    </p>
                    <p className="mt-3 text-right font-display text-xs font-semibold text-primary">
                      — {e.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
