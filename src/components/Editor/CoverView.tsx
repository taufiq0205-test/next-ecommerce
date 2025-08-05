import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

const CoverView = () => {
    return (
        // Workspace background
        <div className="flex-1 bg-slate-200 p-8 flex flex-col justify-center items-center overflow-auto">
          {/* Container for the book and its labels */}
          <div>
            {/* Photobook Container with perspective and shadow for depth */}
            <div className="flex items-center bg-white shadow-2xl rounded-lg" style={{ perspective: '2000px' }}>
              
              {/* Left Page (Back Cover) */}
              <div className="w-[550px] h-[550px] bg-neutral-50 p-6 flex flex-col gap-4 transform transition-transform duration-500 ease-in-out hover:rotate-y-2">
                <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100/50">
                  <div className="text-center text-gray-400">
                      <ImageIcon className="mx-auto h-12 w-12" />
                      <p className="mt-2 text-sm">Drag & drop your photo here</p>
                  </div>
                </div>
              </div>
    
              {/* Spine */}
              <div className="h-[550px] flex">
                  <div className="w-2 h-full bg-gray-200"></div>
                  <div className="w-9 h-full bg-gray-300"></div>
                  <div className="w-2 h-full bg-gray-200"></div>
              </div>
    
              {/* Right Page (Front Cover) */}
              <div className="w-[550px] h-[550px] bg-neutral-50 p-6 flex flex-col gap-4 transform transition-transform duration-500 ease-in-out hover:-rotate-y-2">
                <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100/50">
                  <div className="text-center text-gray-400">
                      <ImageIcon className="mx-auto h-12 w-12" />
                      <p className="mt-2 text-sm">Drag & drop your photo here</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Page Labels */}
            <div className="flex justify-between mt-4 text-sm font-medium text-gray-600">
                <div className="w-[550px] text-center">Back Cover</div>
                <div className="w-[52px]"></div>
                <div className="w-[550px] text-center">Front Cover</div>
            </div>
          </div>
        </div>
      );
};

export default CoverView;
