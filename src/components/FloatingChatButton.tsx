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
        w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]
        flex items-center justify-center
        transition-transform duration-300 ease-out
        hover:scale-[1.08]
        animate-[chatEntry_0.4s_ease-out_both]"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Subtle glow */}
      <span className="absolute inset-0 rounded-full bg-green-500/20 animate-[chatPulse_2s_ease-in-out_infinite]" />

      {/* Curved "CHAT US" text — semi-circle arc on top, scroll-rotated */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 150 150"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          {/* Semi-circle arc across the top */}
          <path
            id="chatArcPath"
            d="M 30,75 A 45,45 0 0,1 120,75"
            fill="none"
          />
        </defs>
        <text
          fill="#22c55e"
          fontSize="16"
          fontWeight="600"
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
        className="relative w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] object-contain drop-shadow-lg"
        loading="lazy"
      />
    </a>
  );
};

export default FloatingChatButton;
