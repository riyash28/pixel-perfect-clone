import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  isCombo?: boolean;
}

const ProductCard = ({ product, isCombo }: ProductCardProps) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Badge */}
      {product.tag && (
        <span className="absolute left-3 top-3 z-10 rounded bg-primary px-2 py-0.5 font-body text-xs font-semibold text-primary-foreground">
          {discount > 0 ? `-${discount}%` : product.tag}
        </span>
      )}

      {/* Image */}
      <div
        className={`flex items-center justify-center overflow-hidden p-4 ${
          isCombo ? "bg-gradient-to-br from-zh-orange to-zh-orange-dark" : "bg-zh-cream"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={280}
          height={280}
          className="h-48 w-48 object-contain transition-transform duration-300 group-hover:scale-105 lg:h-56 lg:w-56"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-body text-sm font-medium text-foreground line-clamp-2 lg:text-base">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-1 flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className={`h-3.5 w-3.5 ${
                  s <= Math.round(product.rating) ? "text-yellow-400" : "text-muted"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-body text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-body text-base font-bold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice > product.price && (
            <span className="font-body text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-accent py-2.5 font-body text-sm font-semibold text-accent-foreground transition-colors hover:bg-zh-orange-dark">
          <ShoppingCart size={16} />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
