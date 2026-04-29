import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import praanrootLogo from "@/assets/praanroot-logo.png";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { getAnimationStyle, getDelay } from "@/lib/animationVariants";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const banner = useInViewAnimation<HTMLDivElement>();
  const cards = useInViewAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner with background image */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
          <img
            src={aboutHeroBg}
            alt="Ayurvedic herbs and dropper bottles"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Soft overlay to keep the logo readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-zh-beige/85 via-zh-beige/55 to-transparent" />

          <div
            ref={banner.ref}
            className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 lg:px-10"
          >
            <div
              style={getAnimationStyle("fadeScale", banner.isVisible, 0)}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
                Our Brand
              </span>
            </div>

            <div
              style={getAnimationStyle("fadeScale", banner.isVisible, 0.15)}
              className="mt-6"
            >
              <img
                src={praanrootLogo}
                alt="Praanroot - Ayurveda Rooted in You"
                className="h-32 w-auto drop-shadow-md sm:h-40 lg:h-48"
              />
            </div>

            <p
              style={getAnimationStyle("slideFromBottom", banner.isVisible, 0.3)}
              className="mt-5 max-w-xl font-display text-xl italic text-foreground/90 sm:text-2xl lg:text-3xl"
            >
              Ayurveda Rooted in You — purity, potency, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Two interactive cards — overlapping the hero */}
      <section className="relative z-20 -mt-20 pb-12 lg:-mt-28 lg:pb-16">
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
