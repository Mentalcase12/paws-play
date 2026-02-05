import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/20 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Premium Pet Products • Made in South Africa</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            Where
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Paws Meet Play
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-xl animate-fade-up-delay-2">
            Premium nutrition and accessories for your beloved pets, crafted with love using the finest South African ingredients. From Boerboel to Birman, we've got them covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link to="/products/dogs" className="btn-primary inline-flex items-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 rounded-xl border border-white/20 text-foreground font-semibold hover:bg-white/5 transition-colors"
            >
              Browse Categories
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-3xl font-display font-bold text-primary mb-1">5000+</p>
              <p className="text-sm text-muted-foreground">Happy Pets</p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-3xl font-display font-bold text-secondary mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Local Products</p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-3xl font-display font-bold text-accent mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Vet Support</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative w-[500px] h-[500px]">
            {/* Floating Cards */}
            <div className="absolute top-0 right-10 glass-card p-4 animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="text-xl">🐕</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dogs</p>
                  <p className="text-xs text-muted-foreground">Premium Nutrition</p>
                </div>
              </div>
            </div>

            <div className="absolute top-32 right-0 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <span className="text-xl">🐱</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cats</p>
                  <p className="text-xs text-muted-foreground">Gourmet Meals</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 right-20 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <span className="text-xl">🦜</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Birds</p>
                  <p className="text-xs text-muted-foreground">Quality Seeds</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 glass-card p-4 animate-float" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-veld to-veld/50 flex items-center justify-center">
                  <span className="text-xl">🐴</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Farm</p>
                  <p className="text-xs text-muted-foreground">Livestock Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
