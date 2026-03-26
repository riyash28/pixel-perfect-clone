import { Shield, Droplets, Globe, FlaskConical } from "lucide-react";

const items = [
  { icon: Shield, text: "NO SIDE EFFECTS" },
  { icon: Droplets, text: "100% BIOAVAILABLE" },
  { icon: Globe, text: "ADVANCED NANOTECHNOLOGY" },
  { icon: FlaskConical, text: "CLINICALLY PROVEN" },
];

const TickerBar = () => {
  return (
    <div className="overflow-hidden border-y bg-card py-3">
      <div className="animate-ticker flex w-max items-center gap-12">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <item.icon size={18} className="text-primary" />
            <span className="font-body text-xs font-semibold tracking-wider text-foreground">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
