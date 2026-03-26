import { ShoppingCart, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductOverlayProps {
  products: Product[];
  visible: boolean;
  onToggle: () => void;
}

const ProductOverlay = ({ products, visible, onToggle }: ProductOverlayProps) => {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
        aria-label={visible ? "Hide products" : "Show products"}
      >
        {visible ? <X size={18} /> : <ShoppingCart size={18} />}
      </button>

      {/* Product drawer */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="rounded-t-2xl bg-card/90 backdrop-blur-md p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-muted" />
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Featured Products
          </p>
          <div className="flex flex-col gap-3 max-h-[260px] overflow-y-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 rounded-xl bg-background/80 p-2.5 transition-colors hover:bg-background"
              >
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-medium text-foreground truncate">
                    {product.name}
                  </p>
                  <p className="font-body text-sm font-bold text-accent">
                    {product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-shrink-0 flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 font-body text-xs font-semibold text-accent-foreground transition-colors hover:bg-zh-orange-dark"
                >
                  <ShoppingCart size={13} />
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverlay;
