import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchProducts } from '@/data/products';
import { Product } from '@/types';

interface SearchBarProps {
  onClose?: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 1) {
      setIsLoading(true);
      // Simulate a slight delay for better UX
      const timer = setTimeout(() => {
        const searchResults = searchProducts(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose?.();
  };

  const formatPrice = (price: number) => {
    return `R ${price.toFixed(2)}`;
  };

  return (
    <div className="relative">
      <div className="glass-card">
        <div className="flex items-center gap-3 p-4">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Results */}
        {(results.length > 0 || isLoading) && (
          <div className="border-t border-white/10 max-h-80 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-muted-foreground">
                Searching...
              </div>
            ) : (
              <div className="p-2">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors text-left"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs text-muted-foreground">
                      {product.imageLabel.substring(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-medium truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground capitalize">{product.category} • {product.subcategory}</p>
                    </div>
                    <span className="text-primary font-semibold">{formatPrice(product.price)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {query.trim().length > 1 && results.length === 0 && !isLoading && (
          <div className="border-t border-white/10 p-4 text-center text-muted-foreground">
            No products found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
