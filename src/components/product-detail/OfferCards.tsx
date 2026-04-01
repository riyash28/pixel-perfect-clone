import { useState } from "react";
import { Check, Star, BadgePercent } from "lucide-react";

interface Offer {
  id: number;
  bottles: number;
  tablets: number;
  months: number;
  discount: number;
  price: number;
  originalPrice: number;
  perTablet: number;
  badge?: string;
  badgeColor?: string;
}

const offers: Offer[] = [
  {
    id: 1,
    bottles: 3,
    tablets: 180,
    months: 3,
    discount: 38.86,
    price: 2199,
    originalPrice: 3597,
    perTablet: 12.21,
    badge: "Best Results",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    bottles: 1,
    tablets: 60,
    months: 1,
    discount: 8.34,
    price: 1099,
    originalPrice: 1199,
    perTablet: 18.32,
  },
  {
    id: 3,
    bottles: 2,
    tablets: 120,
    months: 2,
    discount: 29.15,
    price: 1699,
    originalPrice: 2398,
    perTablet: 14.16,
    badge: "Money Saver",
    badgeColor: "bg-accent",
  },
];

const OfferCards = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid grid-cols-3 gap-3">
      {offers.map((offer, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={offer.id}
            onClick={() => setSelected(i)}
            className={`relative flex flex-col rounded-xl border-2 p-4 text-left transition-all hover:shadow-md ${
              isSelected
                ? "border-primary bg-card shadow-md"
                : "border-border bg-card hover:border-muted-foreground/30"
            }`}
          >
            {/* Check icon */}
            {isSelected && (
              <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                <Check size={12} className="text-primary-foreground" />
              </div>
            )}

            <span className="font-display text-base font-bold text-foreground">
              {offer.bottles} bottle{offer.bottles > 1 ? "s" : ""}
            </span>
            <span className="font-body text-xs font-semibold text-foreground">
              {offer.tablets} Tablets
            </span>
            <span className="font-body text-xs text-muted-foreground">
              {offer.months} month{offer.months > 1 ? "s" : ""}
            </span>

            <span className="mt-2 font-body text-xs font-semibold text-destructive">
              -{offer.discount.toFixed(2)}% off
            </span>

            <span className="mt-1 font-display text-xl font-bold text-foreground">
              ₹{offer.price.toLocaleString("en-IN")}
            </span>
            <span className="font-body text-xs text-muted-foreground line-through">
              ₹{offer.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="font-body text-[10px] text-muted-foreground">
              Incl. of all taxes
            </span>

            <span className="mt-1 font-body text-xs font-semibold text-destructive">
              Save ₹{(offer.originalPrice - offer.price).toLocaleString("en-IN")}/-
            </span>
            <span className="font-body text-[10px] text-muted-foreground">
              ₹ {offer.perTablet.toFixed(2)} / tablet
            </span>

            {/* Badge */}
            {offer.badge && (
              <div
                className={`mt-3 -mx-4 -mb-4 flex items-center justify-center gap-1.5 rounded-b-xl py-2 font-body text-xs font-bold text-primary-foreground ${offer.badgeColor}`}
              >
                {offer.badgeColor === "bg-primary" ? (
                  <Star size={14} />
                ) : (
                  <BadgePercent size={14} />
                )}
                {offer.badge}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default OfferCards;
