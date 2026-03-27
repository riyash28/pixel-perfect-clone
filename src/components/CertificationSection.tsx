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
  // Double the items for seamless infinite scroll
  const marqueeItems = [...certifications, ...certifications];

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
          Certified & Trusted By
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto">
          Backed by leading certifications and quality standards
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {marqueeItems.map((cert, i) => (
            <div
              key={`${cert.id}-${i}`}
              className="flex flex-col items-center justify-center mx-8 md:mx-14 group cursor-default"
            >
              <img
                src={cert.image}
                alt={cert.name}
                loading="lazy"
                width={512}
                height={512}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <span className="mt-3 text-xs md:text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
