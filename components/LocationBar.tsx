import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

export const LocationBar: React.FC = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2 px-3 flex items-center gap-2 text-xs sm:text-sm text-gray-700">
      <MapPin className="w-4 h-4 text-gray-500" />
      <span className="font-medium">Location not set</span>
      <span className="text-primary font-medium flex items-center cursor-pointer hover:underline">
        Select delivery location <ChevronRight className="w-3 h-3 ml-0.5" />
      </span>
    </div>
  );
};