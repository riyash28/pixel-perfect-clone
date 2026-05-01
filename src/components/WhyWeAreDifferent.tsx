import {
  Leaf,
  FlaskConical,
  Factory,
  Stethoscope,
  Sparkles,
  ClipboardList,
  TreePine,
  ArrowDown,
} from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { getAnimationStyle } from "@/lib/animationVariants";

const steps = [
  { step: 1, title: "Prakriti Assessment", desc: "Understanding your unique body constitution", icon: ClipboardList },
  { step: 2, title: "Herb Sourcing", desc: "Premium ingredients from original farms", icon: TreePine },
  { step: 3, title: "Picking Herb", desc: "Wild grown for purity in pristine conditions", icon: Leaf },
  { step: 4, title: "Natural Extraction", desc: "Aqueous extraction ensuring zero harm", icon: FlaskConical },
  { step: 5, title: "Manufacturing", desc: "Nano-technology for maximum bioavailability", icon: Factory },
  { step: 6, title: "Doctor Recommendation", desc: "Endorsed by leading medical experts", icon: Stethoscope },
];

const WhyWeAreDifferent = () => {
  const { ref: sectionRef, isVisible } = useInViewAnimation<HTMLElement>();

  // Stagger order: S1..S6 (0..5) → Outcome (6)
  const baseDelay = 0.15;
  const stepDelay = 0.18;
  const getDelay = (i: number) => baseDelay + i * stepDelay;
  const lineDuration = 1.6;

  // Build chain nodes: 6 steps + outcome
  const chainNodes = [
    ...steps.map((s) => ({
      key: `step-${s.step}`,
      label: `Step ${s.step}`,
      title: s.title,
      desc: s.desc,
      Icon: s.icon,
      accent: false,
    })),
    {
      key: "outcome",
      label: "Outcome",
      title: "Holistic Healing",
      desc: "Balanced wellness from root to result",
      Icon: Sparkles,
      accent: true,
    },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-3 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          Why We Are Different
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center font-body text-base text-muted-foreground">
          A meticulous 6-step journey from nature to your wellness
        </p>

        {/* DESKTOP HORIZONTAL ZIG-ZAG CHAIN FLOW */}
        <div className="relative mx-auto hidden lg:block">
          {/* Curved zig-zag connecting line behind nodes.
              7 nodes evenly spaced; node centers alternate down/up.
              viewBox width 1200, x positions: ~85, 258, 431, 604, 777, 950, 1123 (≈ every 173)
              y centers alternate: 150 (down), 70 (up) → circle vertical center sits on the wave */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[220px] w-full"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chainGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
                <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.75" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path
              d="M 60,150 C 145,150 145,70 230,70 S 315,150 400,150 S 485,70 570,70 S 655,150 740,150 S 825,70 910,70 S 995,150 1080,150"
              fill="none"
              stroke="url(#chainGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2400"
              strokeDashoffset={isVisible ? 0 : 2400}
              style={{
                transition: `stroke-dashoffset ${lineDuration}s ease-in-out ${baseDelay}s`,
              }}
            />
          </svg>

          {/* Nodes container — height matches svg viewBox */}
          <div className="relative z-10 h-[220px] w-full">
            {chainNodes.map((n, i) => {
              const Icon = n.Icon;
              // 7 nodes across — match SVG x positions in %
              // Match SVG x coords (60,230,400,570,740,910,1080) ÷ 1200 → %
              const xPercents = [5, 19.17, 33.33, 47.5, 61.67, 75.83, 90];
              const left = `${xPercents[i]}%`;
              const isDown = i % 2 === 0; // i=0 → down (y=150), i=1 → up (y=70)
              // top of circle = svg y center − circle radius (44)
              const top = isDown ? 150 - 44 : 70 - 44;

              return (
                <div
                  key={n.key}
                  className="absolute flex w-[140px] -translate-x-1/2 flex-col items-center text-center"
                  style={{
                    left,
                    top,
                    ...getAnimationStyle(
                      n.accent ? "fadeScale" : "slideFromBottom",
                      isVisible,
                      getDelay(i),
                      n.accent ? 0.7 : 0.6,
                    ),
                  }}
                >
                  <div
                    className={`relative flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] bg-white shadow-md transition-all duration-300 ${
                      n.accent
                        ? "border-accent/40 hover:border-accent hover:shadow-lg"
                        : "border-primary/30 hover:border-primary hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`flex h-[64px] w-[64px] items-center justify-center rounded-full shadow-inner ${
                        n.accent
                          ? "bg-gradient-to-br from-accent to-accent/80"
                          : "bg-gradient-to-br from-primary to-primary/80"
                      }`}
                    >
                      <Icon
                        size={26}
                        className={n.accent ? "text-accent-foreground" : "text-primary-foreground"}
                      />
                    </div>
                  </div>
                  <span
                    className={`mt-2 font-body text-[9px] font-bold uppercase tracking-widest ${
                      n.accent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {n.label}
                  </span>
                  <h4
                    className={`mt-2 font-body text-[12px] font-bold leading-tight ${
                      n.accent ? "text-primary font-display text-[13px] font-bold" : "text-foreground"
                    }`}
                  >
                    {n.title}
                  </h4>
                  <p className="mt-1 font-body text-[10px] leading-snug text-muted-foreground">
                    {n.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: vertical timeline */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="flex flex-col items-center gap-2"
                style={getAnimationStyle("slideFromBottom", isVisible, i * 0.08)}
              >
                <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full border-[3px] border-primary/30 bg-white shadow-md">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <span className="font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Step {s.step}
                </span>
                <h4 className="font-body text-sm font-semibold text-foreground">{s.title}</h4>
                <p className="max-w-[260px] text-center font-body text-xs text-muted-foreground">
                  {s.desc}
                </p>
                <ArrowDown size={20} className="text-primary/60" />
              </div>
            );
          })}
          <div className="flex w-full max-w-[280px] items-center gap-3 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/10 px-5 py-5 shadow-md">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
              <Sparkles size={20} className="text-accent-foreground" />
            </div>
            <div>
              <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent">
                Outcome
              </span>
              <h4 className="font-display text-base font-semibold text-primary">Holistic Healing</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
