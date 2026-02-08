import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteContent } from '@/content/noxContent';

export default function CollectionHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {siteContent.collections.map((collection) => (
        <Card
          key={collection.id}
          className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <CardHeader className="p-0">
            <div className="relative h-64 overflow-hidden bg-muted">
              <img
                src={collection.image}
                alt={collection.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{collection.name}</CardTitle>
              <Badge variant="secondary">{collection.count} pieces</Badge>
            </div>
            <p className="text-muted-foreground">{collection.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
