import { useEffect, useState, useCallback } from "react";
import { X, Loader2 } from "lucide-react";
import ProductOverlay from "./ProductOverlay";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ReelModalProps {
  reelUrl: string;
  products: Product[];
  onClose: () => void;
}

function extractReelId(url: string): string {
  const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : "";
}

const ReelModal = ({ reelUrl, products, onClose }: ReelModalProps) => {
  const [loading, setLoading] = useState(true);
  const [showProducts, setShowProducts] = useState(false);

  const reelId = extractReelId(reelUrl);
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed`;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col lg:flex-row gap-0 lg:gap-6 items-center lg:items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 lg:-top-2 lg:-right-12 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card backdrop-blur-sm transition-colors hover:bg-card/40"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Video container */}
        <div className="relative w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden bg-foreground shadow-2xl">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground">
              <Loader2 size={32} className="text-card animate-spin" />
            </div>
          )}
          <iframe
            src={embedUrl}
            className="h-full w-full border-0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            title="Instagram Reel"
            onLoad={() => setLoading(false)}
          />

          {/* Mobile product overlay */}
          <div className="lg:hidden">
            <ProductOverlay
              products={products}
              visible={showProducts}
              onToggle={() => setShowProducts((v) => !v)}
            />
          </div>
        </div>

        {/* Desktop side product panel */}
        <div className="hidden lg:flex flex-col w-[320px] rounded-2xl bg-card p-5 shadow-2xl overflow-y-auto max-h-[80vh]">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            Shop This Reel
          </h3>
          <p className="font-body text-xs text-muted-foreground mb-5">
            Tap a product to add it to your cart
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* Desktop product card inside side panel */
function ProductCard({ product }: { product: { id: number; name: string; price: string; image: string } }) {
  const { toast } = await_toast();

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border p-3 transition-shadow hover:shadow-md">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body text-sm font-medium text-foreground truncate">{product.name}</p>
        <p className="font-body text-base font-bold text-accent mt-0.5">{product.price}</p>
        <button
          onClick={() =>
            toast({ title: "Added to cart", description: `${product.name} has been added to your cart.` })
          }
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent py-2 font-body text-xs font-semibold text-accent-foreground transition-colors hover:bg-zh-orange-dark"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* Helper to use toast outside hook context - we import directly */
function await_toast() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = require("@/hooks/use-toast") as { toast: typeof import("@/hooks/use-toast").toast };
  return { toast };
}

export default ReelModal;
