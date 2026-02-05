import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingBag, Heart, Share2, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">Browse Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price: number) => `R ${price.toFixed(2)}`;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

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
            <ChevronRight className="w-4 h-4" />
            <Link to={`/products/${product.category}`} className="hover:text-foreground transition-colors capitalize">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="glass-card aspect-square rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-6xl">
                        {product.category === 'dogs' && '🐕'}
                        {product.category === 'cats' && '🐱'}
                        {product.category === 'birds' && '🦜'}
                        {product.category === 'farm' && '🐴'}
                      </span>
                    </div>
                    <span className="text-lg text-muted-foreground">{product.imageLabel}</span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Placeholders */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="glass-card aspect-square rounded-xl flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <span className="text-xs text-muted-foreground">Example {num}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-up">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium capitalize">
                  {product.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-muted-foreground text-sm capitalize">
                  {product.subcategory}
                </span>
                {product.featured && (
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {product.longDescription || product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.stock < 10 && (
                  <span className="text-accent font-medium">Only {product.stock} left!</span>
                )}
              </div>

              {/* Nutritional Info */}
              {product.nutritionalInfo && (
                <div className="glass-card p-4 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Nutritional Information</h3>
                  <p className="text-muted-foreground">{product.nutritionalInfo}</p>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-2 glass-card px-4 py-3 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 btn-primary flex items-center justify-center gap-2 ${
                    isAdded ? 'bg-green-600' : ''
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Basket!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Add to Basket - {formatPrice(product.price * quantity)}
                    </>
                  )}
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
