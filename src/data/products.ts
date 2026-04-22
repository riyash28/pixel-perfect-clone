import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import product5 from "@/assets/products/product-5.jpg";
import product6 from "@/assets/products/product-6.jpg";
import product7 from "@/assets/products/product-7.jpg";
import product8 from "@/assets/products/product-8.jpg";
import combo1 from "@/assets/products/combo-1.jpg";
import combo2 from "@/assets/products/combo-2.jpg";
import combo3 from "@/assets/products/combo-3.jpg";
import combo4 from "@/assets/products/combo-4.jpg";
const womenIcon = "👩";
const menIcon = "👨";
const digestiveIcon = "🌿";
const hairIcon = "💇";
const liverIcon = "🫀";

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  tag?: string;
  category: string;
}

export const bestSellers: Product[] = [
  {
    id: 1,
    name: "Ritucalm Syrup",
    image: product3,
    description:
      "Ritucalm Syrup is a premium Ayurvedic formulation designed to support women’s reproductive health and hormonal balance. Crafted with time-tested herbs, it helps regulate menstrual cycles, ease discomfort, and promote overall well-being. Ideal for women experiencing PCOS/PCOD symptoms, irregular periods, and emotional stress related to hormonal fluctuations, Ritucalm Syrup offers a holistic approach to feminine care.",
    price: 699.0,
    originalPrice: 1199,
    rating: 4.57,
    reviews: 1076,
    tag: "Sale",
    category: "Women's health",
  },
  {
    id: 2,
    name: "Play High",
    image: product7,
    description:
      "Play High Oil is a unique Ayurvedic formulation specially designed to enhance stamina, strength, and confidence.Enriched with powerful herbs and natural oils, it improves blood circulation, nourishes the body, and helps in reducing weakness and fatigue. Regular massage with Play High Oil revitalizes the nerves and muscles, supporting overall vitality and performance.",
    price: 499.0,
    originalPrice: 999,
    rating: 4.26,
    reviews: 53,
    tag: "Sale",
    category: "Mens-health",
  },
  {
    id: 3,
    name: "Ritucalm Kit",
    image: product2,
    description:
      "The Ritucalm Kit is a complete Ayurvedic formulation designed to support women’s hormonal health, menstrual regularity, and liver detoxification. It combines the power of Ritucalm Capsules and Yakripure Syrup to bring your body back into balance naturally. Ritucalm helps regulate menstrual cycles, manage PCOD/PCOS symptoms, reduce cramps, and balance hormones. Yakripure Syrup supports the liver’s detox function, which plays a crucial role in maintaining hormonal health and metabolism. Together, they promote a healthier, more balanced body from within.",
    price: 1500.0,
    originalPrice: 1199,
    rating: 4.59,
    reviews: 1142,
    tag: "Sale",
    category: "Women's health",
  },
  {
    id: 4,
    name: "RITUCALM TABLET",
    image: product1,
    description:
      "Crafted with care by the Ayurvedic experts at Praanroot,&nbsp;Ritucalm Tablets are a concentrated blend of 12 time-tested herbs that gently restore hormonal harmony from within. Whether you're struggling with irregular cycles, painful periods, ovarian cysts, or fertility issues, these capsules work at the root cause. Each capsule is powered by potent herbs like Ashoka, Lodhra, Shatavari, Kanchanar Guggulu, Shilajit, and Safed Musli, combined in perfect synergy. Together, they support hormonal rhythm, reduce cyst size, enhance ovulation, and balance emotional stress—without disturbing your body’s natural cycle. Ritucalm Tablets are ideal for women who want a steady, side-effect-free, and deeply healing journey toward balance and wellbeing.",
    price: 899.0,
    originalPrice: 1899,
    rating: 4.58,
    reviews: 1409,
    tag: "Sale",
    category: "Women's health",
  },
  {
    id: 5,
    name: "Triple Vitality",
    image: product5,
    description:
      "Triple Vitality is a premium Ayurvedic formulation that delivers threefold benefits – Energy, Immunity, and Vitality.Made with potent herbs, it not only fights fatigue and boosts overall stamina but also supports male reproductive health by improving sperm count, motility, and strength. A complete wellness tonic for those seeking long-lasting energy, immunity, and reproductive balance.",
    price: 1499.0,
    originalPrice: 1899,
    rating: 4.58,
    reviews: 1329,
    tag: "Sale",
    category: "Mens-health",
  },
  {
    id: 6,
    name: "Keshnitra Hair Oil",
    image: product6,
    description:
      "Kesh Nitra Hair Oil is a powerful Ayurvedic formulation enriched with natural herbs and nourishing oils that not only prevent hair fall but also&nbsp;stimulate new hair regrowth. It deeply nourishes the scalp, strengthens roots, and restores hair health while reducing dandruff, premature greying, and dryness. Its cooling and calming effect also helps relieve stress and promote peaceful sleep.",
    price: 550.0,
    originalPrice: 999,
    rating: 4.66,
    reviews: 342,
    tag: "Sale",
    category: "Hair-care",
  },
  // {
  //   id: 7,
  //   name: "Liver Detox Tablets",
  //   image: product8,
  //   description: "Milk Thistle based liver cleansing formula",
  //   price: 999,
  //   originalPrice: 1299,
  //   rating: 4.72,
  //   reviews: 289,
  //   tag: "Sale",
  //   category: "digestive-health",
  // },
  {
    id: 8,
    name: "Yakripure",
    image: product4,
    description:
      "Yakripure Syrup is a powerful Ayurvedic liver tonic formulated with time-tested herbs that protect, repair, and rejuvenate the liver. It helps in natural detoxification, improves digestion, and restores energy levels by enhancing liver function. With its hepatoprotective properties, Yakripure is effective in managing common as well as chronic liver conditions.",
    price: 450.0,
    originalPrice: 1699,
    rating: 4.88,
    reviews: 164,
    tag: "Sale",
    category: "Liver-health",
  },
];

export const combos: Product[] = [
  {
    id: 101,
    name: "Detox Harmony Kit",
    image: combo3,
    description:
      "This kit helps manage irregular periods, PCOS symptoms, and menstrual cramps, while simultaneously detoxifying and rejuvenating the liver to restore vitality and natural glow from within.",
    price: 999.0,
    originalPrice: 1599,
    rating: 4.7,
    reviews: 523,
    tag: "Combo",
    category: "Women's health",
  },
  {
    id: 102,
    name: "Liver Hormone Balance Kit",
    image: combo2,
    description:
      "The Liver Hormones Balance Kit is a holistic Ayurvedic combination of Ritucalm Syrup, Ritucalm Capsules, and Yakripure Syrup, specially formulated to support women’s hormonal balance, menstrual health, and liver wellness.",
    price: 1699.0,
    originalPrice: 2998,
    rating: 4.5,
    reviews: 312,
    tag: "Combo",
    category: "Liver-health",
  },
  {
    id: 103,
    name: "Men Vitality Kit",
    image: combo4,
    description:
      "Rediscover your strength, stamina, and confidence with the Men’s Vitality Kit, a powerful Ayurvedic duo designed to enhance men’s overall energy, performance, and vitality. This kit combines the internal nourishment of Triple Vitality Capsules with the external rejuvenation of Play High Oil, creating a complete solution for restoring vigor and confidence — naturally.",
    price: 1800.0,
    originalPrice: 2698,
    rating: 4.6,
    reviews: 198,
    tag: "Combo",
    category: "Mens-health",
  },
  {
    id: 104,
    name: "PCOS Care Kit",
    image: combo1,
    description:
      "Ritucalm Kit is a complete Ayurvedic solution crafted to support women’s hormonal balance, menstrual health, and overall well-being. Made with time-tested herbs, it helps regulate menstrual cycles, reduce period cramps, and manage symptoms of PCOS and hormonal imbalance.",
    price: 1500.0,
    originalPrice: 5097,
    rating: 4.8,
    reviews: 445,
    tag: "Combo",
    category: "Women's health",
  },
];

export const categoryProducts: Record<string, Product[]> = {
  "womens-health": [
    // bestSellers[1],
    // bestSellers[4],
    { ...bestSellers[2], id: 201, name: "Ritucalm Kit", category: "womens-health" },
    { ...bestSellers[6], id: 202, name: "Yakripure", category: "womens-health" },
    { ...bestSellers[0], id: 203, name: "Ritucalm Syrup", category: "womens-health" },
    { ...bestSellers[3], id: 204, name: "RITUCALM TABLET", category: "womens-health" },
  ],
  "Mens Health": [
    // bestSellers[7],
    // bestSellers[1],
    // bestSellers[4],
    // { ...bestSellers[2], id: 301, name: "Carb Cutter", category: "Mens Health" },
    // { ...bestSellers[6], id: 302, name: "Apple Cider Vinegar", category: "Mens Health" },
    // { ...bestSellers[4], id: 303, name: "Green Tea Extract", category: "Mens Health" },
    // { ...bestSellers[0], id: 304, name: "Metabolism Booster", category: "Mens Health" },
    { ...bestSellers[2], id: 301, name: "Ritucalm Kit", category: "womens-health" },
    { ...bestSellers[6], id: 302, name: "Yakripure", category: "womens-health" },
    { ...bestSellers[0], id: 303, name: "Ritucalm Syrup", category: "womens-health" },
    { ...bestSellers[3], id: 304, name: "RITUCALM TABLET", category: "womens-health" },
  ],
  "digestive-health": [
    bestSellers[2],
    bestSellers[6],
    { ...bestSellers[5], id: 401, name: "Gas Relief Capsules", category: "digestive-health" },
    { ...bestSellers[3], id: 402, name: "Holo Piles Care", category: "digestive-health" },
    { ...bestSellers[1], id: 403, name: "Constipation Relief", category: "digestive-health" },
  ],
  "Hair Care": [
    bestSellers[0],
    bestSellers[3],
    { ...bestSellers[7], id: 501, name: "Testosterone Booster", category: "Hair Care" },
    { ...bestSellers[1], id: 502, name: "Stamina Plus", category: "Hair Care" },
    { ...bestSellers[5], id: 503, name: "Vigor Max Tablets", category: "Hair Care" },
  ],
  "Liver Care": [
    bestSellers[5],
    { ...bestSellers[2], id: 601, name: "Breathe Easy Capsules", category: "Liver Care" },
    { ...bestSellers[0], id: 602, name: "Anti Pollution Shield", category: "Liver Care" },
    { ...bestSellers[6], id: 603, name: "Respiratory Care", category: "Liver Care" },
  ],
};

export const categories = [
  { name: "Women's Health", slug: "womens-health", icon: womenIcon },
  { name: "Mens Health", slug: "mens-health", icon: menIcon },
  { name: "Digestive Health", slug: "digestive-health", icon: digestiveIcon },
  { name: "Hair Care", slug: "hair-care", icon: hairIcon },
  { name: "Liver Care", slug: "liver-care", icon: liverIcon },
];
