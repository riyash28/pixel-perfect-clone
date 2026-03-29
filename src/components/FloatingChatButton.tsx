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
        w-[90px] h-[90px] sm:w-[140px] sm:h-[140px]
        flex items-center justify-center
        transition-transform duration-300 ease-out
        hover:scale-[1.08]
        animate-[chatEntry_0.4s_ease-out_both]"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Glow pulse */}
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-[chatPulse_2s_ease-in-out_infinite]" />

      {/* Scroll-rotating circular text */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 140 140"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          <path
            id="chatCirclePath"
            d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="15"
          fontWeight="500"
          letterSpacing="2px"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <textPath href="#chatCirclePath">
            CHAT US
          </textPath>
        </text>
      </svg>

      {/* Center logo */}
      <img
        src={chatLogo}
        alt="Chat with us"
        className="relative w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] object-contain"
        loading="lazy"
        width={512}
        height={512}
      />
    </a>
  );
};

export default FloatingChatButton;
