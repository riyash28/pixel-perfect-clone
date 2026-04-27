import { useEffect, useRef, useState } from "react";
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
  ArrowRight,
  ArrowLeft,
  ArrowDown,
} from "lucide-react";

const steps = [
  { step: 1, title: "Prakriti Assessment", desc: "Understanding your unique body constitution", icon: ClipboardList },
  { step: 2, title: "Herb Sourcing", desc: "Premium ingredients from original farms", icon: TreePine },
  { step: 3, title: "Picking Herb", desc: "Wild grown for purity in pristine conditions", icon: Leaf },
  { step: 4, title: "Natural Extraction", desc: "Aqueous extraction ensuring zero harm", icon: FlaskConical },
  { step: 5, title: "Manufacturing", desc: "Nano-technology for maximum bioavailability", icon: Factory },
  { step: 6, title: "Doctor Recommendation", desc: "Endorsed by leading medical experts", icon: Stethoscope },
];

type StepCardProps = {
  step: (typeof steps)[number];
  visible: boolean;
  delay: number;
  direction: "right" | "left" | "down";
};

const StepCard = ({ step, visible, delay, direction }: StepCardProps) => {
  const Icon = step.icon;
  const offset =
    direction === "right"
      ? "translateX(-30px)"
      : direction === "left"
        ? "translateX(30px)"
        : "translateY(-30px)";
  return (
    <div
      className="group flex w-full max-w-[260px] flex-col items-start gap-2 rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : offset,
        transition: `all 0.6s ease-out ${delay}s`,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
          <Icon size={16} className="text-primary-foreground" />
        </div>
        <span className="font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Step {step.step}
        </span>
      </div>
      <h4 className="font-body text-sm font-semibold text-foreground">{step.title}</h4>
      <p className="font-body text-xs text-muted-foreground">{step.desc}</p>
    </div>
  );
};

const WhyWeAreDifferent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const ArrowH = ({ dir, delay }: { dir: "right" | "left"; delay: number }) => (
    <div
      className="flex flex-1 items-center justify-center px-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.5s ease-out ${delay}s`,
      }}
    >
      <div className="relative flex w-full items-center">
        <div className="h-px flex-1 border-t border-dashed border-primary/40" />
        {dir === "right" ? (
          <ArrowRight size={18} className="ml-1 text-primary/70" />
        ) : (
          <ArrowLeft size={18} className="mr-1 text-primary/70 order-first" />
        )}
        {dir === "left" && <div className="h-px flex-1 border-t border-dashed border-primary/40" />}
      </div>
    </div>
  );

  const ArrowV = ({ align, delay }: { align: "left" | "right"; delay: number }) => (
    <div
      className={`flex ${align === "left" ? "justify-start pl-[130px]" : "justify-end pr-[130px]"} my-2`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.5s ease-out ${delay}s`,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="h-10 w-px border-l border-dashed border-primary/40" />
        <ArrowDown size={18} className="-mt-1 text-primary/70" />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          Why We Are Different
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center font-body text-base text-muted-foreground">
          A meticulous 6-step journey from nature to your wellness
        </p>

        {/* DESKTOP SNAKE FLOW */}
        <div className="hidden lg:block">
          {/* Row 1: Before → Step1 → Step2 (left to right) */}
          <div className="flex items-center justify-between gap-2">
            <div
              className="flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-60px)",
                transition: "all 0.7s ease-out 0s",
              }}
            >
              <span className="mb-2 inline-block rounded-full bg-destructive/10 px-4 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-destructive">
                Before
              </span>
              <div className="relative flex h-[220px] w-[180px] items-end justify-center">
                <div className="absolute inset-0 m-auto h-[80%] w-[70%] rounded-full bg-destructive/5 blur-2xl" />
                <img src={beforeImg} alt="Before" className="relative h-[260px] origin-bottom" />
              </div>
            </div>

            <ArrowH dir="right" delay={0.2} />
            <StepCard step={steps[0]} visible={isVisible} delay={0.3} direction="right" />
            <ArrowH dir="right" delay={0.4} />
            <StepCard step={steps[1]} visible={isVisible} delay={0.5} direction="right" />
          </div>

          {/* Vertical connector right side: Step2 ↓ Step3 - actually goes down on right */}
          <ArrowV align="right" delay={0.6} />

          {/* Row 2: Step3 ← Step4 ← Step5 (visually right→left, but render: Step5, Step4, Step3 to keep flow visible) */}
          {/* User flow: Step3 ← Step4 ← Step5 means Step5 is rightmost. So render left→right: Step3, Step4, Step5 with leftward arrows */}
          <div className="flex items-center justify-between gap-2">
            <StepCard step={steps[2]} visible={isVisible} delay={0.9} direction="left" />
            <ArrowH dir="left" delay={0.85} />
            <StepCard step={steps[3]} visible={isVisible} delay={0.8} direction="left" />
            <ArrowH dir="left" delay={0.75} />
            <StepCard step={steps[4]} visible={isVisible} delay={0.7} direction="left" />
          </div>

          {/* Vertical connector left side: Step3 (leftmost) ↓ Step6 */}
          <ArrowV align="left" delay={1.0} />

          {/* Row 3: Step6 → Outcome → After (left to right) */}
          <div className="flex items-center justify-between gap-2">
            <StepCard step={steps[5]} visible={isVisible} delay={1.1} direction="right" />
            <ArrowH dir="right" delay={1.2} />
            <div
              className="flex w-full max-w-[280px] items-center gap-3 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/10 px-5 py-5 shadow-md"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0) scale(1)" : "translateX(-30px) scale(0.95)",
                transition: "all 0.7s ease-out 1.3s",
              }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
                <Sparkles size={20} className="text-accent-foreground" />
              </div>
              <div>
                <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent">
                  Outcome
                </span>
                <h4 className="font-display text-base font-semibold text-primary lg:text-lg">
                  Holistic Healing
                </h4>
              </div>
            </div>
            <ArrowH dir="right" delay={1.4} />
            <div
              className="flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transition: "all 0.7s ease-out 1.5s",
              }}
            >
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
                After
              </span>
              <div className="relative flex h-[220px] w-[180px] items-end justify-center">
                <div className="absolute inset-0 m-auto h-[80%] w-[70%] rounded-full bg-primary/5 blur-2xl" />
                <img src={afterImg} alt="After" className="relative h-[260px] origin-bottom" />
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
          {steps.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center gap-3">
              <StepCard step={s} visible={isVisible} delay={i * 0.05} direction="down" />
              <ArrowDown size={20} className="text-primary/60" />
            </div>
          ))}
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
