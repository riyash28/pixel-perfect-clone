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

      {/* Top banner */}
      <section className="relative overflow-hidden bg-zh-beige/40 py-14 lg:py-20">
        <div ref={banner.ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div style={getAnimationStyle("fadeScale", banner.isVisible, 0)} className="flex justify-center">
            <img
              src={praanrootLogo}
              alt="Praanroot - Ayurveda Rooted in You"
              className="h-40 w-auto sm:h-48 lg:h-56"
            />
          </div>
          <p
            style={getAnimationStyle("slideFromBottom", banner.isVisible, 0.2)}
            className="mx-auto mt-4 max-w-xl font-body text-base italic text-muted-foreground lg:text-lg"
          >
            Ayurveda Rooted in You — purity, potency, and purpose.
          </p>
        </div>
      </section>

      {/* Two interactive cards */}
      <section className="py-12 lg:py-16">
        <div ref={cards.ref} className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* LEFT — About */}
            <Link
              to="/about/praanroot"
              style={getAnimationStyle("slideFromLeft", cards.isVisible, getDelay(0))}
              className="group block rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:border-primary/40 hover:shadow-lg"
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
              className="group block rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:border-accent/40 hover:shadow-lg"
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
