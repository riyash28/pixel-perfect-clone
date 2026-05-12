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
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0, size: 0 });
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
    // Panel anchored to viewport so it follows during scroll-while-hover
    const size = Math.min(450, Math.max(320, height));
    const vh = window.innerHeight;
    let panelTop = top;
    if (panelTop < 16) panelTop = 16;
    if (panelTop + size > vh - 16) panelTop = Math.max(16, vh - size - 16);
    setPanelPos({ top: panelTop, left: left + width + 24, size });
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

        {/* Zoom Preview Panel - fixed to viewport so it stays visible while scrolling on hover */}
        {isZooming && (
          <div
            className="pointer-events-none fixed z-50 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-2xl animate-in fade-in duration-200 lg:block"
            style={{
              top: panelPos.top,
              left: panelPos.left,
              width: panelPos.size,
              height: panelPos.size,
            }}
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
