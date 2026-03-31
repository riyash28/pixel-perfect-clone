import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowLeft, Star, Heart, Minus, Plus, ShoppingCart, Zap, Shield, Leaf, Truck, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bestSellers, combos } from "@/data/products";

const allProducts = [...bestSellers, ...combos];

const mockReviews = [
  { id: 1, name: "Rahul M.", rating: 5, date: "2 weeks ago", text: "Excellent product! Noticed a real difference within the first week. Highly recommended for anyone looking for natural supplements." },
  { id: 2, name: "Priya S.", rating: 4, date: "1 month ago", text: "Good quality product. Packaging was great and delivery was on time. Will order again." },
  { id: 3, name: "Amit K.", rating: 5, date: "3 weeks ago", text: "Best supplement I've tried. The ingredients are clean and I feel more energetic throughout the day." },
  { id: 4, name: "Sneha R.", rating: 4, date: "2 months ago", text: "Nice product, effective results. Took about 2 weeks to start noticing the benefits." },
];

const benefits = [
  "100% Plant-Based & Natural Ingredients",
  "Nano-Technology for Better Absorption",
  "Clinically Tested & FSSAI Approved",
  "No Side Effects – Safe for Daily Use",
  "GMP Certified Manufacturing",
];

const ingredients = [
  "Ashwagandha Extract (KSM-66)",
  "Shilajit (Purified Himalayan)",
  "Safed Musli Extract",
  "Gokshura Extract",
  "Black Pepper Extract (Piperine)",
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("description");

  const product = useMemo(() => allProducts.find((p) => p.id === Number(id)), [id]);

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

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const ratingBreakdown = [
    { stars: 5, percent: 65 },
    { stars: 4, percent: 22 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
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
                <span className="absolute left-4 top-4 z-10 rounded-md bg-destructive px-2.5 py-1 font-body text-xs font-bold text-destructive-foreground">
                  -{discount}%
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
            {/* Thumbnail row (using same image as mock) */}
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
            {/* Tag */}
            {product.tag && (
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold text-primary">
                {product.tag}
              </span>
            )}

            {/* Title */}
            <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}
                  />
                ))}
              </div>
              <span className="font-body text-sm font-medium text-foreground">{product.rating}</span>
              <span className="font-body text-sm text-muted-foreground">({product.reviews.toLocaleString("en-IN")} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-foreground">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {saved > 0 && (
                <>
                  <span className="font-body text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="font-body text-sm font-semibold text-destructive">
                    Save ₹{saved.toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              {product.description}. Formulated with advanced nano-technology for superior absorption and faster results. 100% natural, plant-based ingredients trusted by thousands.
            </p>

            {/* Benefits */}
            <div className="space-y-2">
              <h3 className="font-body text-sm font-semibold text-foreground">Key Benefits</h3>
              <ul className="space-y-1.5">
                {benefits.slice(0, 4).map((b, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <Leaf size={14} className="mt-0.5 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

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
              {/* Qty */}
              <div className="flex items-center rounded-lg border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="flex h-11 w-12 items-center justify-center border-x border-border font-body text-sm font-semibold text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-body text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <ShoppingCart size={18} />
                ADD TO CART
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary"
              >
                <Heart size={18} className={wishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"} />
              </button>
            </div>

            {/* Buy Now */}
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-body text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90">
              <Zap size={18} />
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Extra Sections */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="space-y-3">
          {/* Description */}
          <Accordion title="Product Description" isOpen={openSection === "description"} onToggle={() => toggleSection("description")}>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              {product.name} is a premium ayurvedic supplement crafted with cutting-edge nano-technology for enhanced bioavailability.
              Each ingredient is carefully sourced and clinically tested to ensure maximum potency and safety. Our formulations are
              FSSAI approved and manufactured in GMP-certified facilities, ensuring the highest quality standards.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              This product is designed for daily use and is safe for long-term consumption. Results may vary, but most users
              report noticeable improvements within 2-4 weeks of consistent use. Each bottle contains a 30-day supply.
            </p>
          </Accordion>

          {/* Benefits */}
          <Accordion title="Benefits & Features" isOpen={openSection === "benefits"} onToggle={() => toggleSection("benefits")}>
            <ul className="space-y-2">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <Leaf size={14} className="mt-0.5 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Ingredients */}
          <Accordion title="Ingredients" isOpen={openSection === "ingredients"} onToggle={() => toggleSection("ingredients")}>
            <ul className="space-y-2">
              {ingredients.map((ing, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground">
                  • {ing}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Reviews */}
          <Accordion title={`Reviews (${product.reviews.toLocaleString("en-IN")})`} isOpen={openSection === "reviews"} onToggle={() => toggleSection("reviews")}>
            {/* Rating Summary */}
            <div className="mb-6 flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-5xl font-bold text-foreground">{product.rating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className={s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"} />
                  ))}
                </div>
                <span className="font-body text-xs text-muted-foreground">{product.reviews.toLocaleString("en-IN")} reviews</span>
              </div>
              <div className="flex-1 space-y-1.5">
                {ratingBreakdown.map((r) => (
                  <div key={r.stars} className="flex items-center gap-2">
                    <span className="w-3 font-body text-xs text-muted-foreground">{r.stars}</span>
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-yellow-400" style={{ width: `${r.percent}%` }} />
                    </div>
                    <span className="w-8 font-body text-xs text-muted-foreground">{r.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-body text-xs font-bold text-primary-foreground">
                        {review.name[0]}
                      </div>
                      <span className="font-body text-sm font-semibold text-foreground">{review.name}</span>
                    </div>
                    <span className="font-body text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="mt-2 flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} className={s <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"} />
                    ))}
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Simple accordion sub-component */
const Accordion = ({ title, isOpen, onToggle, children }: { title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) => (
  <div className="overflow-hidden rounded-xl border border-border bg-card">
    <button onClick={onToggle} className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-secondary/50">
      <span className="font-body text-base font-semibold text-foreground">{title}</span>
      {isOpen ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
    </button>
    {isOpen && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
  </div>
);

export default ProductDetail;
