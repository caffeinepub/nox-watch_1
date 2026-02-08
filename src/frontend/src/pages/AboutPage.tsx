import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { siteContent } from '@/content/noxContent';
import { Award, Clock, Shield, Star } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest timepieces from renowned manufacturers',
    },
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Every watch comes with certificate of authenticity',
    },
    {
      icon: Clock,
      title: 'Expert Service',
      description: 'Professional maintenance and repair services',
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'Dedicated to providing exceptional customer experience',
    },
  ];

  return (
    <div className="py-12">
      <div className="container max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About {siteContent.contact.storeName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted destination for premium timepieces
          </p>
        </div>

        {/* Brand Story Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>{siteContent.about.story.paragraph1}</p>
            <p>{siteContent.about.story.paragraph2}</p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Premium Promise Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Promise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>{siteContent.about.promise.paragraph1}</p>
            <p>{siteContent.about.promise.paragraph2}</p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Features Grid */}
        <section className="mb-16 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Owner Info */}
        <section className="text-center space-y-4 py-12 bg-muted/30 rounded-lg">
          <h3 className="text-2xl font-bold">Meet the Owner</h3>
          <p className="text-lg">
            <span className="font-semibold text-primary">{siteContent.contact.ownerName}</span>
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With years of experience in the luxury watch industry, {siteContent.contact.ownerName} is dedicated to
            helping customers find the perfect timepiece that matches their style and needs.
          </p>
        </section>
      </div>
    </div>
  );
}
