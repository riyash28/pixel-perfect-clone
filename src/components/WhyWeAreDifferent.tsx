import { useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before-health.png";
import afterImg from "@/assets/after-health.png";
import { Leaf, FlaskConical, Factory, Stethoscope, Sparkles, ClipboardList, TreePine } from "lucide-react";

const steps = [
  { step: 1, title: "Prakriti Assessment", desc: "Understanding your unique body constitution", icon: ClipboardList },
  { step: 2, title: "Herb Sourcing", desc: "Premium ingredients from original farms", icon: TreePine },
  { step: 3, title: "Picking Herb", desc: "Wild grown for purity in pristine conditions", icon: Leaf },
  { step: 4, title: "Natural Extraction", desc: "Aqueous extraction ensuring zero harm", icon: FlaskConical },
  { step: 5, title: "Manufacturing", desc: "Nano-technology for maximum bioavailability", icon: Factory },
  { step: 6, title: "Doctor Recommendation", desc: "Endorsed by leading medical experts", icon: Stethoscope },
];

const WhyWeAreDifferent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl overflow-hidden">
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(-100px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Why We
          </span>{" "}
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(100px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Are Different
          </span>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center font-body text-base text-muted-foreground lg:mb-20">
          A meticulous 6-step journey from nature to your wellness
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_2.4fr_0.85fr] lg:gap-6">
          {/* Before Image — Floating, no background */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-120px)",
              transition: "all 0.9s ease-in-out 0.1s",
            }}
          >
            <span className="mb-4 inline-block rounded-full bg-destructive/10 px-5 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-destructive">
              Before
            </span>
            <div className="relative flex items-end justify-center h-[500px] overflow-visible">
              {/* Soft glow behind subject */}
              <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[70%] rounded-full bg-destructive/5 blur-3xl" />
              <img src={beforeImg} alt="Before" className="relative h-[600px] origin-bottom" />
            </div>
          </div>

          {/* Center Steps — Zig-zag wave on desktop, vertical on mobile */}
          <div className="flex flex-col items-center w-full">
            {/* Desktop zig-zag */}
            <div className="relative hidden w-full lg:block" style={{ height: "440px" }}>
              {/* Curved connector SVG */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 1200 440"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 100 140 C 200 140, 200 300, 300 300 S 400 140, 500 140 S 600 300, 700 300 S 800 140, 900 140 S 1000 300, 1100 300"
                  stroke="hsl(var(--primary) / 0.35)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 1200,
                    transition: "stroke-dashoffset 2s ease-in-out 0.3s",
                  }}
                />
              </svg>

              {steps.map((item, idx) => {
                const Icon = item.icon;
                const isTop = idx % 2 === 0;
                const leftPct = 8 + idx * 16; // 8, 24, 40, 56, 72, 88
                const topPx = isTop ? 40 : 200;
                return (
                  <div
                    key={item.step}
                    className="absolute -translate-x-1/2"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPx}px`,
                      width: "180px",
                      opacity: isVisible ? 1 : 0,
                      transform: `translate(-50%, ${isVisible ? "0" : isTop ? "-20px" : "20px"})`,
                      transition: `all 0.7s ease-out ${0.3 + idx * 0.15}s`,
                      animation: isVisible
                        ? `floatStep 4s ease-in-out ${idx * 0.3}s infinite`
                        : undefined,
                    }}
                  >
                    <div className="group relative flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-card px-3 py-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2.5 py-0.5 font-body text-[10px] font-bold tracking-wider text-accent-foreground shadow-sm">
                        {String(item.step).padStart(2, "0")}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary shadow-sm">
                        <Icon size={18} className="text-primary-foreground" />
                      </div>
                      <h4 className="text-center font-body text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-center font-body text-[11px] leading-snug text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile vertical stack */}
            <div className="relative w-full lg:hidden">
              <div className="absolute left-[22px] top-4 -z-0 h-[calc(100%-40px)] w-px bg-gradient-to-b from-primary/30 via-primary/20 to-primary/5" />
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative mb-4 last:mb-0"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(40px)",
                      transition: `all 0.7s ease-in-out ${0.3 + idx * 0.12}s`,
                    }}
                  >
                    <div className="group flex items-start gap-4 rounded-2xl border border-transparent bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                      <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
                        <Icon size={18} className="text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          Step {String(item.step).padStart(2, "0")}
                        </span>
                        <h4 className="mt-0.5 font-body text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 font-body text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outcome */}
            <div
              className="relative mt-6 lg:mt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                transition: "all 0.8s ease-in-out 1.3s",
              }}
            >
              <div className="flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
                  <Sparkles size={18} className="text-accent-foreground" />
                </div>
                <div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent">
                    Outcome
                  </span>
                  <h4 className="font-display text-base font-semibold text-primary lg:text-lg">Holistic Healing</h4>
                </div>
              </div>
            </div>
          </div>

          {/* After Image — Floating, no background */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(120px)",
              transition: "all 0.9s ease-in-out 0.25s",
            }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-primary">
              After
            </span>
            <div className="relative flex items-end justify-center h-[500px] overflow-visible">
              {/* Soft glow behind subject */}
              <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[70%] rounded-full bg-primary/5 blur-3xl" />
              <img src={afterImg} alt="After" className="relative h-[600px] origin-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
