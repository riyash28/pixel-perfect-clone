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
} from "lucide-react";

const steps = [
  { step: 1, title: "Prakriti Assessment", desc: "Understanding your unique body constitution", icon: ClipboardList },
  { step: 2, title: "Herb Sourcing", desc: "Premium ingredients from original farms", icon: TreePine },
  { step: 3, title: "Picking Herb", desc: "Wild grown for purity in pristine conditions", icon: Leaf },
  { step: 4, title: "Natural Extraction", desc: "Aqueous extraction ensuring zero harm", icon: FlaskConical },
  { step: 5, title: "Manufacturing", desc: "Nano-technology for maximum bioavailability", icon: Factory },
  { step: 6, title: "Doctor Recommendation", desc: "Endorsed by leading medical experts", icon: Stethoscope },
];

// Row config: alternating S-shape
// Even index rows: illustration LEFT, step RIGHT
// Odd index rows: step LEFT, illustration RIGHT
// Illustration alternates: before / after / before / after ...
const rows = steps.map((s, i) => ({
  ...s,
  cardSide: i % 2 === 0 ? "right" : "left", // step card side
  illustration: i % 2 === 0 ? "before" : "after",
}));

const StepCard = ({
  step,
  title,
  desc,
  Icon,
  visible,
  delay,
  fromSide,
}: {
  step: number;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  visible: boolean;
  delay: number;
  fromSide: "left" | "right";
}) => (
  <div
    className="w-full max-w-md"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translateX(0) translateY(0)"
        : `translateX(${fromSide === "left" ? "-60px" : "60px"}) translateY(20px)`,
      transition: `all 0.7s ease-out ${delay}s`,
    }}
  >
    <div className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-[#F9FAFB] px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
        <Icon size={20} className="text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Step {step}
        </span>
        <h4 className="mt-1 font-display text-lg font-semibold text-foreground">{title}</h4>
        <p className="mt-1 font-body text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  </div>
);

const Illustration = ({
  type,
  visible,
  delay,
  fromSide,
}: {
  type: "before" | "after";
  visible: boolean;
  delay: number;
  fromSide: "left" | "right";
}) => {
  const isBefore = type === "before";
  return (
    <div
      className="flex w-full flex-col items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) scale(1)"
          : `translateX(${fromSide === "left" ? "-60px" : "60px"}) scale(0.95)`,
        transition: `all 0.9s ease-out ${delay}s`,
      }}
    >
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] ${
          isBefore ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
        }`}
      >
        {isBefore ? "Before" : "After"}
      </span>
      <div className="relative flex h-[260px] w-full items-end justify-center overflow-visible">
        <div
          className={`absolute inset-0 mx-auto my-auto h-[80%] w-[70%] rounded-full blur-3xl ${
            isBefore ? "bg-destructive/5" : "bg-primary/5"
          }`}
        />
        <img
          src={isBefore ? beforeImg : afterImg}
          alt={isBefore ? "Before health state" : "After holistic healing"}
          className="relative h-[300px] origin-bottom object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const WhyWeAreDifferent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Heading */}
        <h2 className="mb-4 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl overflow-hidden">
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(-80px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Why We
          </span>{" "}
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(80px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s ease",
            }}
          >
            Are Different
          </span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center font-body text-base text-muted-foreground lg:mb-20">
          A meticulous 6-step journey from nature to your wellness
        </p>

        {/* S-Shape Flow */}
        <div className="relative">
          {/* Curved connector (desktop only) */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 0 C 90 120, 10 240, 50 360 S 90 600, 50 720 S 10 960, 50 1000"
              stroke="hsl(var(--primary) / 0.25)"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
            />
          </svg>

          <div className="flex flex-col gap-12 lg:gap-16">
            {rows.map((row, idx) => {
              const Icon = row.icon;
              const delay = 0.15 + idx * 0.05;
              const cardOnRight = row.cardSide === "right";

              return (
                <div
                  key={row.step}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* On mobile order: illustration first, then step (Before → Step → After → Step...) */}
                  {cardOnRight ? (
                    <>
                      <div className="order-1 flex justify-center lg:justify-end">
                        <Illustration
                          type={row.illustration as "before" | "after"}
                          visible={isVisible}
                          delay={delay}
                          fromSide="left"
                        />
                      </div>
                      <div className="order-2 flex justify-center lg:justify-start">
                        <StepCard
                          step={row.step}
                          title={row.title}
                          desc={row.desc}
                          Icon={Icon}
                          visible={isVisible}
                          delay={delay + 0.1}
                          fromSide="right"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Mobile: illustration first, step second. Desktop: step left, illustration right */}
                      <div className="order-2 flex justify-center lg:order-1 lg:justify-end">
                        <StepCard
                          step={row.step}
                          title={row.title}
                          desc={row.desc}
                          Icon={Icon}
                          visible={isVisible}
                          delay={delay + 0.1}
                          fromSide="left"
                        />
                      </div>
                      <div className="order-1 flex justify-center lg:order-2 lg:justify-start">
                        <Illustration
                          type={row.illustration as "before" | "after"}
                          visible={isVisible}
                          delay={delay}
                          fromSide="right"
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Outcome */}
        <div
          className="mx-auto mt-16 max-w-lg lg:mt-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            transition: "all 0.9s ease-out 0.6s",
          }}
        >
          <div className="flex items-center justify-center gap-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-6 shadow-md">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
              <Sparkles size={22} className="text-accent-foreground" />
            </div>
            <div>
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Outcome
              </span>
              <h4 className="font-display text-xl font-semibold text-primary lg:text-2xl">
                Holistic Healing
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
