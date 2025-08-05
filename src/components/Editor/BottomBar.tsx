"use client";
import PageThumbnail from './PageThumbnail'; 
import { PlusCircle } from 'lucide-react';
import { Spread } from '@/app/editor/page'; // Import the Spread type

interface BottomBarProps {
  spreads: Spread[];
  activeSpread: Spread;
  onSelectSpread: (spread: Spread) => void;
  onAddSpread: (index: number) => void;
}

const BottomBar = ({ spreads, activeSpread, onSelectSpread, onAddSpread }: BottomBarProps) => {
  return (
    <div className="h-40 bg-white shadow-lg z-10 p-2 flex flex-col">
      <div className="text-center py-1">
        <span className="text-sm font-semibold text-gray-800">
          {`Viewing: ${activeSpread.label}`}
        </span>
      </div>
      
      <div className="flex items-center justify-center h-full overflow-x-auto pt-2 border-t border-gray-200">
        <div className="flex items-center">
            {spreads.map((spread, index) => (
              <div key={spread.id} className="group flex items-center">
                <button 
                  onClick={() => onSelectSpread(spread)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center space-y-1 p-2 rounded-md transition-colors ${
                      activeSpread.id === spread.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                >
                  <PageThumbnail 
                    leftLayout={spread.left.layout} 
                    rightLayout={spread.right.layout} 
                    isCover={spread.isCover} 
                  />
                  <p className={`text-xs font-medium ${
                      activeSpread.id === spread.id ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                      {spread.label}
                  </p>
                </button>
                
                {/* Add Spread Button appears on hover */}
                <button 
                    onClick={() => onAddSpread(index + 1)} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1 text-blue-500 hover:text-blue-700"
                >
                    <PlusCircle size={24} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBar;
