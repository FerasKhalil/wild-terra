export interface Adventure {
  slug: string;
  title: string;
  location: string;
  country: string;
  duration: string;
  durationDays: number;
  price: number;
  image: string;
  description: string;
  style: "Original" | "Premium" | "Comfort" | "Basic";
  physicalRating: number;
  rating: number;
  reviewCount: number;
  nextAvailable: string;
  tags: string[];
  groupSize: string;
}

export const adventures: Adventure[] = [
  {
    slug: "jordan-discovery",
    title: "Jordan Discovery",
    location: "Amman - Wadi Rum - Aqaba - Petra",
    country: "Jordan",
    duration: "8 Days",
    durationDays: 8,
    price: 1895,
    image: "/images/hero/discover_jordan.webp",
    description:
      "Uncover the magic of Jordan on this 8-day adventure through ancient cities, vast deserts, and rose-red canyons. Walk the narrow Siq into Petra, float in the Dead Sea, camp under the stars in Wadi Rum, and explore the vibrant streets of Amman. This trip blends history, culture, and natural beauty for an unforgettable Middle Eastern journey.",
    style: "Original",
    physicalRating: 3,
    rating: 4.8,
    reviewCount: 214,
    nextAvailable: "15 Jan 2027",
    tags: ["Explorer", "Cultural"],
    groupSize: "Max 12",
  },
  {
    slug: "explore-jordan",
    title: "Explore Jordan",
    location: "Amman - Wadi Rum - Petra - Madaba",
    country: "Jordan",
    duration: "10 Days",
    durationDays: 10,
    price: 2250,
    image: "/images/hero/explore_jordan.webp",
    description:
      "Dive deeper into Jordan with this comprehensive 10-day journey. Beyond the highlights of Petra and Wadi Rum, explore the mosaic city of Madaba, hike through Dana Nature Reserve, and float in the mineral-rich Dead Sea. With local guides and authentic experiences, this trip brings Jordan's rich heritage to life.",
    style: "Original",
    physicalRating: 3,
    rating: 4.9,
    reviewCount: 178,
    nextAvailable: "12 Jan 2027",
    tags: ["Explorer", "Walking & trekking"],
    groupSize: "Max 12",
  },
  {
    slug: "premium-jordan",
    title: "Premium Jordan",
    location: "Amman - Wadi Rum - Petra - Dead Sea",
    country: "Jordan",
    duration: "9 Days",
    durationDays: 9,
    price: 3495,
    image: "/images/hero/premium_jordan.webp",
    description:
      "Experience Jordan in comfort with premium accommodation, private transfers, and exclusive access. Stay in a luxury desert camp in Wadi Rum, enjoy a private guided tour of Petra by candlelight, and unwind at a 5-star Dead Sea resort. This is Jordan elevated to its finest.",
    style: "Premium",
    physicalRating: 2,
    rating: 4.9,
    reviewCount: 92,
    nextAvailable: "10 Jan 2027",
    tags: ["Explorer", "Premium"],
    groupSize: "Max 8",
  },
  {
    slug: "one-week-in-jordan",
    title: "One Week in Jordan",
    location: "Amman - Wadi Rum - Petra - Mountain Nebo",
    country: "Jordan",
    duration: "7 Days",
    durationDays: 7,
    price: 1595,
    image: "/images/hero/oneweek_in_jordan.webp",
    description:
      "Short on time but big on adventure? This 7-day trip packs Jordan's greatest hits into one week. From the ancient ruins of Jerash to the stunning rock-carved Treasury of Petra and the otherworldly landscapes of Wadi Rum, you won't miss a thing.",
    style: "Comfort",
    physicalRating: 2,
    rating: 4.7,
    reviewCount: 156,
    nextAvailable: "18 Jan 2027",
    tags: ["Explorer"],
    groupSize: "Max 16",
  },
  {
    slug: "jordan-on-a-budget",
    title: "Jordan on a Budget",
    location: "Amman - Petra - Wadi Rum",
    country: "Jordan",
    duration: "6 Days",
    durationDays: 6,
    price: 895,
    image: "/images/jerash.webp",
    description:
      "Discover Jordan without breaking the bank. This 6-day adventure covers the essentials — Amman's bustling markets, the ancient wonder of Petra, and a night under the stars in Wadi Rum — all at an unbeatable value. Perfect for first-time travelers and young adventurers.",
    style: "Basic",
    physicalRating: 3,
    rating: 4.6,
    reviewCount: 287,
    nextAvailable: "20 Jan 2027",
    tags: ["18 to 35s", "Budget"],
    groupSize: "Max 16",
  },
  {
    slug: "premium-jordan-and-petra",
    title: "Premium Jordan & Petra Deep Dive",
    location: "Amman - Jerash - Petra - Aqaba - Dead Sea",
    country: "Jordan",
    duration: "11 Days",
    durationDays: 11,
    price: 4250,
    image: "/images/ajloun.jpg",
    description:
      "The ultimate Jordan experience. This 11-day premium trip covers every corner of the kingdom — from the Roman ruins of Jerash and the Crusader castle of Ajloun to the breathtaking Treasury of Petra and the coral reefs of Aqaba. Luxury accommodation and private experiences throughout.",
    style: "Premium",
    physicalRating: 3,
    rating: 5.0,
    reviewCount: 43,
    nextAvailable: "08 Feb 2027",
    tags: ["Explorer", "Premium"],
    groupSize: "Max 8",
  },
  {
    slug: "jordan-walking-and-trekking",
    title: "Jordan Walking & Trekking",
    location: "Dana - Petra - Little Petra - Wadi Rum",
    country: "Jordan",
    duration: "9 Days",
    durationDays: 9,
    price: 1750,
    image: "/images/wadi_rum.jpg",
    description:
      "Lace up your boots for this 9-day trekking adventure through Jordan's most dramatic landscapes. Hike the Dana Biosphere Reserve, walk the ancient Nabataean trade route to Petra, and trek through the sandstone canyons of Wadi Rum. For active travelers who want to see Jordan on foot.",
    style: "Original",
    physicalRating: 4,
    rating: 4.8,
    reviewCount: 112,
    nextAvailable: "05 Mar 2027",
    tags: ["Walking & trekking", "Multi-active"],
    groupSize: "Max 12",
  },
  {
    slug: "jordan-family-adventure",
    title: "Jordan Family Adventure",
    location: "Amman - Dead Sea - Petra - Wadi Rum",
    country: "Jordan",
    duration: "8 Days",
    durationDays: 8,
    price: 2100,
    image: "/images/hero/petra.webp",
    description:
      "Designed for families, this 8-day trip makes Jordan exciting for all ages. Kids will love floating in the Dead Sea, riding camels in Wadi Rum, and exploring the secret passages of Petra. Comfortable accommodation and a relaxed pace keep everyone happy.",
    style: "Comfort",
    physicalRating: 2,
    rating: 4.7,
    reviewCount: 68,
    nextAvailable: "14 Jan 2027",
    tags: ["Family", "Explorer"],
    groupSize: "Max 12",
  },
];

export const allStyles = ["Original", "Premium", "Comfort", "Basic"] as const;
export const allPhysicalRatings = [1, 2, 3, 4, 5] as const;
export const allCountries = [...new Set(adventures.map((a) => a.country))] as const;
