import { useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before-health.png";
import afterImg from "@/assets/after-health.png";

const steps = [
  { step: 1, title: "Prakriti Assessment", desc: "Understanding your unique body constitution" },
  { step: 2, title: "Herb Sourcing", desc: "Premium ingredients from original farms" },
  { step: 3, title: "Picking Herb", desc: "Wild grown for purity in pristine conditions" },
  { step: 4, title: "Natural Extraction", desc: "Aqueous extraction ensuring zero harm" },
  { step: 5, title: "Manufacturing", desc: "Nano-technology for maximum bioavailability" },
  { step: 6, title: "Doctor Recommendation", desc: "Endorsed by leading medical experts" },
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl font-semibold text-foreground lg:mb-16 lg:text-4xl">
          Why We Are Different
        </h2>

        <div className="grid items-center gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Before Image */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0-start"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-destructive/10 px-4 py-1 font-body text-xs font-semibold text-destructive">
                BEFORE
              </div>
              <img
                src={beforeImg}
                alt="Before - unhealthy lifestyle"
                loading="lazy"
                width={320}
                height={440}
                className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-center">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className={`transition-all duration-700 ${
                  isVisible ? "animate-fade-up" : "opacity-0-start"
                }`}
                style={{ animationDelay: isVisible ? `${idx * 150}ms` : "0ms", animationFillMode: "both" }}
              >
                <div className="group mb-3 flex items-center gap-4 rounded-xl border bg-card px-5 py-3 shadow-sm transition-all hover:border-primary hover:shadow-md">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-body text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="mx-auto h-4 w-px bg-primary/30" />
                )}
              </div>
            ))}

            {/* Outcome */}
            <div
              className={`mt-2 rounded-xl border-2 border-primary bg-primary/5 px-6 py-3 text-center transition-all duration-700 ${
                isVisible ? "animate-fade-up" : "opacity-0-start"
              }`}
              style={{ animationDelay: isVisible ? "900ms" : "0ms", animationFillMode: "both" }}
            >
              <span className="font-display text-lg font-semibold text-primary">
                ✨ Holistic Healing
              </span>
            </div>
          </div>

          {/* After Image */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0-start"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary/10 px-4 py-1 font-body text-xs font-semibold text-primary">
                AFTER
              </div>
              <img
                src={afterImg}
                alt="After - healthy lifestyle"
                loading="lazy"
                width={320}
                height={440}
                className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
