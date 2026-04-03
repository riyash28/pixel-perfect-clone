import { useEffect, useState } from "react";
import chatLogo from "@/assets/chat-logo-clean.png";

const FloatingChatButton = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] cursor-pointer
        w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]
        flex items-center justify-center
        transition-transform duration-300 ease-out
        hover:scale-[1.08]
        animate-[chatEntry_0.4s_ease-out_both]"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Subtle glow */}
      <span className="absolute inset-0 rounded-full bg-green-500/15 animate-[chatPulse_2s_ease-in-out_infinite]" />

      {/* Curved "CHAT US" text — semi-circle arc on top, scroll-rotated */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 160 160"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          <path
            id="chatArcPath"
            d="M 35,80 A 45,45 0 0,1 125,80"
            fill="none"
          />
        </defs>
        <text
          fill="#333333"
          fontSize="14"
          fontWeight="700"
          letterSpacing="2px"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <textPath href="#chatArcPath" startOffset="50%" textAnchor="middle">
            CHAT US
          </textPath>
        </text>
      </svg>

      {/* Center logo — larger and dominant */}
      <img
        src={chatLogo}
        alt="Chat with us"
        className="relative w-[85px] h-[85px] sm:w-[125px] sm:h-[125px] object-contain drop-shadow-lg"
        loading="lazy"
      />
    </a>
  );
};

export default FloatingChatButton;
