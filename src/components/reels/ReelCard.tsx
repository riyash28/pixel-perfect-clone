import { Play, ShoppingBag } from "lucide-react";

interface ReelCardProps {
  videoUrl: string;
  onPlay: () => void;
}

const ReelCard = ({ videoUrl, onPlay }: ReelCardProps) => {
  return (
    <button
      onClick={onPlay}
      className="group relative flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer snap-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {/* Auto-playing looping reel preview */}
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card/20 backdrop-blur-sm border border-card/30 transition-transform duration-300 group-hover:scale-110">
          <Play size={24} className="text-card ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-center justify-center gap-2 rounded-lg bg-accent py-2.5 font-body text-xs font-semibold text-accent-foreground transition-colors group-hover:bg-zh-orange-dark">
          <ShoppingBag size={14} />
          Shop Now
        </div>
      </div>
    </button>
  );
};

export default ReelCard;
