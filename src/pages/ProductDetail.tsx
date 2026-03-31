import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowLeft, Star, Heart, Minus, Plus, ShoppingCart, Zap, Shield, Leaf, Truck, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bestSellers, combos } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const allProducts = [...bestSellers, ...combos];

const mockReviews = [
  { id: 1, name: "Suresh T.", rating: 5, date: "5 days ago", text: "My digestion has improved dramatically. No more bloating!", verified: true },
  { id: 2, name: "Deepa N.", rating: 5, date: "2 weeks ago", text: "Best probiotic I've used. Can feel the difference in a week.", verified: true },
  { id: 3, name: "Arun V.", rating: 4, date: "1 month ago", text: "Good product for gut health. Consistent quality.", verified: true },
  { id: 4, name: "Sneha R.", rating: 4, date: "2 months ago", text: "Nice product, effective results. Took about 2 weeks to start noticing the benefits.", verified: false },
];

const benefitsList = [
  "Improves digestion and nutrient absorption",
  "Boosts gut immunity",
  "Reduces bloating and gas",
  "Supports healthy gut microbiome",
  "Nano-optimized for 3x better absorption",
];

const ingredients = [
  "Ashwagandha Extract (KSM-66)",
  "Shilajit (Purified Himalayan)",
  "Safed Musli Extract",
  "Gokshura Extract",
  "Black Pepper Extract (Piperine)",
];

const ratingBreakdown = [
  { stars: 5, percent: 62 },
  { stars: 4, percent: 24 },
  { stars: 3, percent: 9 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

type TabKey = "description" | "benefits" | "ingredients" | "reviews";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  const product = useMemo(() => allProducts.find((p) => p.id === Number(id)), [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return bestSellers.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32">
          <p className="font-body text-lg text-muted-foreground">Product not found.</p>
          <Link to="/shop" className="mt-4 font-body text-sm font-semibold text-primary underline">
            ← Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const saved = product.originalPrice - product.price;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "description", label: "Description" },
    { key: "benefits", label: "Benefits" },
    { key: "ingredients", label: "Ingredients" },
    { key: "reviews", label: `Reviews (${product.reviews.toLocaleString("en-IN")})` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2">
        <Link to="/shop" className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Main Product Section */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-2">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — Image */}
          <div className="flex flex-col gap-4">
            <div className="group relative overflow-hidden rounded-2xl bg-secondary">
              {discount > 0 && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 font-body text-xs font-bold text-primary-foreground">
                  {discount}% OFF
                </span>
              )}
              <div className="flex items-center justify-center p-8 lg:p-12">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-72 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`overflow-hidden rounded-lg border-2 bg-secondary p-2 transition-all ${
                    i === 0 ? "border-primary" : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <img src={product.image} alt={`${product.name} view ${i + 1}`} className="h-16 w-16 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="flex flex-col gap-5">
            {product.tag && (
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold text-primary">
                {product.tag}
              </span>
            )}

            <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className={s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"} />
                ))}
              </div>
              <span className="font-body text-sm font-medium text-foreground">{product.rating}</span>
              <span className="font-body text-sm text-muted-foreground">({product.reviews.toLocaleString("en-IN")} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
              {saved > 0 && (
                <>
                  <span className="font-body text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="font-body text-sm font-semibold text-destructive">Save ₹{saved.toLocaleString("en-IN")}</span>
                </>
              )}
            </div>

            <p className="font-body text-base leading-relaxed text-muted-foreground">
              {product.description}. Formulated with advanced nano-technology for superior absorption and faster results. 100% natural, plant-based ingredients trusted by thousands.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 rounded-xl bg-secondary p-4">
              <div className="flex items-center gap-2 font-body text-xs text-foreground">
                <Truck size={16} className="text-primary" /> Free Delivery
              </div>
              <div className="flex items-center gap-2 font-body text-xs text-foreground">
                <Shield size={16} className="text-primary" /> Genuine Product
              </div>
              <div className="flex items-center gap-2 font-body text-xs text-foreground">
                <Leaf size={16} className="text-primary" /> 100% Natural
              </div>
            </div>

            {/* Quantity + Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center rounded-lg border border-border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground">
                  <Minus size={16} />
                </button>
                <span className="flex h-11 w-12 items-center justify-center border-x border-border font-body text-sm font-semibold text-foreground">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground">
                  <Plus size={16} />
                </button>
              </div>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-body text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <ShoppingCart size={18} /> ADD TO CART
              </button>
              <button onClick={() => setWishlisted(!wishlisted)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary">
                <Heart size={18} className={wishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"} />
              </button>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-body text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90">
              <Zap size={18} /> BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        {/* Tab Headers */}
        <div className="border-b border-border">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap border-b-2 pb-3 pt-1 font-body text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="pt-8">
          {activeTab === "description" && (
            <div className="max-w-3xl space-y-4 animate-in fade-in duration-300">
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                {product.name} combines the power of prebiotics and probiotics in nano-optimized capsules for superior gut health. This comprehensive formula supports digestion, boosts immunity, and promotes overall wellness from your core.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Each ingredient is carefully sourced and clinically tested to ensure maximum potency and safety. Our formulations are FSSAI approved and manufactured in GMP-certified facilities, ensuring the highest quality standards. Results may vary, but most users report noticeable improvements within 2-4 weeks.
              </p>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="grid gap-4 sm:grid-cols-2 animate-in fade-in duration-300">
              {benefitsList.map((b, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-card p-4 border border-border">
                  <Check size={18} className="shrink-0 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="max-w-2xl animate-in fade-in duration-300">
              <ul className="space-y-3">
                {ingredients.map((ing, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground">• {ing}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col gap-8 lg:flex-row animate-in fade-in duration-300">
              {/* Rating Summary */}
              <div className="shrink-0 rounded-xl bg-card border border-border p-6 lg:w-80">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">{product.rating}<span className="text-xl font-normal text-muted-foreground">/5</span></span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} className={s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"} />
                    ))}
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{product.reviews.toLocaleString("en-IN")} reviews</span>
                </div>
                <div className="mt-5 space-y-2">
                  {ratingBreakdown.map((r) => (
                    <div key={r.stars} className="flex items-center gap-2">
                      <span className="w-3 font-body text-xs text-muted-foreground">{r.stars}</span>
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-yellow-400" style={{ width: `${r.percent}%` }} />
                      </div>
                      <span className="w-8 text-right font-body text-xs text-muted-foreground">{r.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="flex-1 space-y-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-body text-sm font-semibold text-foreground">{review.name}</span>
                        {review.verified && (
                          <span className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 font-body text-[10px] font-medium text-primary">Verified</span>
                        )}
                      </div>
                      <span className="font-body text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="mt-2 flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className={s <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"} />
                      ))}
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card p-3 lg:hidden">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-body text-sm font-bold text-primary-foreground">
          <ShoppingCart size={18} /> ADD TO CART — ₹{(product.price * quantity).toLocaleString("en-IN")}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
