import beforeImg from "@/assets/before-health.png";
import afterImg from "@/assets/after-health.png";
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

  // Stagger order: Before(0) → S1..S6(1..6) → Outcome(7) → After(8)
  const baseDelay = 0.15;
  const stepDelay = 0.18;
  const getDelay = (i: number) => baseDelay + i * stepDelay;
  // Total visible nodes = 9; line draw matched to last node reveal
  const lineDuration = 1.6;

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-3 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          Why We Are Different
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center font-body text-base text-muted-foreground">
          A meticulous 6-step journey from nature to your wellness
        </p>

        {/* DESKTOP HORIZONTAL CHAIN FLOW */}
        <div className="relative hidden lg:block">
          {/* Wavy connecting line behind nodes */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-[58px] z-0 h-[60px] w-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chainGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M 20,30 C 90,0 160,60 230,30 S 370,0 440,30 S 580,60 650,30 S 790,0 860,30 S 1000,60 1070,30 S 1180,0 1190,30"
              fill="none"
              stroke="url(#chainGrad)"
              strokeWidth="2.5"
              strokeDasharray="2000"
              strokeDashoffset={isVisible ? 0 : 2000}
              style={{
                transition: `stroke-dashoffset ${lineDuration}s ease-in-out ${baseDelay}s`,
              }}
            />
          </svg>

          <div className="relative z-10 flex items-start justify-between gap-1">
            {/* Before */}
            <div
              className="flex flex-shrink-0 flex-col items-center"
              style={getAnimationStyle("slideFromLeft", isVisible, getDelay(0))}
            >
              <span className="mb-2 inline-block rounded-full bg-destructive/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-destructive">
                Before
              </span>
              <div className="relative flex h-[140px] w-[140px] items-center justify-center">
                <div className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full bg-destructive/5 blur-2xl" />
                <img src={beforeImg} alt="Before" className="relative h-[140px] object-contain" />
              </div>
            </div>

            {/* Steps */}
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="flex w-[120px] flex-shrink-0 flex-col items-center text-center"
                  style={getAnimationStyle("slideFromBottom", isVisible, getDelay(i + 1))}
                >
                  <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-primary/30 bg-white shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-inner">
                      <Icon size={26} className="text-primary-foreground" />
                    </div>
                  </div>
                  <span className="mt-3 font-body text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                    Step {s.step}
                  </span>
                  <h4 className="mt-1 font-body text-[12px] font-semibold leading-tight text-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-1 font-body text-[10px] leading-snug text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              );
            })}

            {/* Outcome (compact circular node) */}
            <div
              className="flex w-[120px] flex-shrink-0 flex-col items-center text-center"
              style={getAnimationStyle("fadeScale", isVisible, getDelay(7), 0.7)}
            >
              <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-accent/40 bg-white shadow-md">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-inner">
                  <Sparkles size={26} className="text-accent-foreground" />
                </div>
              </div>
              <span className="mt-3 font-body text-[9px] font-bold uppercase tracking-widest text-accent">
                Outcome
              </span>
              <h4 className="mt-1 font-display text-[13px] font-semibold leading-tight text-primary">
                Holistic Healing
              </h4>
            </div>

            {/* After */}
            <div
              className="flex flex-shrink-0 flex-col items-center"
              style={getAnimationStyle("slideFromRight", isVisible, getDelay(8))}
            >
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
                After
              </span>
              <div className="relative flex h-[140px] w-[140px] items-center justify-center">
                <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full bg-primary/10 blur-2xl" />
                <img src={afterImg} alt="After" className="relative h-[140px] object-contain drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: vertical flow */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          <div className="flex flex-col items-center">
            <span className="mb-2 inline-block rounded-full bg-destructive/10 px-4 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-destructive">
              Before
            </span>
            <img src={beforeImg} alt="Before" className="h-48" />
          </div>
          <ArrowDown size={20} className="text-primary/60" />
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
          <ArrowDown size={20} className="text-primary/60" />
          <div className="flex flex-col items-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
              After
            </span>
            <img src={afterImg} alt="After" className="h-48" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
