import { Percent, Gift, Truck, Wallet, BadgePercent } from "lucide-react";

const items = [
  { icon: Percent, text: "Get 10% off on Orders above ₹899" },
  { icon: BadgePercent, text: "Get 11% off + Free Gift on Orders above ₹1199" },
  { icon: Gift, text: "Get 15% off + Free Gift on Orders above ₹1599" },
  { icon: Truck, text: "Free Delivery across all India" },
  { icon: Wallet, text: "COD available" },
];

const TickerBar = () => {
  return (
    <div className="overflow-hidden border-y bg-card py-3">
      <div className="animate-ticker flex w-max items-center gap-12">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <item.icon size={18} className="text-primary" />
            <span className="font-body text-sm font-bold tracking-wider text-foreground">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
