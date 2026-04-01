import { useState } from "react";
import { Check, Star } from "lucide-react";

type TabKey = "description" | "benefits" | "ingredients" | "reviews";

const tabs: { key: TabKey; label: string; count?: number }[] = [
  { key: "description", label: "Description" },
  { key: "benefits", label: "Benefits" },
  { key: "ingredients", label: "Ingredients" },
  { key: "reviews", label: "Reviews", count: 1142 },
];

const benefits = [
  "Improves digestion and nutrient absorption",
  "Boosts gut immunity",
  "Reduces bloating and gas",
  "Supports healthy gut microbiome",
  "Nano-optimized for 3x better absorption",
];

const ingredients = [
  "Lactobacillus",
  "Bifidobacterium",
  "Triphala",
  "Jeera",
  "Ajwain",
  "Prebiotic Fiber",
];

const ratingBreakdown = [
  { stars: 5, pct: 62 },
  { stars: 4, pct: 24 },
  { stars: 3, pct: 9 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 2 },
];

const reviews = [
  { name: "Suresh T.", rating: 5, time: "5 days ago", comment: "My digestion has improved dramatically. No more bloating!" },
  { name: "Deepa N.", rating: 5, time: "2 weeks ago", comment: "Best probiotic I've used. Can feel the difference in a week." },
  { name: "Arun V.", rating: 4, time: "1 month ago", comment: "Good product for gut health. Consistent quality." },
];

const TabsSection = () => {
  const [active, setActive] = useState<TabKey>("description");

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative whitespace-nowrap pb-3 pt-1 font-body text-sm transition-colors ${
                active === tab.key
                  ? "font-bold text-foreground"
                  : "font-medium text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {tab.count != null && ` (${tab.count.toLocaleString("en-IN")})`}
              {active === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div
        key={active}
        className="animate-in fade-in slide-in-from-bottom-2 pt-8 duration-300"
      >
        {active === "description" && (
          <p className="max-w-3xl font-body text-sm leading-relaxed text-muted-foreground">
            Gut Army combines the power of prebiotics and probiotics in nano-optimized capsules for superior
            gut health. This comprehensive formula supports digestion, boosts immunity, and promotes overall
            wellness from your core. Formulated using advanced nanotechnology for 3x better absorption,
            each capsule delivers targeted benefits to your digestive system.
          </p>
        )}

        {active === "benefits" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-xl bg-secondary px-5 py-4 transition-transform hover:scale-[1.02]"
              >
                <Check size={18} className="shrink-0 text-primary" />
                <span className="font-body text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        )}

        {active === "ingredients" && (
          <div className="flex flex-wrap gap-3">
            {ingredients.map((ing) => (
              <span
                key={ing}
                className="rounded-full bg-secondary px-5 py-2.5 font-body text-sm font-medium text-foreground"
              >
                {ing}
              </span>
            ))}
          </div>
        )}

        {active === "reviews" && (
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Rating Summary */}
            <div className="shrink-0 rounded-xl bg-secondary p-6 lg:w-80">
              <div className="mb-1 text-center font-display text-5xl font-bold text-foreground">
                4.59<span className="text-lg font-normal text-muted-foreground">/5</span>
              </div>
              <div className="mb-1 flex justify-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={s <= 4 ? "fill-yellow-400 text-yellow-400" : "text-muted"}
                  />
                ))}
              </div>
              <p className="mb-4 text-center font-body text-sm text-muted-foreground">
                1,142 reviews
              </p>
              <div className="space-y-2">
                {ratingBreakdown.map((r) => (
                  <div key={r.stars} className="flex items-center gap-2">
                    <span className="w-4 font-body text-xs font-medium text-foreground">{r.stars}</span>
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-yellow-400"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-body text-xs text-muted-foreground">
                      {r.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="flex-1 space-y-4">
              {reviews.map((rev) => (
                <div key={rev.name} className="rounded-xl border border-border p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm font-bold text-foreground">{rev.name}</span>
                      <span className="rounded bg-primary/10 px-2 py-0.5 font-body text-[10px] font-semibold text-primary">
                        Verified
                      </span>
                    </div>
                    <span className="font-body text-xs text-muted-foreground">{rev.time}</span>
                  </div>
                  <div className="mb-2 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className={s <= rev.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
