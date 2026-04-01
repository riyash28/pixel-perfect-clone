import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  discount?: number;
}

const ImageGallery = ({ images, productName, discount }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
        {discount && discount > 0 && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 font-body text-xs font-bold text-primary-foreground">
            {discount}% OFF
          </span>
        )}
        <div className="flex aspect-square items-center justify-center">
          <img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={productName}
            className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 animate-in fade-in duration-300"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`shrink-0 overflow-hidden rounded-xl border-2 bg-card p-2 transition-all ${
              i === selectedIndex
                ? "border-primary shadow-sm"
                : "border-transparent hover:border-muted-foreground/30"
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${i + 1}`}
              className="h-16 w-16 object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
