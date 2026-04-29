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
      <div className="group/marquee relative mt-14 overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-card to-transparent" />

        <div className="flex w-max gap-6 px-6 [animation:marquee_45s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          {loop.map((e, i) => (
            <div
              key={i}
              className="group/card relative h-[340px] w-[240px] flex-shrink-0 [perspective:1200px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)]">
                {/* FRONT — doctor image */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-foreground/5 [backface-visibility:hidden]">
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

                {/* BACK — sticky-note style testimonial */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-foreground/10 bg-background p-5 text-left shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="absolute left-4 top-3 h-1.5 w-14 rounded-full bg-accent/70" />
                  <div className="flex h-full flex-col justify-between pt-6">
                    <p className="font-body text-[13px] italic leading-relaxed text-foreground/80">
                      "{e.quote}"
                    </p>
                    <div className="mt-4 border-t border-foreground/10 pt-3">
                      <p className="font-display text-sm font-semibold text-primary">
                        {e.name}
                      </p>
                      <p className="font-body text-[11px] text-muted-foreground">
                        {e.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
