import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onAiChatOpen: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onAiChatOpen }) => {
  return (
    <div className="bg-white px-3 py-2 sticky top-[52px] z-40 shadow-sm border-b border-gray-100">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search for Products" 
          className="w-full bg-blue-50/50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block pl-10 p-2.5 outline-none transition-shadow"
        />
        
        {/* AI Trigger Button */}
        <button 
          onClick={onAiChatOpen}
          className="absolute inset-y-0 right-2 flex items-center gap-1 text-xs font-semibold text-purple-600 hover:bg-purple-50 px-2 rounded-md transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden xs:inline">Ask AI</span>
        </button>
      </div>
    </div>
  );
};