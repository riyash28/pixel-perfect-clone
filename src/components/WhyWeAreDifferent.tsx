import { useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before-health.png";
import afterImg from "@/assets/after-health.png";
import { Leaf, FlaskConical, Microscope, Factory, Stethoscope, Sparkles, ClipboardList, TreePine } from "lucide-react";

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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          Why We Are Different
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center font-body text-base text-muted-foreground lg:mb-20">
          A meticulous 6-step journey from nature to your wellness
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-6">
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
            <div className="relative">
              {/* Soft glow behind subject */}
              <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[70%] rounded-full bg-destructive/5 blur-3xl" />
              <img
                src={beforeImg}
                alt="Before — unhealthy lifestyle"
                loading="lazy"
                width={340}
                height={450}
                className="relative z-10 h-auto max-h-[420px] w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.03] lg:max-h-[480px]"
              />
            </div>
          </div>

          {/* Center Steps */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] top-4 -z-0 h-[calc(100%-40px)] w-px bg-gradient-to-b from-primary/30 via-primary/20 to-primary/5 lg:left-[22px]" />

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
                        <div className="flex items-center gap-2">
                          <span className="font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            Step {item.step}
                          </span>
                        </div>
                        <h4 className="mt-0.5 font-body text-sm font-semibold text-foreground lg:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 font-body text-xs text-muted-foreground lg:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Outcome */}
              <div
                className="relative mt-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                  transition: "all 0.8s ease-in-out 1.1s",
                }}
              >
                <div className="flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 px-5 py-4 shadow-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
                    <Sparkles size={18} className="text-accent-foreground" />
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
            <div className="relative">
              {/* Soft glow behind subject */}
              <div className="absolute inset-0 mx-auto my-auto h-[80%] w-[70%] rounded-full bg-primary/5 blur-3xl" />
              <img
                src={afterImg}
                alt="After — healthy lifestyle"
                loading="lazy"
                width={340}
                height={450}
                className="relative z-10 h-auto max-h-[420px] w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.03] lg:max-h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
