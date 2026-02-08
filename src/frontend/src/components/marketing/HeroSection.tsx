import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/noxContent';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${siteContent.hero.backgroundImage})`,
      }}
    >
      <div className="container relative z-10 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {siteContent.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {siteContent.hero.subheadline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/catalog">
            <Button size="lg" className="gap-2 text-base px-8">
              {siteContent.hero.ctaText} <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="text-base px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
