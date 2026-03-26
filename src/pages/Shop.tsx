import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { bestSellers, combos } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold text-foreground">All Products</h1>
          <p className="mt-2 font-body text-base text-muted-foreground">
            Explore our complete range of plant-based nano supplements
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {[...bestSellers, ...combos].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
