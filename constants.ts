import { Category, Product } from './types';

// Mock Categories based on the screenshot
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Travel', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Appliances', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=100&q=80' },
  { id: 4, name: 'Beauty', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=100&q=80' },
  { id: 5, name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&w=100&q=80' },
  { id: 6, name: 'Toys', image: 'https://images.unsplash.com/photo-1566576912906-254346c55e25?auto=format&fit=crop&w=100&q=80' },
  { id: 7, name: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80' },
  { id: 8, name: 'Food & Health', image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=100&q=80' },
  { id: 9, name: 'Home & Kit...', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=100&q=80' },
  { id: 10, name: 'Auto Acc', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=100&q=80' },
  { id: 11, name: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=100&q=80' },
  { id: 12, name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=100&q=80' },
];

export const SUGGESTED_PRODUCTS: Product[] = [
  {
    id: 101,
    title: 'Wireless Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80',
    tag: 'Ad',
    price: '₹899',
    discount: 'Min. 50% Off',
    rating: 4.2,
    reviews: '3,421',
    description: 'Deep bass & crystal clear highs.'
  },
  {
    id: 102,
    title: 'Noise Cancelling',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
    price: '₹2,499',
    discount: 'Spl. Offer',
    rating: 4.5,
    reviews: '8,102',
    description: 'Immersive sound, 30h battery life.'
  },
  {
    id: 103,
    title: 'True Wireless',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=300&q=80',
    price: '₹1,299',
    discount: 'Grab Now',
    rating: 3.9,
    reviews: '1,205',
    description: 'Sweatproof, perfect for gym.'
  },
  {
    id: 104,
    title: 'Sport Series',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80',
    price: '₹599',
    discount: 'Min. 30% Off',
    rating: 4.1,
    reviews: '556',
    description: 'Ergonomic fit, secure grip.'
  }
];