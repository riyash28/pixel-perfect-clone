import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import praanrootLogo from "@/assets/praanroot-logo.png";
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

      {/* Hero banner — single centered logo with decorative background */}
      <section className="relative overflow-hidden bg-zh-beige">
        {/* Decorative background layers */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.10),transparent_55%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:42px_42px]"
        />
        {/* Soft floating blobs */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />

        <div
          ref={banner.ref}
          className="relative z-10 mx-auto flex min-h-[440px] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[500px] lg:min-h-[560px] lg:py-20"
        >
          {/* Pill badge */}
          <div
            style={getAnimationStyle("fadeScale", banner.isVisible, 0)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
          </div>

          {/* Single centered logo */}
          <div
            style={getAnimationStyle("fadeScale", banner.isVisible, 0.15)}
            className="relative mt-8"
          >
            {/* Glow ring behind logo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl"
            />
            <img
              src={praanrootLogo}
              alt="Praanroot - Ayurveda Rooted in You"
              className="h-40 w-auto drop-shadow-xl sm:h-48 lg:h-56"
            />
          </div>

          {/* Tagline */}
          <p
            style={getAnimationStyle("slideFromBottom", banner.isVisible, 0.3)}
            className="mt-3 max-w-2xl font-display text-xl italic text-foreground/85 sm:text-2xl lg:text-3xl"
          >
            Ayurveda Rooted in You — purity, potency, and purpose.
          </p>

          {/* Subtle ornamental divider */}
          <div
            style={getAnimationStyle("fadeScale", banner.isVisible, 0.45)}
            className="mt-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-primary/40" />
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
