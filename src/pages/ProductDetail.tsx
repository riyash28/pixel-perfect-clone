import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bestSellers, combos } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/product-detail/ImageGallery";
import BenefitsGrid from "@/components/product-detail/BenefitsGrid";
import ConsumptionSection from "@/components/product-detail/ConsumptionSection";
import OfferCards from "@/components/product-detail/OfferCards";
import TrustBadges from "@/components/product-detail/TrustBadges";
import ProductAccordion from "@/components/product-detail/ProductAccordion";

const allProducts = [...bestSellers, ...combos];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [expanded, setExpanded] = useState(false);

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
  const images = [product.image, product.image, product.image, product.image];

  const description =
    "Back To Teens tablet utilizes advanced nanotechnology and 100% natural, ayurvedic, plant-based ingredients like Horny Goat Weed, Maca Root, and Safed Musli to deliver exceptional benefits. Helps in managing premature ejaculation in men, boosts desire and enhances overall vitality for a more confident lifestyle.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Main 2-Column Section */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-2">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — Image Gallery */}
          <ImageGallery images={images} productName={product.name} discount={discount > 0 ? discount : undefined} />

          {/* RIGHT — Product Details */}
          <div className="flex flex-col gap-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={
                      s <= Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }
                  />
                ))}
              </div>
              <span className="font-body text-sm font-medium text-foreground">
                {product.rating}
              </span>
              <span className="font-body text-sm text-muted-foreground">
                | {product.reviews.toLocaleString("en-IN")} reviews
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              ZeroHarm {product.name}
            </h1>

            {/* Benefits Grid */}
            <BenefitsGrid />

            {/* Description */}
            <div>
              <p
                className={`font-body text-sm leading-relaxed text-muted-foreground ${
                  !expanded ? "line-clamp-3" : ""
                }`}
              >
                {description}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-1 font-body text-sm font-semibold text-primary hover:underline"
              >
                {expanded ? "show less" : "read more"}
              </button>
            </div>

            {/* Featured In */}
            <div className="flex items-center gap-6 rounded-xl bg-secondary px-5 py-3">
              <span className="font-body text-xs font-semibold text-foreground">
                Featured in:
              </span>
              {["Express Nutra", "Deccan Chronicle", "BioSpectrum"].map((name) => (
                <span
                  key={name}
                  className="font-display text-sm font-bold text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* Consumption */}
            <ConsumptionSection />

            {/* Offer Cards */}
            <OfferCards />

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-full border-2 border-primary py-3.5 font-body text-sm font-bold text-primary transition-colors hover:bg-primary/5">
                Add To Cart
              </button>
              <button className="w-full rounded-full bg-primary py-3.5 font-body text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <TrustBadges />

            {/* Accordion */}
            <ProductAccordion />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card p-3 lg:hidden">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-body text-sm font-bold text-primary-foreground">
          <ShoppingCart size={18} /> Add To Cart — ₹{product.price.toLocaleString("en-IN")}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
