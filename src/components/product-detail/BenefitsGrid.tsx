import { Heart, Flame, Clock, Sparkles } from "lucide-react";

const benefits = [
  { icon: Heart, label: "Boosts Libido" },
  { icon: Flame, label: "Cranks Up Your Desire" },
  { icon: Clock, label: "Keeps You Going Longer" },
  { icon: Sparkles, label: "Amplifies Your Pleasure" },
];

const BenefitsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {benefits.map((b, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
        >
          <b.icon size={20} className="shrink-0 text-primary" />
          <span className="font-body text-sm font-medium text-foreground">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BenefitsGrid;
