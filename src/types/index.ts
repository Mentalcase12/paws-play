export interface Product {
  id: string;
  name: string;
  category: 'dogs' | 'cats' | 'birds' | 'farm';
  subcategory: 'food' | 'treats' | 'toys' | 'accessories' | 'health';
  price: number;
  description: string;
  longDescription?: string;
  imageLabel: string;
  stock: number;
  featured?: boolean;
  nutritionalInfo?: string;
  ingredients?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingRegion {
  city: string;
  price: number;
  estimatedDays: string;
}

export interface Category {
  id: string;
  name: string;
  slug: 'dogs' | 'cats' | 'birds' | 'farm';
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: 'food' | 'treats' | 'toys' | 'accessories' | 'health';
}
