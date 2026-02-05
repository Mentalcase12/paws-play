import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import { products, categories, getProductsByCategory, getProductsBySubcategory } from '@/data/products';
import { Product } from '@/types';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name';

export default function ProductsPage() {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const currentCategory = categories.find(c => c.slug === category);

  const filteredProducts = useMemo(() => {
    let result: Product[];

    if (subcategory && category) {
      result = getProductsBySubcategory(category, subcategory);
    } else if (category) {
      result = getProductsByCategory(category);
    } else {
      result = products;
    }

    // Apply price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [category, subcategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            {currentCategory && (
              <>
                <ChevronRight className="w-4 h-4" />
                <Link to={`/products/${category}`} className="hover:text-foreground transition-colors">
                  {currentCategory.name}
                </Link>
              </>
            )}
            {subcategory && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground capitalize">{subcategory}</span>
              </>
            )}
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              {subcategory
                ? `${currentCategory?.name} ${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}`
                : currentCategory?.name || 'All Products'}
            </h1>
            <p className="text-muted-foreground">
              {currentCategory?.description || 'Browse our complete range of premium pet products'}
            </p>
          </div>

          {/* Filters & Sort Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
                Filters
              </button>

              {/* Category Pills */}
              {currentCategory && (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to={`/products/${category}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      !subcategory
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                    }`}
                  >
                    All
                  </Link>
                  {currentCategory.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/products/${category}/${sub.slug}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        subcategory === sub.slug
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 rounded-xl bg-white/5 text-foreground border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="glass-card p-6 mb-8 animate-fade-up">
              <h3 className="font-semibold text-foreground mb-4">Price Range (ZAR)</h3>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-24 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground"
                  placeholder="Min"
                />
                <span className="text-muted-foreground">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-24 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground"
                  placeholder="Max"
                />
                <button
                  onClick={() => setPriceRange([0, 1000])}
                  className="text-sm text-primary hover:underline"
                >
                  Reset
                </button>
              </div>
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or browse a different category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
