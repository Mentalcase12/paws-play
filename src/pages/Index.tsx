import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromotionalBanner from '@/components/PromotionalBanner';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <PromotionalBanner />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
