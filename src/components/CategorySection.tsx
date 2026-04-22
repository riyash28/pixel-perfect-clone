import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategorySection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground lg:text-4xl">
          Shop by Categories
        </h2>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-8 lg:gap-14">
          {categories.map((cat) => {
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-card shadow-sm transition-all group-hover:border-primary group-hover:shadow-md lg:h-24 lg:w-24">
                  <img src={cat.icon} alt={cat.name} className="h-10 w-10 object-contain" />
                </div>
                <span className="max-w-[100px] text-center font-body text-sm font-medium text-foreground">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
