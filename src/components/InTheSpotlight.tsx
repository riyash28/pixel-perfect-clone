import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { bestSellers, combos } from "@/data/products";

const InTheSpotlight = () => {
  const [activeTab, setActiveTab] = useState<"best" | "combos">("best");
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const productsPerPage = 4;
  const currentProducts = activeTab === "best" ? bestSellers : combos;
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  const visibleProducts = currentProducts.slice(
    page * productsPerPage,
    page * productsPerPage + productsPerPage
  );

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const handleTabChange = (tab: "best" | "combos") => {
    setActiveTab(tab);
    setPage(0);
  };

  return (
    <section className="bg-zh-beige py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          In The Spotlight
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => handleTabChange("best")}
            className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all ${
              activeTab === "best"
                ? "bg-primary text-primary-foreground"
                : "border border-primary bg-transparent text-primary hover:bg-primary/10"
            }`}
          >
            Best Seller
          </button>
          <button
            onClick={() => handleTabChange("combos")}
            className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all ${
              activeTab === "combos"
                ? "bg-primary text-primary-foreground"
                : "border border-primary bg-transparent text-primary hover:bg-primary/10"
            }`}
          >
            Combos
          </button>
        </div>

        {/* Products with arrows */}
        <div className="relative mt-10">
          {/* Left Arrow */}
          {page > 0 && (
            <button
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Grid */}
          <div ref={scrollRef} className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isCombo={activeTab === "combos"}
              />
            ))}
          </div>

          {/* Right Arrow */}
          {page < totalPages - 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Page dots */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InTheSpotlight;
