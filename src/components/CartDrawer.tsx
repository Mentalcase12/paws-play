import { X, Plus, Minus, Trash2, MapPin, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { shippingRegions } from '@/data/products';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    selectedShipping,
    setSelectedShipping,
    getGrandTotal,
  } = useCart();

  const formatPrice = (price: number) => `R ${price.toFixed(2)}`;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-white/10 z-50 animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="font-display text-2xl font-bold text-foreground">Your Basket</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-4xl">🛒</span>
              </div>
              <p className="text-muted-foreground mb-2">Your basket is empty</p>
              <p className="text-sm text-muted-foreground">Start shopping for your furry friends!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="glass-card p-4 flex gap-4"
                >
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-muted-foreground text-center px-1">
                      {item.product.imageLabel}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-medium truncate">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize mb-2">
                      {item.product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-semibold">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-muted-foreground">
                        {formatPrice(item.product.price)} each
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shipping & Total */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            {/* Shipping Calculator */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Delivery Location</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {shippingRegions.map((region) => (
                  <button
                    key={region.city}
                    onClick={() => setSelectedShipping(region)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      selectedShipping?.city === region.city
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                    }`}
                  >
                    {region.city.split(' ')[0]}
                  </button>
                ))}
              </div>
              {selectedShipping && (
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4" />
                  <span>{selectedShipping.estimatedDays}</span>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>{selectedShipping ? formatPrice(selectedShipping.price) : 'Select location'}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-foreground pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-primary">{formatPrice(getGrandTotal())}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
