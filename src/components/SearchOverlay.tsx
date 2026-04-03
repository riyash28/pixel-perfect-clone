import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { bestSellers } from "@/data/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const filtered = query.trim()
    ? bestSellers.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Search bar */}
      <div className="relative z-10 border-b border-border bg-card shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-4">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 rounded-lg border border-input bg-background px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="p-2 text-muted-foreground hover:text-foreground" aria-label="Search">
            <Search size={20} />
          </button>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground" aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Results dropdown */}
        {filtered.length > 0 && (
          <div className="mx-auto max-w-4xl border-t border-border px-4 pb-4">
            {filtered.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-10 w-10 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-body text-sm font-medium text-foreground">{product.name}</p>
                  <p className="font-body text-xs text-muted-foreground">₹{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
