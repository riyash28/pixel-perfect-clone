import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="Built for the Modern Man - ZeroHarm Supplements"
        width={1920}
        height={800}
        className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
      />
      <div className="absolute inset-0 flex items-center justify-end bg-gradient-to-l from-background/60 via-transparent to-transparent">
        <div className="mr-8 max-w-lg text-right lg:mr-20">
          <p className="font-body text-sm tracking-widest text-foreground/70">Built for the</p>
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Modern Man
          </h1>
          <p className="mt-3 font-body text-base text-foreground/80 sm:text-lg">
            From <strong>Stress to Stamina, Fertility to Focus</strong>
            <br />
            Nano Supplements that keep you at your peak
          </p>
          <button className="mt-6 rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-zh-green-light">
            Reignite Your Energy
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
