import { Clock, UtensilsCrossed, CalendarDays } from "lucide-react";

const items = [
  { icon: Clock, label: "Twice a Day" },
  { icon: UtensilsCrossed, label: "30 min Before Breakfast & Dinner" },
  { icon: CalendarDays, label: "3 Months For Better Results" },
];

const ConsumptionSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-bold text-foreground">
        Consumption
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card">
              <item.icon size={24} className="text-primary" />
            </div>
            <span className="font-body text-xs font-medium leading-tight text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumptionSection;
