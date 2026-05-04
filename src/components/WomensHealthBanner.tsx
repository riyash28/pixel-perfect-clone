import woman20s from "@/assets/womens-health/woman-20s.png";
import womanExpecting from "@/assets/womens-health/woman-expecting.png";
import woman40s from "@/assets/womens-health/woman-40s.png";

const stages = [
  { img: woman20s, label: "20s" },
  { img: womanExpecting, label: "Expecting" },
  { img: woman40s, label: "40s" },
];

const WomensHealthBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#f7f1ea] via-[#f3ece2] to-[#eaf3ec]">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#fce7eb] opacity-60 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-[#dceadb] opacity-60 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#fbe7d6] opacity-60 blur-2xl" />

      <div className="relative mx-auto flex h-[200px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Left: Text */}
        <div className="flex max-w-[58%] flex-col justify-center">
          <h2 className="font-sans text-base font-extrabold leading-tight tracking-tight text-[#1f3b2d] sm:text-xl md:text-2xl lg:text-[28px]">
            Women's Health Through the Ages
          </h2>
          <p className="mt-1 font-sans text-xs font-medium text-[#5a6b62] sm:text-sm md:text-base">
            Holistic care at every stage of life
          </p>
          <p className="mt-1 hidden font-sans text-xs leading-snug text-[#7a8a82] sm:block md:text-sm">
            Supporting body, mind, and wellness — from your 20s to motherhood and beyond.
          </p>
        </div>

        {/* Right: 3 women */}
        <div className="flex h-full items-end gap-2 sm:gap-4 md:gap-6">
          {stages.map((s) => (
            <div key={s.label} className="flex h-full flex-col items-center justify-end">
              <div className="relative flex h-[150px] w-[70px] items-end justify-center overflow-hidden rounded-t-full bg-white/40 shadow-[0_8px_20px_-8px_rgba(31,59,45,0.25)] sm:h-[160px] sm:w-[90px] md:h-[170px] md:w-[110px]">
                <img
                  src={s.img}
                  alt={`Woman ${s.label}`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1f3b2d] sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomensHealthBanner;