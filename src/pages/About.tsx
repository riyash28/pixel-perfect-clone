import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">About ZeroHarm</h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
            ZeroHarm Sciences is a pioneering health and wellness company dedicated to creating
            plant-based supplements using advanced nanotechnology. Our mission is to safeguard
            humanity from harm by delivering nutrients with precision and measurable effectiveness.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
            Founded by Sachin Darbarwar, ZeroHarm bridges the gap between traditional Ayurvedic
            wisdom and modern science. Our patented nano-technology converts nutrients into ultra-small
            particles for faster absorption and higher bioavailability.
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
