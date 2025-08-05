import Image from 'next/image'

const EditorView= () => {
  return (
    <div className="flex-1 bg-gray-100 p-8 flex justify-center items-center overflow-auto">
      {/* Photobook Spread Container */}
      <div className="flex shadow-lg rounded-md overflow-hidden">
        {/* Left Page */}
        <div className="w-[400px] h-[500px] bg-white p-4 flex flex-col gap-4">
          <div className="relative w-full h-1/2 border border-gray-300 flex items-center justify-center overflow-hidden">
            {/* Image Placeholder 1 */}
            <Image src="/product.png" alt="Placeholder Image" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-1/2 border border-gray-300 flex items-center justify-center overflow-hidden">
            {/* Image Placeholder 2 */}
             <Image src="/product.png" alt="Placeholder Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        {/* Right Page */}
        <div className="w-[400px] h-[500px] bg-white p-4 flex flex-col gap-4">
           <div className="relative w-full h-1/2 border border-gray-300 flex items-center justify-center overflow-hidden">
            {/* Image Placeholder 3 */}
             <Image src="/product.png" alt="Placeholder Image" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-1/2 border border-gray-300 flex items-center justify-center overflow-hidden">
            {/* Image Placeholder 4 */}
             <Image src="/product.png" alt="Placeholder Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditorView