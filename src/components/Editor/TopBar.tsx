import Image from 'next/image';
import Link from 'next/link';
import { Undo2, Redo2, Eye, ShoppingCart } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
            <Image src="/photobook.png" alt="FE-prototype Logo" width={26} height={26} />
            <span className="text-2xl tracking-wide">FE-prototype</span>
        </Link>
        
        {/* Undo/Redo Section */}
        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-300">
          <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Undo2 size={20} className="text-gray-700" />
            <span className="text-xs mt-1 text-gray-600">Undo</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Redo2 size={20} className="text-gray-700" />
            <span className="text-xs mt-1 text-gray-600">Redo</span>
          </button>
        </div>
      </div>
      
      <div className="font-medium text-gray-700">Project Name</div> {/* Project Name Placeholder */}
      
      <div className="flex items-center gap-4">
        <button className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Eye size={20} className="text-gray-700" />
            <span className="text-xs mt-1 text-gray-600">Preview</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-bold">
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
