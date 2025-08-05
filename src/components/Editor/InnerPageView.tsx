import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

const InnerPageView = ({ spreadLabel }: { spreadLabel: string }) => {
    const [leftPage, rightPage] = spreadLabel.split(' ')[1].split('-');

    return (
        // Workspace background
        <div className="flex-1 bg-slate-200 p-8 flex flex-col justify-center items-center overflow-auto">
          {/* Container for the book and its labels */}
          <div>
            {/* Photobook Container for Inner Pages */}
            <div className="flex items-center bg-white shadow-xl">
              
              {/* Left Page */}
              <div className="w-[550px] h-[550px] bg-white p-6 flex flex-col gap-4">
                <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100/50">
                  <div className="text-center text-gray-400">
                      <ImageIcon className="mx-auto h-12 w-12" />
                      <p className="mt-2 text-sm">Drag & drop your photo here</p>
                  </div>
                </div>
              </div>
    
              {/* Simple Crease for inner pages */}
              <div className="w-px h-[550px] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
    
              {/* Right Page */}
              <div className="w-[550px] h-[550px] bg-white p-6 flex flex-col gap-4">
                <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100/50">
                  <div className="text-center text-gray-400">
                      <ImageIcon className="mx-auto h-12 w-12" />
                      <p className="mt-2 text-sm">Drag & drop your photo here</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Page Labels for an inner spread */}
            <div className="flex justify-between mt-4 text-sm font-medium text-gray-600">
                <div className="w-[550px] text-center">Page {leftPage}</div>
                <div className="w-px"></div> {/* Spacer for the crease */}
                <div className="w-[550px] text-center">Page {rightPage}</div>
            </div>
          </div>
        </div>
      );
};

export default InnerPageView;
