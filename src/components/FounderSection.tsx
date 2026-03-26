import founderImg from "@/assets/founder.jpg";
import { Link } from "react-router-dom";

const FounderSection = () => {
  return (
    <section className="bg-zh-beige py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Meet the Founder
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Sachin Darbarwar
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Our aim is to safeguard humanity from harm, that is how Zeroharm was born.
            After leading Simply Fresh Private Limited, India's largest state-of-the-art precision farm,
            and working across technology ecosystems, I saw how innovation can transform industries.
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
            Zeroharm was created to bridge the bioavailability gap by combining nanotechnology
            with plant science, ensuring nutrients are delivered with precision and measurable effectiveness.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-zh-green-light"
          >
            About Us
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={founderImg}
            alt="Sachin Darbarwar - Founder of ZeroHarm"
            loading="lazy"
            width={400}
            height={460}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
