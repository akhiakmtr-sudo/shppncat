import React from 'react';
import { Menu, ShoppingCart, User, Download, Plus } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-3 py-2 max-w-7xl mx-auto">
        
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-3">
          <button className="p-1">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col leading-none">
            <span className="font-bold italic text-xl tracking-wide">ShopNcarT</span>
            <div className="flex items-center gap-1 text-[10px] italic text-gray-200">
              <span>Explore</span>
              <span className="text-secondary font-bold">Plus</span>
              <Plus className="w-3 h-3 text-secondary fill-current" />
            </div>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 bg-white text-primary px-4 py-1 font-semibold text-sm rounded-sm">
            Login
          </button>
          <button className="sm:hidden">
             <User className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-1">
             <span className="hidden sm:block text-sm font-semibold">More</span>
             <Download className="w-6 h-6 sm:w-4 sm:h-4 sm:rotate-90" />
          </div>

          <button className="flex items-center gap-1 relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 rounded-full border border-primary min-w-[18px] h-[18px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="hidden sm:block text-sm font-semibold">Cart</span>
          </button>
        </div>

      </div>
    </header>
  );
};