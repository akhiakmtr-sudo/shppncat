import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SUGGESTED_PRODUCTS } from '../constants';

interface ProductSectionProps {
  onAddToCart: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-white mt-2 py-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-textDark">Suggested For You</h2>
        <button className="bg-primary text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar snap-x">
        {SUGGESTED_PRODUCTS.map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[140px] sm:w-[180px] border border-gray-200 rounded-lg p-2 relative bg-white hover:shadow-lg transition-shadow group">
            {product.tag && (
              <span className="absolute top-2 left-2 bg-gray-200/80 text-[10px] text-gray-600 px-1 rounded z-10">
                {product.tag}
              </span>
            )}
            
            <div className="w-full h-[120px] sm:h-[150px] flex items-center justify-center mb-2 relative overflow-hidden rounded-md">
              <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
              
              {/* Description Overlay - Appears on hover */}
              {product.description && (
                <div className="absolute top-0 left-0 right-0 bg-black/70 backdrop-blur-[1px] text-white text-[10px] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {product.description}
                </div>
              )}

              {/* Add to Cart Button - Appears on hover */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart();
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary hover:bg-yellow-400 text-textDark text-xs font-bold px-4 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20"
              >
                Add to Cart
              </button>
            </div>
            
            <div className="text-center">
               <h3 className="text-sm font-medium text-gray-800 truncate">{product.title}</h3>
               
               {/* Rating Section */}
               {product.rating && (
                 <div className="flex items-center justify-center gap-1 mt-1 mb-0.5">
                   <div className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                     {product.rating} <Star className="w-2 h-2 fill-current" />
                   </div>
                   {product.reviews && (
                     <span className="text-gray-400 text-[10px] font-medium">({product.reviews})</span>
                   )}
                 </div>
               )}

               <div className="mt-0.5 flex flex-col items-center">
                 {product.price && <span className="text-sm font-bold text-gray-900">{product.price}</span>}
                 <p className="text-xs text-green-600 font-medium truncate">{product.discount || 'Special Offer'}</p>
               </div>
            </div>
          </div>
        ))}
        
        {/* View All Card */}
        <div className="snap-start shrink-0 w-[140px] flex items-center justify-center">
             <span className="text-sm text-primary font-medium cursor-pointer">View All</span>
        </div>
      </div>
    </div>
  );
};