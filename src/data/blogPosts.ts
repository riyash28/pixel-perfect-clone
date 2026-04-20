import skincareImg from "@/assets/blog/blog-skincare.jpg";
import ritualsImg from "@/assets/blog/blog-rituals.jpg";
import glowingImg from "@/assets/blog/blog-glowing.jpg";

export interface BlogSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  tag: string;
  comments: number;
  intro: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "power-of-natural-ingredients-in-skincare",
    title: "The Power of Natural Ingredients in Skincare",
    excerpt:
      "Nature has always been the best skincare expert. Discover how Ayurvedic herbs and botanical extracts transform your skin from within.",
    date: "November 28, 2025",
    author: "Let's Advertise Work",
    image: skincareImg,
    tag: "Skincare",
    comments: 4,
    intro:
      "Nature has always been the best skincare expert. Natural ingredients are gentle, safe, and effective for long-term skin health.",
    sections: [
      {
        heading: "1. Aloe Vera — The Healing Plant",
        body: "Reduces inflammation, cools the skin, and helps with acne scars.\nPerfect for:",
        bullets: ["Redness", "Sunburn", "Dry patches"],
      },
      {
        heading: "2. Rose Water — Your Everyday Glow Tonic",
        body: "Balances pH, refreshes skin, and adds instant hydration.\nUse it:",
        bullets: ["As a toner", "As a mist", "Mixed with face packs"],
      },
      {
        heading: "3. Turmeric — Golden Antioxidant",
        body: "Fights free radicals and brightens the complexion.\nUse gently to avoid staining.",
      },
      {
        heading: "4. Honey — Natural Moisture Booster",
        body: "Honey locks in moisture and has antibacterial properties.\nApply twice a week for smooth, glowing skin.",
      },
      {
        heading: "5. Green Tea — Anti-Aging Hero",
        body: "Rich in antioxidants, reduces puffiness, and improves elasticity.",
      },
    ],
  },
  {
    slug: "5-simple-wellness-rituals-to-transform-your-day",
    title: "5 Simple Wellness Rituals to Transform Your Day",
    excerpt:
      "Wellness doesn't require big changes — just small, consistent rituals that nurture your body, mind, and spirit every single day.",
    date: "November 28, 2025",
    author: "Let's Advertise Work",
    image: ritualsImg,
    tag: "Wellness",
    comments: 2,
    intro:
      "Wellness is built in small daily moments. These five rituals are simple, ancient, and proven to bring balance to a busy life.",
    sections: [
      {
        heading: "1. Begin With Warm Lemon Water",
        body: "Kickstart digestion, hydrate cells, and gently detoxify your system first thing in the morning.",
      },
      {
        heading: "2. Five Minutes of Mindful Breathing",
        body: "Slow, deep breaths calm the nervous system and bring instant clarity to a foggy mind.",
      },
      {
        heading: "3. Oil Pulling for Oral Health",
        body: "Swish a spoon of cold-pressed sesame or coconut oil for 5–10 minutes to remove toxins and freshen breath.",
      },
      {
        heading: "4. Sun Salutations (Surya Namaskar)",
        body: "A complete body workout that energizes, stretches, and centers you in under 10 minutes.",
      },
      {
        heading: "5. Evening Digital Detox",
        body: "Switch off screens an hour before bed to deepen sleep quality and reset your circadian rhythm.",
      },
    ],
  },
  {
    slug: "the-secret-to-glowing-skin",
    title: "The Secret to Glowing Skin: Simple Habits That Actually Work",
    excerpt:
      "Healthy, glowing skin is not a result of magic — it comes from mindful habits, natural ingredients, and timeless Ayurvedic wisdom.",
    date: "November 28, 2025",
    author: "Let's Advertise Work",
    image: glowingImg,
    tag: "Beauty",
    comments: 6,
    intro:
      "Glowing skin starts from within. Combine these mindful habits with Ayurvedic wisdom for a radiance that lasts.",
    sections: [
      {
        heading: "1. Hydrate, Then Hydrate Again",
        body: "Aim for 8 glasses of water daily. Add cucumber, mint, or lemon for a boost of antioxidants.",
      },
      {
        heading: "2. Eat the Rainbow",
        body: "Colorful fruits and vegetables flood your body with vitamins and antioxidants that show on your skin.",
      },
      {
        heading: "3. Sleep Like It's Your Skincare",
        body: "7–9 hours of quality sleep allows your skin to repair, regenerate, and glow from within.",
      },
      {
        heading: "4. Daily Sunscreen — Non-Negotiable",
        body: "Sun damage is the #1 cause of premature aging. Protect your glow every single day.",
      },
      {
        heading: "5. Listen To Your Skin",
        body: "Less is often more. Use gentle, natural products and let your skin's natural rhythm shine.",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
