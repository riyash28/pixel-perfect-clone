import ayushImg from "@/assets/certifications/ayush.png";
import isoImg from "@/assets/certifications/iso.png";
import gmpImg from "@/assets/certifications/gmp.png";
import fdaImg from "@/assets/certifications/fda.png";
import naturalImg from "@/assets/certifications/natural.png";

const certifications = [
  { id: 1, name: "AYUSH Certified", image: ayushImg },
  { id: 2, name: "ISO Certified", image: isoImg },
  { id: 3, name: "GMP Certified", image: gmpImg },
  { id: 4, name: "FDA Approved", image: fdaImg },
  { id: 5, name: "100% Natural", image: naturalImg },
];

const CertificationSection = () => {
  const marqueeItems = [...certifications, ...certifications];

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
          Certified By
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto">
          Backed by leading certifications and quality standards
        </p>
      </div>

      <div className="relative overflow-hidden group/marquee">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] py-8">
          {marqueeItems.map((cert, i) => (
            <div
              key={`${cert.id}-${i}`}
              className="flex flex-col items-center justify-center mx-8 md:mx-14 group/logo cursor-default relative"
            >
              <img
                src={cert.image}
                alt={cert.name}
                loading="lazy"
                width={512}
                height={512}
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-[350ms] ease-in-out group-hover/logo:scale-[2.2] group-hover/logo:md:scale-[2.2] group-hover/logo:max-sm:scale-[1.3] group-hover/logo:z-30 group-hover/logo:drop-shadow-lg"
                style={{ transformOrigin: "center center" }}
              />
              <span className="mt-3 text-xs md:text-sm font-body text-muted-foreground transition-opacity duration-300 group-hover/logo:opacity-0">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
