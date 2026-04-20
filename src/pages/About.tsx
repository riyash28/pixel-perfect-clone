import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import praanrootLogo from "@/assets/praanroot-logo.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <img
            src={praanrootLogo}
            alt=""
            className="w-[420px] opacity-[0.05] blur-[2px] animate-float-logo sm:w-[600px] lg:w-[800px] lg:opacity-[0.07]"
          />
        </div>
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
      <Footer />
    </div>
  );
};

export default About;
