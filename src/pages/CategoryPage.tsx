import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categoryProducts, categories } from "@/data/products";
import { ChevronRight } from "lucide-react";
import womensHealthBanner from "@/assets/womens-health-banner.png";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const category = categories.find((c) => c.slug === categoryName);
  const products = categoryProducts[categoryName || ""] || [];

  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex min-h-[60vh] flex-col items-center justify-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Category Not Found</h1>
          <Link to="/" className="mt-4 font-body text-primary underline">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-zh-beige-dark py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4">
          <Link to="/" className="font-body text-xs text-muted-foreground hover:text-primary">Home</Link>
          <ChevronRight size={12} className="text-muted-foreground" />
          <span className="font-body text-xs font-medium text-foreground">{category.name}</span>
        </div>
      </div>

      {/* Women's Health Hero Banner */}
      {categoryName === "womens-health" && (
        <section className="w-full">
          <img
            src={womensHealthBanner}
            alt="Rooted in Ayurveda. Made for Her Wellness."
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </section>
      )}

      {/* Header */}
      <section className={`bg-zh-beige py-12 lg:py-16 ${categoryName === "womens-health" ? "hidden" : ""}`}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            {category.name}
          </h1>
          <p className="mx-auto mt-3 max-w-lg font-body text-base text-muted-foreground">
            Explore our {category.name} collection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-6 font-body text-sm text-muted-foreground">
            Showing {products.length} products
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
