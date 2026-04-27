import type { CSSProperties } from "react";

export type AnimationVariant =
  | "slideFromLeft"
  | "slideFromRight"
  | "slideFromBottom"
  | "slideFromTop"
  | "fadeScale"
  | "fade";

/**
 * Hidden-state transform per variant. These match the exact distances and
 * scale used by the existing WhyWeAreDifferent animations:
 *  - cards offset by 30px on their direction axis
 *  - hero/section blocks offset by 60px
 *  - outcome card uses a subtle 0.85 → 1 scale-up
 */
const HIDDEN_TRANSFORM: Record<AnimationVariant, string> = {
  slideFromLeft: "translateX(-30px)",
  slideFromRight: "translateX(30px)",
  slideFromBottom: "translateY(30px)",
  slideFromTop: "translateY(-30px)",
  fadeScale: "scale(0.85)",
  fade: "none",
};

const VISIBLE_TRANSFORM: Record<AnimationVariant, string> = {
  slideFromLeft: "translate(0,0)",
  slideFromRight: "translate(0,0)",
  slideFromBottom: "translate(0,0)",
  slideFromTop: "translate(0,0)",
  fadeScale: "scale(1)",
  fade: "none",
};

/**
 * Stagger helper — same pattern as the original section
 * (base 0.3s + index * 0.12s). Override base/step as needed.
 */
export const getDelay = (index: number, base = 0.3, step = 0.12): number =>
  base + index * step;

/**
 * Build the inline style object for an animated element.
 * Mirrors the original implementation: opacity + transform + transition.
 */
export function getAnimationStyle(
  type: AnimationVariant,
  isVisible: boolean,
  delay = 0,
  duration = 0.6,
): CSSProperties {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? VISIBLE_TRANSFORM[type] : HIDDEN_TRANSFORM[type],
    transition: `all ${duration}s ease-out ${delay}s`,
    willChange: "opacity, transform",
  };
}