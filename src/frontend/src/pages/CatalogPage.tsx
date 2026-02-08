import { useState, useMemo } from 'react';
import ProductCard from '@/components/catalog/ProductCard';
import CatalogToolbar from '@/components/catalog/CatalogToolbar';
import { siteContent } from '@/content/noxContent';

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...siteContent.products];

    // Filter by search query
    if (searchQuery) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    products.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price-low') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceA - priceB;
      } else {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceB - priceA;
      }
    });

    return products;
  }, [searchQuery, sortBy]);

  return (
    <div className="py-12">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Watch Catalog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of premium timepieces
          </p>
        </div>

        {/* Toolbar */}
        <CatalogToolbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No watches found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
