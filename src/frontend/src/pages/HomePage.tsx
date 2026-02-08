import HeroSection from '@/components/marketing/HeroSection';
import ProductCard from '@/components/catalog/ProductCard';
import CollectionHighlights from '@/components/marketing/CollectionHighlights';
import { siteContent } from '@/content/noxContent';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Watches Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {siteContent.home.featuredTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {siteContent.home.featuredSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.home.featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" className="gap-2">
                View All Watches <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Collections Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {siteContent.home.collectionsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {siteContent.home.collectionsSubtitle}
            </p>
          </div>

          <CollectionHighlights />
        </div>
      </section>
    </div>
  );
}
