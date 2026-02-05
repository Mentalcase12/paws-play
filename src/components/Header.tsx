import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';
import { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass Header Background */}
      <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-xl border-b border-white/10" />
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow-primary transition-transform group-hover:scale-105">
              <span className="text-2xl">🐾</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground">Paws & Play</h1>
              <p className="text-xs text-muted-foreground tracking-wider">SOUTH AFRICA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <div key={category.id} className="nav-item relative group">
                <Link
                  to={`/products/${category.slug}`}
                  className="flex items-center gap-1 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium animated-underline"
                >
                  {category.name}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown */}
                <div className="nav-dropdown min-w-[200px]">
                  <div className="space-y-1">
                    <Link
                      to={`/products/${category.slug}`}
                      className="block px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                    >
                      All {category.name}
                    </Link>
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/products/${category.slug}/${sub.slug}`}
                        className="block px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-xs font-bold flex items-center justify-center text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-up">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-white/10 animate-fade-up">
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="space-y-2">
                  <Link
                    to={`/products/${category.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-semibold text-foreground"
                  >
                    {category.name}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/products/${category.slug}/${sub.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
