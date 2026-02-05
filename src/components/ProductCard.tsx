import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => `R ${price.toFixed(2)}`;

  return (
    <div className="product-card glass-card group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center product-image transition-transform duration-500">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">
                {product.category === 'dogs' && '🐕'}
                {product.category === 'cats' && '🐱'}
                {product.category === 'birds' && '🦜'}
                {product.category === 'farm' && '🐴'}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">{product.imageLabel}</span>
          </div>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Stock Warning */}
        {product.stock < 10 && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            Only {product.stock} left
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Eye className="w-5 h-5 text-white" />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors shadow-glow-primary"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium capitalize">
            {product.category}
          </span>
          <span className="text-xs text-muted-foreground capitalize">{product.subcategory}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
          <button
            onClick={() => addToCart(product)}
            className="btn-secondary px-4 py-2 text-sm"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
