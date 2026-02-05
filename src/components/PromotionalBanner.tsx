import { Link } from 'react-router-dom';
import { Truck, Shield, Heart, Clock } from 'lucide-react';

export default function PromotionalBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />

      <div className="relative container mx-auto px-4">
        {/* Main Promo */}
        <div className="glass-card p-8 sm:p-12 mb-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Limited Time Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Free Delivery on Orders Over{' '}
            <span className="text-primary">R500</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Stock up on your pet's favourites and enjoy free nationwide delivery. 
            Use code <span className="text-secondary font-semibold">PAWSLOVE</span> at checkout.
          </p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            Start Shopping
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Truck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Nationwide Delivery</h3>
            <p className="text-sm text-muted-foreground">From Jo'burg to Cape Town, we've got you covered</p>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <div className="w-14 h-14 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-muted-foreground">Premium SA ingredients, vet-approved formulas</p>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Made with Love</h3>
            <p className="text-sm text-muted-foreground">Supporting local businesses and farmers</p>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <div className="w-14 h-14 mx-auto rounded-full bg-veld/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7 text-veld" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Fast Processing</h3>
            <p className="text-sm text-muted-foreground">Orders dispatched within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
