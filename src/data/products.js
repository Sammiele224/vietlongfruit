// Export this array so any page in your app can import and read it!
export const products = [
  { 
    id: 1, 
    name: "Passion Fruit", 
    category: "Featured", 
    categories: ["Eco Garden", "Tropical Fruits", "Juicing"],
    tags: ["Tangy", "Vitamin C", "Refreshment", "Healthy"],
    image: "/src/assets/images/Layer-58.jpg",
    heroBanners: "/src/assets/images/Layer-58.jpg",
    sku: "PF-001",
    price: 3.99,
    description: "Sweet and tart passion fruit, perfect for tropical juices and desserts."
  },
  { 
    id: 2, 
    name: "Pomelo",        
    category: "Featured", 
    categories: ["Eco Garden", "Citrus", "Premium Gifts"],
    tags: ["Sweet", "Thick Rind", "Diet"],
    image: "/src/assets/images/Layer-40.jpg",
    heroBanners: "/src/assets/images/Layer-40.jpg",
    sku: "PM-002",
    price: 6.99,
    description: "Large, refreshing citrus fruit with a sweet, mild flavor and thick rind."
  },
  { 
    id: 3, 
    name: "Rambutan",      
    category: "Seasonal", 
    categories: ["Eco Garden", "Seasonal Harvest"],
    tags: ["Sweet", "Juicy", "Snack", "Trend"],
    image: "/src/assets/images/Layer-92.jpg",
    heroBanners: "/src/assets/images/BG-09.svg",
    sku: "RB-003",
    price: 4.50,
    description: "The best Rambutan from the gardens of Vietnam, juicy and sweet.", 
    gallery: [
        "/src/assets/images/Layer-87.jpg",
        "/src/assets/images/Layer-88.jpg",
    ],
    // --- USE FOR TABS ---
    tabDetails: {
        paragraphs: [
            "Vietnam's rambutan is famous for its bright red, hairy exterior and translucent, sweet, and juicy flesh. Grown organically in our Eco Gardens, each fruit is carefully selected to ensure the highest quality.",
            "Rich in vitamin C and copper, rambutan is not just a delicious snack but also a healthy addition to your daily diet. Enjoy it fresh, or use it in fruit salads and exotic desserts."
        ],
        images: [
            "/src/assets/images/BG-10.jpg", // Top Wide Image
            "/src/assets/images/BG-11.jpg", // Bottom Left Image
            "/src/assets/images/Layer-12.jpg"  // Bottom Right Image
        ],
        weight: "2kg Box",
        dimensions: "20 x 15 x 10 cm",
        storage: "Keep in a cool, dry place away from direct sunlight. Refrigerate for longer shelf life."
    }
  },
  { 
    id: 4, 
    name: "Dragon Fruit",      
    category: "Featured", 
    categories: ["Fresh Produce", "Superfood", "Exotic"],
    tags: ["Antioxidants", "Vibrant", "Low Calorie"],
    image: "/src/assets/images/Layer-56.svg",
    heroBanners: "/src/assets/images/BG-08.jpg",
    sku: "DF-004",
    price: 5.99,
    description: "Vibrant and refreshing dragon fruit, naturally sweet and packed with antioxidants."
  },
  { 
    id: 5, 
    name: "Durian",      
    category: "Seasonal", 
    categories: ["Premium Fruits", "Seasonal Harvest", "Exotic"],
    tags: ["King of Fruits", "Rich", "Aromatic", "Bestseller"],
    image: "/src/assets/images/Layer-75.jpg",
    heroBanners: "/src/assets/images/BG-01.jpg",
    sku: "DU-005",
    price: 15.99,
    description: "The king of fruits, famous for its rich, custard-like texture and unique aroma."
  },
  { 
    id: 6, 
    name: "Bell Fruit",      
    category: "Seasonal", 
    categories: ["Eco Garden", "Tropical Fruits", "Daily Fresh"],
    tags: ["Crisp", "Thirst-quenching", "Hydrating", "Light Snack"],
    image: "/src/assets/images/Layer-73.jpg",
    heroBanners: "/src/assets/images/BG-09.jpg",
    sku: "BF-006",
    price: 3.50,
    description: "Crisp and thirst-quenching bell fruit with a subtle floral sweetness."
  },
  { 
    id: 7, 
    name: "Mangosteen",      
    category: "Seasonal", 
    categories: ["Premium Fruits", "Exotic", "Seasonal Harvest"],
    tags: ["Queen of Fruits", "Sweet & Tangy", "Trendy", "Luxury"],
    image: "/src/assets/images/Layer-72.svg",
    sku: "MG-007",
    price: 8.99,
    description: "The queen of fruits, offering a perfect balance of sweet, tangy, and juicy flavors."
  },
  { 
    id: 8, 
    name: "Milk Fruit",      
    category: "Seasonal", 
    categories: ["Eco Garden", "Exotic", "Dessert Fruits"],
    tags: ["Milky", "Sweet", "Soft Texture", "Traditional"],
    image: "/src/assets/images/Layer-74.jpg",
    sku: "MF-008",
    price: 7.50,
    description: "Star apple or milk fruit, incredibly sweet with a milky, jelly-like flesh."
  },
  { 
    id: 9, 
    name: "Longan",      
    category: "Seasonal", 
    categories: ["Asian Delicacy", "Tropical Fruits", "Snacks"],
    tags: ["Sweet", "Juicy", "Traditional", "Bite-sized"],
    image: "/src/assets/images/Layer-91.jpg",
    sku: "LG-009",
    price: 4.00,
    description: "Sweet, translucent flesh encased in a thin shell, a classic Asian delicacy."
  },
  { 
    id: 10, 
    name: "Mango",      
    category: "Featured", 
    categories: ["Eco Garden", "Tropical Fruits", "Smoothie Base"],
    tags: ["Sweet", "Buttery", "Golden", "Versatile"],
    image: "/src/assets/images/Layer-94.png", 
    sku: "MA-010",
    price: 4.99,
    description: "Premium tropical mangoes, perfectly ripe with a rich, buttery sweetness."
  },
  { 
    id: 11, 
    name: "Papaya",      
    category: "Seasonal", 
    categories: ["Superfood", "Daily Fresh", "Tropical Fruits"],
    tags: ["Digestive Health", "Fresh", "Morning Diet", "Vitamins"],
    image: "/src/assets/images/Layer-93.svg", 
    sku: "PP-011",
    price: 2.99,
    description: "Freshly picked papaya, excellent for digestion and starting your day right."
  },
];