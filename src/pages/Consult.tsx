import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Consult = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
            Consult Our Experts
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Get personalized health advice from our panel of experienced Ayurvedic doctors and wellness experts.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-8 text-center transition-shadow hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Free Consultation</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Talk to our Ayurvedic experts for free health assessment and personalized supplement recommendations.
              </p>
              <button className="mt-6 rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-zh-green-light">
                Book Now
              </button>
            </div>
            <div className="rounded-xl border bg-card p-8 text-center transition-shadow hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">WhatsApp Support</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Reach us directly on WhatsApp for quick queries about products, dosage, and health concerns.
              </p>
              <button className="mt-6 rounded-full bg-accent px-6 py-2.5 font-body text-sm font-semibold text-accent-foreground transition-colors hover:bg-zh-orange-dark">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Consult;
