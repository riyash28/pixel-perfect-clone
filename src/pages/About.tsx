import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import praanrootLogo from "@/assets/praanroot-logo.png";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { getAnimationStyle, getDelay } from "@/lib/animationVariants";
import { Leaf, Users, Sparkles } from "lucide-react";

type ActiveView = "about" | "founder";

const About = () => {
  const [active, setActive] = useState<ActiveView>("about");
  const cards = useInViewAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO BANNER — Blog-style, with Praanroot logo + tagline */}
      <section className="relative w-full overflow-hidden bg-zh-beige">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 md:from-background/90 md:via-background/50 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:min-h-[560px] md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 font-body text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              About Us
            </span>

            <div className="mt-6 flex justify-center">
              <img
                src={praanrootLogo}
                alt="Praanroot - Ayurveda Rooted in You"
                className="h-40 w-auto sm:h-48 lg:h-56"
              />
            </div>

            <p className="mx-auto mt-4 max-w-2xl font-display text-xl italic leading-snug text-foreground sm:text-2xl lg:text-3xl">
              Ayurveda Rooted in You — <span className="text-primary">purity, potency, and purpose.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Two interactive cards */}
      <section className="py-12 lg:py-16">
        <div ref={cards.ref} className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* LEFT — About */}
            <button
              type="button"
              onClick={() => setActive("about")}
              style={getAnimationStyle("slideFromLeft", cards.isVisible, getDelay(0))}
              className={`group rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-md ${
                active === "about"
                  ? "scale-[1.03] border-primary/40 shadow-lg ring-2 ring-primary/20"
                  : "scale-100"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">About Praanroot</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Discover the roots of our brand — Ayurveda crafted for modern women's wellness.
              </p>
              <span className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-zh-green-light">
                Know More
              </span>
            </button>

            {/* RIGHT — Founder */}
            <button
              type="button"
              onClick={() => setActive("founder")}
              style={getAnimationStyle("slideFromRight", cards.isVisible, getDelay(1))}
              className={`group rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-md ${
                active === "founder"
                  ? "scale-[1.03] border-accent/40 shadow-lg ring-2 ring-accent/30"
                  : "scale-100"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:scale-110">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Meet the Founders</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Meet the visionaries behind Praanroot and the story that inspired our mission.
              </p>
              <span className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 font-body text-sm font-semibold text-accent-foreground transition-colors hover:bg-zh-orange-dark">
                Explore
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic content section */}
      <div key={active} className="animate-fade-in">
        {active === "about" ? (
          <section className="relative overflow-hidden pb-16 lg:pb-24">
            <div className="relative z-10 mx-auto max-w-4xl px-4">
              <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">About Praanroot</h1>
              <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                Praanroot – Ayurveda Rooted in You At Praanroot, we believe that every woman deserves a life of balance,
                vitality, and confidence. Born from the deep roots of Ayurveda and driven by a passion to heal naturally,
                our formulations are crafted to support women through every hormonal challenge—be it PCOD, PCOS, irregular
                cycles, fertility struggles, or emotional imbalances.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
                Founded under the umbrella of Anushrita Herbal, a company committed to authentic, research-based herbal
                medicine, Praanroot is not just a brand—it's a promise of purity, effectiveness, and care. Founded under
                Anushrita Herbal, an Ayurvedic company established on 16 Apr 2025, Praanroot is not just a brand—it’s a
                commitment to purity, potency, and purpose. Every product reflects the careful balance of ancient Ayurvedic
                wisdom and modern patient needs.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
                Our products like Ritucalm Capsules and Ritucalm Syrup are not just remedies—they are experiences. Blending
                classical Ayurvedic wisdom with modern-day clinical understanding, we focus on fast, targeted, and
                long-lasting relief without side effects. Every drop, every dose is carefully designed by experts—not in
                labs alone, but in life itself. We understand what women go through. And we’re here to make sure you don’t
                go through it alone. At Praanroot, your health is our mission—and Ayurveda is our method.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { value: "50+", label: "Products" },
                  { value: "1M+", label: "Happy Customers" },
                  { value: "100%", label: "Plant Based" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-zh-beige p-6 text-center">
                    <h3 className="font-display text-3xl font-bold text-primary">{stat.value}</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <FounderSection />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default About;
