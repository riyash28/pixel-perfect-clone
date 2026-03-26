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
    name: "Back To Teens Tablets",
    image: product3,
    description: "Horny Goat Weed & Maca Root Extract for male vigor",
    price: 1099,
    originalPrice: 1199,
    rating: 4.57,
    reviews: 1076,
    tag: "Sale",
    category: "sexual-health",
  },
  {
    id: 2,
    name: "Narie BoomUp Capsules",
    image: product5,
    description: "Ayurvedic formula for women's confidence",
    price: 1049,
    originalPrice: 1499,
    rating: 4.26,
    reviews: 53,
    tag: "Sale",
    category: "womens-health",
  },
  {
    id: 3,
    name: "Gut Army Probiotic Capsules",
    image: product2,
    description: "100 Billion CFU probiotics & prebiotics",
    price: 999,
    originalPrice: 1199,
    rating: 4.59,
    reviews: 1142,
    tag: "Sale",
    category: "digestive-health",
  },
  {
    id: 4,
    name: "Himalayan Shilajit Tablets",
    image: product1,
    description: "With Ashwagandha & Safed Musli for strength",
    price: 1300,
    originalPrice: 1899,
    rating: 4.58,
    reviews: 1409,
    tag: "Sale",
    category: "sexual-health",
  },
  {
    id: 5,
    name: "Narie Fertility Formula",
    image: product5,
    description: "Plant-based formula for healthy pregnancy",
    price: 1299,
    originalPrice: 1499,
    rating: 4.58,
    reviews: 1329,
    tag: "Sale",
    category: "womens-health",
  },
  {
    id: 6,
    name: "Lung Detox Tablets",
    image: product6,
    description: "Mulethi & Echinacea lung cleansing formula",
    price: 1089,
    originalPrice: 1499,
    rating: 4.66,
    reviews: 342,
    tag: "Sale",
    category: "lung-health",
  },
  {
    id: 7,
    name: "Liver Detox Tablets",
    image: product8,
    description: "Milk Thistle based liver cleansing formula",
    price: 999,
    originalPrice: 1299,
    rating: 4.72,
    reviews: 289,
    tag: "Sale",
    category: "digestive-health",
  },
  {
    id: 8,
    name: "Fat Burner Tablets",
    image: product4,
    description: "Natural weight management support",
    price: 1449,
    originalPrice: 1699,
    rating: 4.88,
    reviews: 164,
    tag: "Sale",
    category: "weight-management",
  },
];

export const combos: Product[] = [
  {
    id: 101,
    name: "Men's Vitality Combo",
    image: combo3,
    description: "Shilajit + Ashwagandha + Back To Teens",
    price: 2999,
    originalPrice: 4597,
    rating: 4.7,
    reviews: 523,
    tag: "Combo",
    category: "sexual-health",
  },
  {
    id: 102,
    name: "Women's Wellness Combo",
    image: combo2,
    description: "Fertility Formula + BoomUp Capsules",
    price: 1999,
    originalPrice: 2998,
    rating: 4.5,
    reviews: 312,
    tag: "Combo",
    category: "womens-health",
  },
  {
    id: 103,
    name: "Gut Health Combo",
    image: combo4,
    description: "Gut Army + Gas Relief bundle",
    price: 1799,
    originalPrice: 2698,
    rating: 4.6,
    reviews: 198,
    tag: "Combo",
    category: "digestive-health",
  },
  {
    id: 104,
    name: "Complete Health Combo",
    image: combo1,
    description: "Multivitamin + Shilajit + Ashwagandha",
    price: 3499,
    originalPrice: 5097,
    rating: 4.8,
    reviews: 445,
    tag: "Combo",
    category: "sexual-health",
  },
];

export const categoryProducts: Record<string, Product[]> = {
  "womens-health": [
    bestSellers[1],
    bestSellers[4],
    { ...bestSellers[2], id: 201, name: "Narie Period Care", category: "womens-health" },
    { ...bestSellers[6], id: 202, name: "Women's Multivitamin", category: "womens-health" },
    { ...bestSellers[0], id: 203, name: "Narie Hair & Skin", category: "womens-health" },
    { ...bestSellers[3], id: 204, name: "Narie Desire Lift", category: "womens-health" },
  ],
  "weight-management": [
    bestSellers[7],
    { ...bestSellers[2], id: 301, name: "Carb Cutter", category: "weight-management" },
    { ...bestSellers[6], id: 302, name: "Apple Cider Vinegar", category: "weight-management" },
    { ...bestSellers[4], id: 303, name: "Green Tea Extract", category: "weight-management" },
    { ...bestSellers[0], id: 304, name: "Metabolism Booster", category: "weight-management" },
  ],
  "digestive-health": [
    bestSellers[2],
    bestSellers[6],
    { ...bestSellers[5], id: 401, name: "Gas Relief Capsules", category: "digestive-health" },
    { ...bestSellers[3], id: 402, name: "Holo Piles Care", category: "digestive-health" },
    { ...bestSellers[1], id: 403, name: "Constipation Relief", category: "digestive-health" },
  ],
  "sexual-health": [
    bestSellers[0],
    bestSellers[3],
    { ...bestSellers[7], id: 501, name: "Testosterone Booster", category: "sexual-health" },
    { ...bestSellers[1], id: 502, name: "Stamina Plus", category: "sexual-health" },
    { ...bestSellers[5], id: 503, name: "Vigor Max Tablets", category: "sexual-health" },
  ],
  "lung-health": [
    bestSellers[5],
    { ...bestSellers[2], id: 601, name: "Breathe Easy Capsules", category: "lung-health" },
    { ...bestSellers[0], id: 602, name: "Anti Pollution Shield", category: "lung-health" },
    { ...bestSellers[6], id: 603, name: "Respiratory Care", category: "lung-health" },
  ],
};

export const categories = [
  { name: "Women's Health", slug: "womens-health", icon: "Heart", description: "Ayurvedic solutions crafted for women's unique health needs" },
  { name: "Weight Management", slug: "weight-management", icon: "Flame", description: "Natural formulas for healthy weight management" },
  { name: "Digestive Health", slug: "digestive-health", icon: "Apple", description: "Gut health and digestive wellness supplements" },
  { name: "Sexual Health", slug: "sexual-health", icon: "Zap", description: "Vitality and vigor with traditional herbs" },
  { name: "Lung Health", slug: "lung-health", icon: "Wind", description: "Breathe better with lung detox formulas" },
];
