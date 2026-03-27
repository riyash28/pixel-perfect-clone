import chatLogo from "@/assets/chat-logo-clean.png";

const FloatingChatButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] cursor-pointer
        w-[90px] h-[90px] sm:w-[150px] sm:h-[150px]
        flex items-center justify-center
        transition-transform duration-300 ease-out
        hover:scale-[1.08]
        animate-[chatEntry_0.4s_ease-out_both]"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Glow pulse */}
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-[chatPulse_2s_ease-in-out_infinite]" />

      {/* Rotating circular text */}
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
        viewBox="0 0 150 150"
      >
        <defs>
          <path
            id="circlePath"
            d="M 75,75 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2.5px"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <textPath href="#circlePath">
            CHAT US • CHAT US • CHAT US •
          </textPath>
        </text>
      </svg>

      {/* Center logo — no background, transparent PNG */}
      <img
        src={chatLogo}
        alt="Chat with us"
        className="relative w-[55px] h-[55px] sm:w-[90px] sm:h-[90px] object-contain"
        loading="lazy"
        width={512}
        height={512}
      />
    </a>
  );
};

export default FloatingChatButton;
