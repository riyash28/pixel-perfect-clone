import { Headphones, ShieldCheck, Atom } from "lucide-react";

const badges = [
  { icon: Headphones, label: "Customer Support", sub: "10am–7pm" },
  { icon: ShieldCheck, label: "90 Day Satisfaction", sub: "Guarantee" },
  { icon: Atom, label: "Backed by", sub: "Nano-Technology" },
];

const TrustBadges = () => {
  return (
    <div className="flex justify-around py-6">
      {badges.map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <b.icon size={24} className="text-foreground" />
          </div>
          <div>
            <p className="font-body text-xs font-medium text-foreground">{b.label}</p>
            <p className="font-body text-[10px] text-muted-foreground">{b.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
