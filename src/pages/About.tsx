import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import praanrootLogo from "@/assets/praanroot-logo.png";
import aboutHeroBg from "@/assets/about-hero-botanical.jpg";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { getAnimationStyle, getDelay } from "@/lib/animationVariants";
import { Leaf, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const banner = useInViewAnimation<HTMLDivElement>();
  const cards = useInViewAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO BANNER — split editorial layout: botanical art left, brand story right */}
      <section className="relative w-full overflow-hidden bg-zh-beige">
        {/* Botanical background image — full bleed on mobile, anchored left on desktop */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroBg}
            alt="Hand-painted Ayurvedic botanicals — tulsi, lotus, turmeric"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-left"
          />
          {/* Readability gradients — fade to beige on the right where content sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zh-beige/70 to-zh-beige md:from-transparent md:via-zh-beige/40 md:to-zh-beige" />
          <div className="absolute inset-0 bg-gradient-to-t from-zh-beige/80 via-transparent to-transparent" />
        </div>

        {/* Subtle grid texture overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <div
          ref={banner.ref}
          className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center justify-end px-4 py-20 sm:px-6 md:min-h-[640px] md:py-28 lg:min-h-[700px]"
        >
          {/* Right-anchored content card */}
          <div className="w-full max-w-xl text-right md:max-w-2xl">
            {/* Badge */}
            <div
              style={getAnimationStyle("fadeScale", banner.isVisible, 0)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
            </div>

            {/* Logo + brand wordmark row */}
            <div
              style={getAnimationStyle("slideFromRight", banner.isVisible, 0.1)}
              className="mt-6 flex items-center justify-end gap-3"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-accent/25 blur-2xl"
                />
                <img
                  src={praanrootLogo}
                  alt="Praanroot logo"
                  className="h-20 w-auto drop-shadow-lg sm:h-24 lg:h-28"
                />
              </div>
            </div>

            {/* Headline */}
            <h1
              style={getAnimationStyle("slideFromRight", banner.isVisible, 0.2)}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Rooted in <span className="italic text-primary">Tradition</span>,
              <br />
              Crafted for <span className="italic text-accent">Today</span>.
            </h1>

            {/* Ornamental divider */}
            <div
              style={getAnimationStyle("fadeScale", banner.isVisible, 0.3)}
              className="ml-auto mt-6 flex items-center justify-end gap-3"
            >
              <span className="h-px w-12 bg-primary/40" />
              <Leaf className="h-4 w-4 text-accent" />
              <span className="h-px w-12 bg-primary/40" />
            </div>

            {/* Tagline */}
            <p
              style={getAnimationStyle("slideFromRight", banner.isVisible, 0.35)}
              className="ml-auto mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/75 sm:text-lg"
            >
              At Praanroot, ancient Ayurvedic wisdom meets modern science — every formula
              made with <span className="font-semibold text-foreground">purity, potency,</span> and <span className="font-semibold text-foreground">purpose</span> for women's holistic wellness.
            </p>

            {/* Stat chips */}
            <div
              style={getAnimationStyle("slideFromBottom", banner.isVisible, 0.45)}
              className="mt-8 flex flex-wrap justify-end gap-2"
            >
              {[
                "100% Ayurvedic",
                "Lab Tested",
                "Women-First",
                "Crafted in India",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-primary/15 bg-white/70 px-3.5 py-1.5 font-body text-xs font-medium text-primary backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={getAnimationStyle("slideFromBottom", banner.isVisible, 0.55)}
              className="mt-8 flex flex-wrap justify-end gap-3"
            >
              <a
                href="#about-cards"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-zh-green-light"
              >
                Discover Praanroot
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/about/founders"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-6 py-3 font-body text-sm font-semibold text-primary backdrop-blur transition-all hover:border-accent hover:text-accent"
              >
                Meet the Founders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two interactive cards — overlapping the hero */}
      <section id="about-cards" className="relative z-20 -mt-16 pb-12 pt-12 lg:-mt-20 lg:pb-16">
        <div ref={cards.ref} className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* LEFT — About */}
            <Link
              to="/about/praanroot"
              style={getAnimationStyle("slideFromLeft", cards.isVisible, getDelay(0))}
              className="group block rounded-2xl border bg-card p-8 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/40 hover:shadow-2xl"
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
            </Link>

            {/* RIGHT — Founder */}
            <Link
              to="/about/founders"
              style={getAnimationStyle("slideFromRight", cards.isVisible, getDelay(1))}
              className="group block rounded-2xl border bg-card p-8 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-accent/40 hover:shadow-2xl"
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
