import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <div className="p-2 sm:p-4 bg-white">
      <div className="relative w-full h-[180px] sm:h-[280px] rounded-lg overflow-hidden bg-gradient-to-r from-black to-gray-800 text-white shadow-md">
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-row items-center justify-between px-6 sm:px-12">
          
          {/* Text Content */}
          <div className="flex flex-col z-10 max-w-[50%]">
             <div className="w-16 h-8 bg-blue-900 rounded-full flex items-center justify-center mb-2 border border-yellow-500/50">
                <span className="font-bold text-yellow-400 text-xs tracking-widest">FOSSIL</span>
             </div>
             <h2 className="text-xl sm:text-3xl font-bold leading-tight mb-1">Classics for her</h2>
             <h3 className="text-lg sm:text-2xl font-semibold mb-2">Shop now</h3>
             <p className="text-xs sm:text-sm text-gray-300 mb-4">Authentic. Inspired. Timeless</p>
             
             {/* Payment Logos Mock */}
             <div className="flex items-center gap-1 bg-white p-1 rounded w-fit">
                <span className="text-[10px] text-orange-600 font-bold px-1 border-r border-gray-300">BOBCARD</span>
                <span className="text-[10px] text-blue-800 font-bold px-1 border-r border-gray-300">Paytm</span>
                <span className="text-[9px] text-black px-1 font-medium">Flat ₹10 Cashback</span>
             </div>
          </div>

          {/* Watch Image Mock */}
          <div className="z-10 relative h-full flex items-center justify-center">
             <div className="absolute top-4 right-[-20px] bg-purple-700 text-white text-[10px] sm:text-xs font-bold px-2 py-1 transform rotate-12 shadow-lg z-20">
                END OF SEASON SALE
             </div>
             <img 
               src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=80" 
               alt="Fossil Watch" 
               className="h-[140px] sm:h-[220px] object-contain drop-shadow-2xl"
             />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
          <div className="w-6 h-1 bg-white rounded-full opacity-100"></div>
          <div className="w-1.5 h-1 bg-white rounded-full opacity-50"></div>
          <div className="w-1.5 h-1 bg-white rounded-full opacity-50"></div>
          <div className="w-1.5 h-1 bg-white rounded-full opacity-50"></div>
          <div className="w-1.5 h-1 bg-white rounded-full opacity-50"></div>
        </div>

      </div>
    </div>
  );
};