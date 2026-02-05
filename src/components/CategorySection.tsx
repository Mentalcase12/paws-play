import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const categoryIcons: Record<string, string> = {
  dogs: '🐕',
  cats: '🐱',
  birds: '🦜',
  farm: '🐴',
};

const categoryColors: Record<string, string> = {
  dogs: 'from-primary/30 to-primary/10',
  cats: 'from-secondary/30 to-secondary/10',
  birds: 'from-accent/30 to-accent/10',
  farm: 'from-veld/30 to-veld/10',
};

export default function CategorySection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From loyal Boerboels to pampered Persian cats, we've got premium products for every member of your animal family.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.slug}`}
              className="group glass-card p-6 hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryColors[category.slug]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{categoryIcons[category.slug]}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

              {/* Subcategories Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {category.subcategories.slice(0, 3).map((sub) => (
                  <span
                    key={sub.id}
                    className="px-2 py-1 rounded-full bg-white/5 text-xs text-muted-foreground"
                  >
                    {sub.name}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
