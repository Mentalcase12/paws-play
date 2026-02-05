import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Our most loved items by South African pet parents
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
