export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Void Walker Hood",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    category: "Headwear",
    description: "A mysterious hood emanating dark energy from the void dimension.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ]
  },
  {
    id: "2",
    name: "Neon Wings",
    price: 200.00,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    category: "Back",
    description: "Glowing cyberpunk wings that leave a trail of light.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    ]
  },
  {
    id: "3",
    name: "Galaxy Sword",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    category: "Weapons",
    description: "A legendary sword forged from cosmic stardust.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
    ]
  },
  {
    id: "4",
    name: "Cyber Helmet",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Headwear",
    description: "Futuristic helmet with integrated HUD display.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    ]
  },
  {
    id: "5",
    name: "Shadow Cape",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    category: "Back",
    description: "A flowing cape that merges with shadows.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
    ]
  },
  {
    id: "6",
    name: "Crystal Crown",
    price: 500.00,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Headwear",
    description: "A royal crown embedded with rare crystals.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ]
  },
  {
    id: "7",
    name: "Phoenix Pet",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=800&q=80",
    category: "Pets",
    description: "A legendary phoenix companion that follows you.",
    images: [
      "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=800&q=80",
      "https://images.unsplash.com/photo-1518882605630-8eb095bf5aa2?w=800&q=80"
    ]
  },
  {
    id: "8",
    name: "Plasma Boots",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "Footwear",
    description: "High-tech boots with plasma propulsion.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"
    ]
  },
  {
    id: "9",
    name: "Demon Mask",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    category: "Faces",
    description: "An intimidating mask from the underworld.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=800&q=80"
    ]
  },
  {
    id: "10",
    name: "Dragon Mount",
    price: 1000.00,
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80",
    category: "Mounts",
    description: "Ride a majestic dragon across the skies.",
    images: [
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
    ]
  },
  {
    id: "11",
    name: "Starlight Aura",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    category: "Effects",
    description: "A sparkling aura that surrounds your avatar.",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80"
    ]
  },
  {
    id: "12",
    name: "Thunder Staff",
    price: 275.00,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    category: "Weapons",
    description: "Channel the power of lightning.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?w=800&q=80"
    ]
  }
];

export const categories = [
  "All",
  "Headwear",
  "Back",
  "Weapons",
  "Footwear",
  "Faces",
  "Pets",
  "Mounts",
  "Effects"
];
