/**
 * NOX_WATCH Content Configuration
 * 
 * CUSTOMIZATION GUIDE:
 * ====================
 * This file contains all the content for the NOX_WATCH website.
 * Edit the values below to customize your site without touching multiple files.
 * 
 * TO CUSTOMIZE:
 * 1. PRODUCTS: Edit the 'products' array to add/remove/modify watches
 *    - Change image paths to your own product photos
 *    - Update names, descriptions, and prices
 *    - Add or remove products as needed
 * 
 * 2. COLLECTIONS: Edit the 'collections' array to modify premium collections
 *    - Update collection names and descriptions
 *    - Change collection images
 *    - Adjust the count of pieces in each collection
 * 
 * 3. HERO SECTION: Modify 'hero' object to change homepage hero
 *    - Update headline and subheadline text
 *    - Change background image
 *    - Modify call-to-action button text
 * 
 * 4. STORE DETAILS: Edit 'contact' object to update store information
 *    - Owner name, phone, location details
 * 
 * 5. ABOUT PAGE: Edit 'about' object to customize brand story
 * 
 * IMAGE PATHS:
 * - Use /assets/generated/filename.png for generated placeholder images
 * - Replace with your own images by updating the paths here
 * - Keep images in /public/assets/ folder for easy access
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export const siteContent = {
  // Branding
  branding: {
    storeName: 'NOX_WATCH',
    logoPath: '/assets/generated/nox-watch-logo.dim_512x256.png',
  },

  // Hero Section
  hero: {
    headline: 'Timeless Elegance, Modern Precision',
    subheadline: 'Discover the finest collection of premium watches that define sophistication and style',
    ctaText: 'Explore Collection',
    backgroundImage: '/assets/generated/nox-hero-bg.dim_1920x900.png',
  },

  // Home Page
  home: {
    featuredTitle: 'Featured Watches',
    featuredSubtitle: 'Handpicked timepieces that exemplify craftsmanship and luxury',
    featuredProducts: [
      {
        id: 'watch-01',
        name: 'Classic Elegance',
        description: 'A timeless masterpiece with precision Swiss movement and sapphire crystal',
        price: '$2,499',
        image: '/assets/generated/watch-01.dim_800x800.png',
        badge: 'Bestseller',
      },
      {
        id: 'watch-02',
        name: 'Sport Chronograph',
        description: 'Professional-grade chronograph with water resistance up to 200m',
        price: '$3,299',
        image: '/assets/generated/watch-02.dim_800x800.png',
        badge: 'New',
      },
      {
        id: 'watch-03',
        name: 'Luxury Automatic',
        description: 'Automatic movement with exhibition caseback and premium leather strap',
        price: '$4,799',
        image: '/assets/generated/watch-03.dim_800x800.png',
      },
    ],
    collectionsTitle: 'Premium Collections',
    collectionsSubtitle: 'Curated selections for every style and occasion',
  },

  // Collections
  collections: [
    {
      id: 'classic',
      name: 'Classic Collection',
      description: 'Timeless designs that never go out of style',
      image: '/assets/generated/watch-04.dim_800x800.png',
      count: 12,
    },
    {
      id: 'sport',
      name: 'Sport Collection',
      description: 'Built for performance and durability',
      image: '/assets/generated/watch-05.dim_800x800.png',
      count: 8,
    },
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'The pinnacle of horological excellence',
      image: '/assets/generated/watch-06.dim_800x800.png',
      count: 6,
    },
  ],

  // All Products (for Catalog page)
  products: [
    {
      id: 'watch-01',
      name: 'Classic Elegance',
      description: 'A timeless masterpiece with precision Swiss movement and sapphire crystal',
      price: '$2,499',
      image: '/assets/generated/watch-01.dim_800x800.png',
      badge: 'Bestseller',
    },
    {
      id: 'watch-02',
      name: 'Sport Chronograph',
      description: 'Professional-grade chronograph with water resistance up to 200m',
      price: '$3,299',
      image: '/assets/generated/watch-02.dim_800x800.png',
      badge: 'New',
    },
    {
      id: 'watch-03',
      name: 'Luxury Automatic',
      description: 'Automatic movement with exhibition caseback and premium leather strap',
      price: '$4,799',
      image: '/assets/generated/watch-03.dim_800x800.png',
    },
    {
      id: 'watch-04',
      name: 'Dress Watch Elite',
      description: 'Ultra-thin profile perfect for formal occasions with Italian leather',
      price: '$2,899',
      image: '/assets/generated/watch-04.dim_800x800.png',
    },
    {
      id: 'watch-05',
      name: 'Diver Professional',
      description: 'Professional diving watch with helium escape valve and ceramic bezel',
      price: '$3,799',
      image: '/assets/generated/watch-05.dim_800x800.png',
    },
    {
      id: 'watch-06',
      name: 'Grand Complication',
      description: 'Masterpiece featuring perpetual calendar and moon phase complications',
      price: '$8,999',
      image: '/assets/generated/watch-06.dim_800x800.png',
      badge: 'Limited',
    },
  ] as Product[],

  // About Page
  about: {
    story: {
      paragraph1:
        'NOX_WATCH was founded with a singular vision: to bring the world\'s finest timepieces to discerning collectors and enthusiasts. Located in the heart of Brahmanbaria, we have established ourselves as the premier destination for luxury watches in the region.',
      paragraph2:
        'Our carefully curated collection features watches from renowned manufacturers, each piece selected for its exceptional craftsmanship, precision, and timeless design. We believe that a watch is more than just a timekeeping device—it\'s a statement of personal style and a testament to the art of horology.',
    },
    promise: {
      paragraph1:
        'At NOX_WATCH, we are committed to providing an unparalleled shopping experience. Every timepiece in our collection is guaranteed authentic and comes with full manufacturer warranties. Our knowledgeable staff is dedicated to helping you find the perfect watch that matches your style and needs.',
      paragraph2:
        'We offer comprehensive after-sales service, including professional maintenance, repairs, and adjustments. Your satisfaction is our priority, and we stand behind every watch we sell with our commitment to quality and authenticity.',
    },
  },

  // Contact Information
  contact: {
    storeName: 'NOX_WATCH',
    ownerName: 'NAEEM',
    mobile: '+8801405917740',
    location: 'Brahmanbaria Sodor, Somobei Market, 3rd Floor',
  },

  // Footer
  footer: {
    tagline: 'Your trusted destination for premium timepieces and exceptional service.',
  },
};
