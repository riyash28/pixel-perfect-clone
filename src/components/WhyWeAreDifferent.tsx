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

        {/* DESKTOP: Horizontal zig-zag flow */}
        <div className="hidden lg:block relative">
          {/* Curved connector SVG (background) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L6,4 L0,8 Z" fill="hsl(var(--primary) / 0.45)" />
              </marker>
            </defs>
            <path
              d="M 80,180 C 160,180 180,360 260,360 C 340,360 360,180 440,180 C 520,180 540,360 620,360 C 700,360 720,180 800,180 C 880,180 900,360 980,360 C 1040,360 1080,260 1130,260"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#arrowhead)"
              style={{
                strokeDashoffset: isVisible ? 0 : 1400,
                strokeDasharray: isVisible ? "6 6" : "1400",
                transition: "stroke-dashoffset 2.5s ease-in-out, stroke-dasharray 2.5s ease-in-out",
              }}
            />
          </svg>

          <div className="relative z-10 grid grid-cols-9 items-center gap-3 min-h-[520px]">
            {/* Before */}
            <div
              className="col-span-1 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-60px)",
                transition: "all 0.8s ease 0.1s",
              }}
            >
              <span className="mb-3 inline-block rounded-full bg-destructive/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-destructive">
                Before
              </span>
              <div className="relative flex items-end justify-center h-[260px] overflow-visible">
                <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[80%] rounded-full bg-destructive/5 blur-2xl" />
                <img src={beforeImg} alt="Before" className="relative h-[300px] origin-bottom" />
              </div>
            </div>

            {/* Steps 1-6 in zig-zag */}
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isTop = idx % 2 === 1; // Step1 bottom, Step2 top, ...
              return (
                <div
                  key={item.step}
                  className="col-span-1 flex"
                  style={{
                    alignSelf: isTop ? "start" : "end",
                    paddingTop: isTop ? "20px" : 0,
                    paddingBottom: isTop ? 0 : "20px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : `translateY(${isTop ? -30 : 30}px)`,
                    transition: `all 0.7s ease ${0.25 + idx * 0.12}s`,
                  }}
                >
                  <div className="group relative w-full rounded-2xl border border-transparent bg-card px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md animate-float-logo" style={{ animationDelay: `${idx * 0.4}s` }}>
                    <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow">
                      {String(item.step).padStart(2, "0")}
                    </div>
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h4 className="font-body text-xs font-semibold text-foreground leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 font-body text-[10px] text-muted-foreground leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Outcome card - centered/highlighted */}
            <div
              className="col-span-1 flex items-center justify-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.85)",
                transition: "all 0.8s ease 1.1s",
              }}
            >
              <div className="relative w-full rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15 px-3 py-4 shadow-lg">
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-primary/20 blur-xl" />
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow">
                  <Sparkles size={18} className="text-accent-foreground" />
                </div>
                <span className="font-body text-[9px] font-bold uppercase tracking-widest text-accent">
                  Outcome
                </span>
                <h4 className="font-display text-sm font-bold text-primary leading-tight">
                  Holistic Healing
                </h4>
              </div>
            </div>

            {/* After */}
            <div
              className="col-span-1 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transition: "all 0.8s ease 1.3s",
              }}
            >
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
                After
              </span>
              <div className="relative flex items-end justify-center h-[260px] overflow-visible">
                <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[80%] rounded-full bg-primary/5 blur-2xl" />
                <img src={afterImg} alt="After" className="relative h-[300px] origin-bottom" />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Stacked vertical */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="mb-3 inline-block rounded-full bg-destructive/10 px-4 py-1 font-body text-xs font-bold uppercase tracking-widest text-destructive">
              Before
            </span>
            <img src={beforeImg} alt="Before" className="h-[320px]" />
          </div>

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="w-full max-w-sm rounded-2xl border bg-card px-5 py-4 shadow-sm relative">
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow">
                  {String(item.step).padStart(2, "0")}
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-0.5 font-body text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="w-full max-w-sm rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-primary/20 px-5 py-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                <Sparkles size={18} className="text-accent-foreground" />
              </div>
              <div>
                <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent">Outcome</span>
                <h4 className="font-display text-base font-bold text-primary">Holistic Healing</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 font-body text-xs font-bold uppercase tracking-widest text-primary">
              After
            </span>
            <img src={afterImg} alt="After" className="h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
