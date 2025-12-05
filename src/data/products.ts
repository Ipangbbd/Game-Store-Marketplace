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
    image: "/products/voidwalker.png",
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
    image: "/products/neonwings.png",
    category: "Back",
    description: "Glowing cyberpunk wings that leave a trail of light.",
    images: [
      "/products/neonwings.png",
      "/products/neonwings2.png"
    ]
  },
  {
    id: "3",
    name: "Galaxy Sword",
    price: 350.00,
    image: "/products/galaxysword.png",
    category: "Weapons",
    description: "A legendary sword forged from cosmic stardust.",
    images: [
      "/products/galaxysword.png",
      "/products/galaxysword2.png"
    ]
  },
  {
    id: "4",
    name: "Cyber Helmet",
    price: 120.00,
    image: "/products/cyberhelmet.png",
    category: "Headwear",
    description: "Futuristic helmet with integrated HUD display.",
    images: [
      "/products/cyberhelmet.png",
      "/products/cyberhelmet2.png"
    ]
  },
  {
    id: "5",
    name: "Shadow Cape",
    price: 85.00,
    image: "/products/shadowcape.png",
    category: "Back",
    description: "A flowing cape that merges with shadows.",
    images: [
      "/products/shadowcape.png",
      "/products/shadowcape2.png"
    ]
  },
  {
    id: "6",
    name: "Crystal Crown",
    price: 500.00,
    image: "/products/crystalcrown.png",
    category: "Headwear",
    description: "A royal crown embedded with rare crystals.",
    images: [
      "/products/crystalcrown.png",
      "/products/crystalcrown2.png"
    ]
  },
  {
    id: "7",
    name: "Phoenix Pet",
    price: 250.00,
    image: "/products/phoenixpet.png",
    category: "Pets",
    description: "A legendary phoenix companion that follows you.",
    images: [
      "/products/phoenixpet.png",
      "/products/phoenixpet2.png"
    ]
  },
  {
    id: "8",
    name: "Plasma Boots",
    price: 180.00,
    image: "/products/plasma.png",
    category: "Footwear",
    description: "High-tech boots with plasma propulsion.",
    images: [
      "/products/plasma.png",
      "/products/plasma2.png"
    ]
  },
  {
    id: "9",
    name: "Demon Mask",
    price: 95.00,
    image: "/products/demonmask.png",
    category: "Faces",
    description: "An intimidating mask from the underworld.",
    images: [
      "/products/demonmask.png",
      "/products/demonmask2.png"
    ]
  },
  {
    id: "10",
    name: "Dragon Mount",
    price: 1000.00,
    image: "/products/dragonmount.png",
    category: "Mounts",
    description: "Ride a majestic dragon across the skies.",
    images: [
      "/products/dragonmount.png",
      "/products/dragonmount2.png"
    ]
  },
  {
    id: "11",
    name: "Starlight Aura",
    price: 75.00,
    image: "/products/starlightaura.png",
    category: "Effects",
    description: "A sparkling aura that surrounds your avatar.",
    images: [
      "/products/starlightaura.png",
      "/products/starlightaura2.png"
    ]
  },
  {
    id: "12",
    name: "Thunder Staff",
    price: 275.00,
    image: "/products/thunderstaff.png",
    category: "Weapons",
    description: "Channel the power of lightning.",
    images: [
      "/products/thunderstaff.png",
      "/products/thunderstaff2.png"
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
