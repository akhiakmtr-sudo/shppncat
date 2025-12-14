import React from 'react';
import { CATEGORIES } from '../constants';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="bg-white pb-4 overflow-x-auto hide-scrollbar">
      <div className="grid grid-rows-2 grid-flow-col auto-cols-[80px] sm:auto-cols-[100px] gap-y-4 gap-x-2 px-2 min-w-max">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 group-hover:shadow-md transition-all">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-gray-800 text-center leading-tight max-w-[64px] truncate">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};