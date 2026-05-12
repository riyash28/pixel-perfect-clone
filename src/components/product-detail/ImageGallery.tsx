import { useState, useRef } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  discount?: number;
}

const ImageGallery = ({ images, productName, discount }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const LENS_SIZE = 140;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const cx = e.clientX - left;
    const cy = e.clientY - top;
    const x = Math.max(0, Math.min(100, (cx / width) * 100));
    const y = Math.max(0, Math.min(100, (cy / height) * 100));
    setPosition({ x, y });
    setLensPos({
      x: Math.max(0, Math.min(width - LENS_SIZE, cx - LENS_SIZE / 2)),
      y: Math.max(0, Math.min(height - LENS_SIZE, cy - LENS_SIZE / 2)),
    });
  };

  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex gap-6">
        {/* Main Image */}
        <div className="flex-1 flex flex-col gap-4">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-crosshair"
          >
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
                className="h-full w-full object-cover rounded-2xl transition-transform duration-500 animate-in fade-in"
              />
            </div>
            {/* Hover lens */}
            {isZooming && (
              <div
                className="pointer-events-none absolute hidden lg:block rounded-md border border-white/60 bg-white/30 backdrop-blur-[1px] shadow-md transition-opacity duration-200"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  transform: `translate(${lensPos.x}px, ${lensPos.y}px)`,
                }}
              />
            )}
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

        {/* Zoom Preview Panel - desktop only, appears on hover, positioned absolutely so it floats above adjacent column */}
        {isZooming && (
          <div
            className="pointer-events-none absolute left-full top-0 z-30 ml-6 hidden aspect-square w-[450px] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl animate-in fade-in duration-200 lg:block"
          >
            <div
              className="h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url(${images[selectedIndex]})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
                backgroundSize: "250%",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
