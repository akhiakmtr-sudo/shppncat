import React, { useState } from 'react';
import { Header } from './components/Header';
import { LocationBar } from './components/LocationBar';
import { SearchBar } from './components/SearchBar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductSection } from './components/ProductSection';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-bgGray pb-20">
      <Header cartCount={cartCount} />
      <LocationBar />
      <SearchBar onAiChatOpen={() => setIsAiChatOpen(true)} />
      
      <main className="max-w-7xl mx-auto space-y-2">
        <HeroBanner />
        <CategoryGrid />
        <ProductSection onAddToCart={handleAddToCart} />
        
        {/* Placeholder for more content to demonstrate scrolling */}
        <div className="h-40 flex items-center justify-center text-gray-400 text-sm">
           Scroll for more
        </div>
      </main>

      {/* AI Chat Modal */}
      <GeminiChat isOpen={isAiChatOpen} onClose={() => setIsAiChatOpen(false)} />
    </div>
  );
};

export default App;