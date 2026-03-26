import { GraduationCap, CloudRain, Leaf, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "13,000+", label: "Children Education Supported" },
  { icon: CloudRain, value: "7,681", label: "CO₂ Tonnes Removed" },
  { icon: Leaf, value: "101,602 Kgs+", label: "Plastic Removal Assisted" },
  { icon: Award, value: "48 Scholarships", label: "For Higher Education Granted" },
];

const ImpactSection = () => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-semibold text-primary-foreground lg:text-4xl">
          Caring For Earth, Starting With Education
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon size={36} className="text-primary-foreground/80" />
              <h3 className="mt-3 font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
                {stat.value}
              </h3>
              <p className="mt-1 font-body text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
