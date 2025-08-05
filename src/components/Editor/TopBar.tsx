
import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
 <Image src="/photobook.png" alt="FE-prototype Logo" width={26} height={26} />
          <span className="text-2xl tracking-wide">FE-prototype</span>
        </Link>
        {/* Undo/Redo Placeholders */}
        <div className="flex gap-2">
          <button className="text-gray-700 hover:text-gray-900">Undo</button>
          <button className="text-gray-700 hover:text-gray-900">Redo</button>
        </div>
      </div>
      <div className="font-medium text-gray-700">Project Name</div> {/* Project Name Placeholder */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">Preview</button> {/* Preview Placeholder */}
        <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Add to Cart</button> {/* Add to Cart Placeholder */}
      </div>
    </div>
  )
}
export default TopBar;