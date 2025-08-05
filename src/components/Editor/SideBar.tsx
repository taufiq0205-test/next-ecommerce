"use client";

import { useState } from 'react';
import { Image, LayoutTemplate, Paintbrush, Palette, Sparkles, X } from 'lucide-react';

const SideBar = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const navItems = [
    { icon: Image, label: 'Images' },
    { icon: LayoutTemplate, label: 'Layouts' },
    { icon: Paintbrush, label: 'Designs' },
    { icon: Palette, label: 'Theme' },
    { icon: Sparkles, label: 'AI' },
  ];

  const handleItemClick = (label: string) => {
    setActivePanel(prev => (prev === label ? null : label));
  };

  // A sub-component for the content of the expanded panel
  const ExpandedPanel = ({ title, onClose }: { title: string; onClose: () => void; }) => {
    return (
      <div className="w-60 bg-slate-50 p-4 flex flex-col h-full border-l border-r border-gray-200">
          <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 transition-colors">
                  <X size={20} className="text-gray-600" />
              </button>
          </div>
          <div className="flex-grow overflow-y-auto">
              <p className="text-sm text-gray-500 mb-4">Content for {title} goes here.</p>
              <div className="grid grid-cols-2 gap-2">
                  {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-24 bg-slate-200 rounded-md flex items-center justify-center">
                        <span className="text-slate-400 text-xs">Image {i+1}</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    );
  };

  return (
    <div className="flex h-full shadow-lg z-20">
        <div className="w-24 bg-white flex flex-col items-center p-2 space-y-2">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleItemClick(item.label)}
                    className={`flex flex-col items-center justify-center w-full py-3 px-2 rounded-lg transition-colors duration-200 ${
                        activePanel === item.label
                            ? 'bg-blue-100 text-blue-600'
                            : 'hover:bg-gray-100 text-gray-800'
                    }`}
                >
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                    <span className="mt-2 text-xs font-medium">{item.label}</span>
                </button>
            ))}
        </div>
        
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activePanel ? 'w-60' : 'w-0'}`}>
           {activePanel && <ExpandedPanel title={activePanel} onClose={() => setActivePanel(null)} />}
        </div>
    </div>
  );
};

export default SideBar;
