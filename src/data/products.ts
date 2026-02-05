import { Product, Category, ShippingRegion } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Dogs',
    slug: 'dogs',
    description: 'Premium nutrition and accessories for your loyal companion',
    subcategories: [
      { id: '1a', name: 'Food', slug: 'food' },
      { id: '1b', name: 'Treats', slug: 'treats' },
      { id: '1c', name: 'Toys', slug: 'toys' },
      { id: '1d', name: 'Accessories', slug: 'accessories' },
      { id: '1e', name: 'Health', slug: 'health' },
    ],
  },
  {
    id: '2',
    name: 'Cats',
    slug: 'cats',
    description: 'Gourmet meals and enrichment for your feline friend',
    subcategories: [
      { id: '2a', name: 'Food', slug: 'food' },
      { id: '2b', name: 'Treats', slug: 'treats' },
      { id: '2c', name: 'Toys', slug: 'toys' },
      { id: '2d', name: 'Accessories', slug: 'accessories' },
      { id: '2e', name: 'Health', slug: 'health' },
    ],
  },
  {
    id: '3',
    name: 'Birds',
    slug: 'birds',
    description: 'Quality seeds, treats and habitat essentials',
    subcategories: [
      { id: '3a', name: 'Food', slug: 'food' },
      { id: '3b', name: 'Treats', slug: 'treats' },
      { id: '3c', name: 'Toys', slug: 'toys' },
      { id: '3d', name: 'Accessories', slug: 'accessories' },
      { id: '3e', name: 'Health', slug: 'health' },
    ],
  },
  {
    id: '4',
    name: 'Farm & Veld',
    slug: 'farm',
    description: 'Supplies for livestock, horses, and farm animals',
    subcategories: [
      { id: '4a', name: 'Food', slug: 'food' },
      { id: '4b', name: 'Treats', slug: 'treats' },
      { id: '4c', name: 'Toys', slug: 'toys' },
      { id: '4d', name: 'Accessories', slug: 'accessories' },
      { id: '4e', name: 'Health', slug: 'health' },
    ],
  },
];

export const products: Product[] = [
  // Dogs - Food
  {
    id: 'dog-1',
    name: 'High-Protein Boerboel Bites',
    category: 'dogs',
    subcategory: 'food',
    price: 549.99,
    description: 'Premium dry food formulated for large South African breeds. Made with locally-sourced ingredients.',
    longDescription: 'Our High-Protein Boerboel Bites are specially crafted for large, active breeds like the Boerboel. This nutrient-dense formula contains 32% protein from real Karoo lamb and free-range chicken, supporting muscle development and sustained energy. Enriched with omega fatty acids for a healthy coat and skin.',
    imageLabel: 'Boerboel Premium Food',
    stock: 45,
    featured: true,
    nutritionalInfo: 'Protein: 32%, Fat: 18%, Fibre: 4%, Moisture: 10%',
    ingredients: ['Karoo Lamb', 'Free-Range Chicken', 'Brown Rice', 'Sweet Potato', 'Omega Oils'],
  },
  {
    id: 'dog-2',
    name: 'Karoo Lamb Pellets for Puppies',
    category: 'dogs',
    subcategory: 'food',
    price: 429.99,
    description: 'Gentle nutrition for growing puppies using free-range Karoo lamb.',
    longDescription: 'Start your puppy on the right path with our Karoo Lamb Pellets. This gentle formula is designed for sensitive stomachs and growing bodies, featuring free-range lamb from the vast Karoo region. Added DHA supports brain development.',
    imageLabel: 'Puppy Food',
    stock: 60,
    featured: true,
    nutritionalInfo: 'Protein: 28%, Fat: 16%, Fibre: 3%, Moisture: 10%',
    ingredients: ['Karoo Lamb', 'Oats', 'Fish Oil', 'Vegetables', 'Vitamins'],
  },
  {
    id: 'dog-3',
    name: 'Biltong-Style Training Treats',
    category: 'dogs',
    subcategory: 'treats',
    price: 89.99,
    description: 'Air-dried beef treats perfect for training, made the South African way.',
    longDescription: 'Inspired by our beloved biltong tradition, these training treats are air-dried for maximum flavour and nutrition. The perfect size for reward-based training, these treats are high in protein and low in fat.',
    imageLabel: 'Biltong Treats',
    stock: 120,
    nutritionalInfo: 'Protein: 65%, Fat: 8%, Moisture: 15%',
    ingredients: ['Grass-Fed Beef', 'Apple Cider Vinegar', 'Sea Salt'],
  },
  {
    id: 'dog-4',
    name: 'Ostrich Stick Treats',
    category: 'dogs',
    subcategory: 'treats',
    price: 129.99,
    description: 'Lean ostrich meat sticks for dogs with sensitive stomachs.',
    longDescription: 'Premium ostrich from the Western Cape, these stick treats are incredibly lean and hypoallergenic. Perfect for dogs with food sensitivities or those watching their weight.',
    imageLabel: 'Ostrich Treats',
    stock: 85,
    featured: true,
    nutritionalInfo: 'Protein: 55%, Fat: 5%, Moisture: 18%',
    ingredients: ['Ostrich Meat', 'Rosemary Extract'],
  },
  {
    id: 'dog-5',
    name: 'Kudu Chew Toys',
    category: 'dogs',
    subcategory: 'toys',
    price: 199.99,
    description: 'Natural kudu horn chews, ethically sourced from game farms.',
    longDescription: 'These all-natural kudu horn chews are long-lasting and completely digestible. Sourced ethically from South African game farms, they help clean teeth and satisfy your dogs natural chewing instincts.',
    imageLabel: 'Kudu Chew',
    stock: 40,
    featured: true,
  },
  {
    id: 'dog-6',
    name: 'Safari Rope Tug Toy',
    category: 'dogs',
    subcategory: 'toys',
    price: 79.99,
    description: 'Durable cotton rope toy in vibrant African-inspired patterns.',
    imageLabel: 'Rope Toy',
    stock: 95,
  },
  {
    id: 'dog-7',
    name: 'Nguni Leather Collar',
    category: 'dogs',
    subcategory: 'accessories',
    price: 349.99,
    description: 'Handcrafted collar featuring genuine Nguni cowhide patterns.',
    longDescription: 'Each collar is unique, featuring the distinctive markings of Nguni cattle. Handcrafted by local artisans, these collars combine traditional African aesthetics with modern durability.',
    imageLabel: 'Leather Collar',
    stock: 25,
    featured: true,
  },
  {
    id: 'dog-8',
    name: 'Bushveld First Aid Kit',
    category: 'dogs',
    subcategory: 'health',
    price: 459.99,
    description: 'Complete veterinary first aid kit for active outdoor dogs.',
    imageLabel: 'First Aid Kit',
    stock: 30,
  },

  // Cats
  {
    id: 'cat-1',
    name: 'Cape Hake & Snoek Supreme',
    category: 'cats',
    subcategory: 'food',
    price: 389.99,
    description: 'Ocean-fresh wet food featuring sustainably caught Cape fish.',
    longDescription: 'Our Cape Hake & Snoek Supreme brings the taste of the Atlantic Ocean to your cats bowl. Made with sustainably sourced fish from Cape Town waters, this grain-free recipe is rich in omega-3 fatty acids.',
    imageLabel: 'Cat Fish Food',
    stock: 70,
    featured: true,
    nutritionalInfo: 'Protein: 12%, Fat: 6%, Moisture: 78%',
    ingredients: ['Cape Hake', 'Snoek', 'Fish Broth', 'Sunflower Oil'],
  },
  {
    id: 'cat-2',
    name: 'Free-Range Chicken Chunks',
    category: 'cats',
    subcategory: 'food',
    price: 349.99,
    description: 'Premium chicken wet food made with free-range poultry.',
    imageLabel: 'Cat Chicken Food',
    stock: 55,
  },
  {
    id: 'cat-3',
    name: 'Sardine Whisker Lickers',
    category: 'cats',
    subcategory: 'treats',
    price: 69.99,
    description: 'Freeze-dried sardine treats that cats go wild for.',
    imageLabel: 'Cat Sardine Treats',
    stock: 100,
  },
  {
    id: 'cat-4',
    name: 'Protea Feather Wand',
    category: 'cats',
    subcategory: 'toys',
    price: 89.99,
    description: 'Interactive wand toy with protea-inspired feather attachments.',
    imageLabel: 'Cat Wand Toy',
    stock: 65,
    featured: true,
  },
  {
    id: 'cat-5',
    name: 'Shweshwe Pattern Cat Bed',
    category: 'cats',
    subcategory: 'accessories',
    price: 599.99,
    description: 'Cosy cat bed featuring traditional Shweshwe fabric patterns.',
    longDescription: 'This beautiful cat bed showcases authentic Shweshwe fabric, a beloved South African textile tradition. The cushioned interior provides supreme comfort while the bold patterns add African flair to your home.',
    imageLabel: 'Cat Bed',
    stock: 20,
    featured: true,
  },

  // Birds
  {
    id: 'bird-1',
    name: 'Sunflower & Millet Wild Mix',
    category: 'birds',
    subcategory: 'food',
    price: 149.99,
    description: 'Premium seed blend for indigenous and exotic birds.',
    imageLabel: 'Bird Seed Mix',
    stock: 80,
    featured: true,
  },
  {
    id: 'bird-2',
    name: 'Loerie Fruit Treats',
    category: 'birds',
    subcategory: 'treats',
    price: 79.99,
    description: 'Dried fruit medley perfect for fruit-eating birds.',
    imageLabel: 'Bird Fruit Treats',
    stock: 45,
  },
  {
    id: 'bird-3',
    name: 'Marula Wood Perch Set',
    category: 'birds',
    subcategory: 'accessories',
    price: 189.99,
    description: 'Natural Marula wood perches, hand-selected for varied textures.',
    imageLabel: 'Bird Perches',
    stock: 35,
  },

  // Farm & Veld
  {
    id: 'farm-1',
    name: 'Lucerne Cubes - Premium Grade',
    category: 'farm',
    subcategory: 'food',
    price: 289.99,
    description: 'High-quality lucerne cubes for horses and livestock.',
    imageLabel: 'Lucerne Cubes',
    stock: 100,
    featured: true,
  },
  {
    id: 'farm-2',
    name: 'Horse Treat Carrots & Apple',
    category: 'farm',
    subcategory: 'treats',
    price: 119.99,
    description: 'Natural treat biscuits for horses, made with real fruit and veg.',
    imageLabel: 'Horse Treats',
    stock: 60,
  },
  {
    id: 'farm-3',
    name: 'Leather Halter - Full Size',
    category: 'farm',
    subcategory: 'accessories',
    price: 899.99,
    description: 'Premium leather halter handcrafted by local saddlers.',
    imageLabel: 'Horse Halter',
    stock: 15,
  },
  {
    id: 'farm-4',
    name: 'Poultry Feed - Layers Mash',
    category: 'farm',
    subcategory: 'food',
    price: 199.99,
    description: 'Nutritionally complete feed for laying hens.',
    imageLabel: 'Poultry Feed',
    stock: 90,
  },
];

export const shippingRegions: ShippingRegion[] = [
  { city: 'Johannesburg', price: 75, estimatedDays: '2-3 business days' },
  { city: 'Cape Town', price: 95, estimatedDays: '3-5 business days' },
  { city: 'Durban', price: 85, estimatedDays: '2-4 business days' },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (category: string, subcategory: string): Product[] => {
  return products.filter(p => p.category === category && p.subcategory === subcategory);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.category.toLowerCase().includes(searchTerm)
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
