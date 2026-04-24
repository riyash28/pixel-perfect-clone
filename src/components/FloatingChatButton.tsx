import { useEffect, useState } from "react";
import chatLogo from "@/assets/chat-logo-clean.png";

const FloatingChatButton = () => {
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const buttonY = window.innerHeight - 70;
        setOverFooter(rect.top <= buttonY && rect.bottom >= buttonY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/9211514445"
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

      {/* Circular rotating "CHAT US • CHAT US •" text */}
      <svg
        className="absolute inset-0 w-full h-full animate-[chatSpin_12s_linear_infinite]"
        viewBox="0 0 160 160"
      >
        <defs>
          {/* Full circle path starting at top (12 o'clock), going clockwise */}
          <path
            id="chatCirclePath"
            d="M 80,80 m 0,-62 a 62,62 0 1,1 -0.01,0 z"
            fill="none"
          />
        </defs>
        <text
          fill={overFooter ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))"}
          fontSize="14"
          fontWeight="700"
          letterSpacing="6"
          style={{ fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}
        >
          {/* startOffset 25% positions first char at the top center.
              Text length tuned so "CHAT US" sits at top, "•" right,
              "CHAT US" bottom, "•" left. */}
          <textPath href="#chatCirclePath" startOffset="0%" textLength="389">
            CHAT US • CHAT US •
          </textPath>
        </text>
      </svg>

      {/* Center logo — larger and dominant */}
      <img
        src={chatLogo}
        alt="Chat with us"
        className="relative w-[95px] h-[95px] sm:w-[140px] sm:h-[140px] object-contain drop-shadow-lg"
        loading="lazy"
      />
    </a>
  );
};

export default FloatingChatButton;
