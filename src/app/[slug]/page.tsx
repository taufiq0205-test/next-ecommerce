"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const SinglePage = () => {
  const [quantity, setQuantity] = useState(100)
  const [paperMaterial, setPaperMaterial] = useState("260gsm Art Card")
  const [finishing, setFinishing] = useState("1 Side Hot Stamping")

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col gap-8 py-8'>
      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">Business Cards Hot Stamping -Full Edge Stamping</h1>
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <a href="/business-cards" className="hover:underline">Business Cards</a>
          <span>/</span>
          <span>Business Cards Hot Stamping -Full Edge Stamping</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE - PRODUCT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#f9f7e8] p-4 rounded-md">
            <div className="relative h-[400px] w-full">
              <Image 
                src="/public/uploads/1753861660796-Screenshot_2025-07-16_at_9.24.41_AM.png" 
                alt="Business Card with Hot Stamping" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-500 hover:underline flex items-center gap-1">
              <span>Share Product</span>
            </button>
          </div>

        {/* Description Tabs */}
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-4">
              <button className="px-4 py-2 border-b-2 border-red-500 font-medium">Description</button>
              <button className="px-4 py-2 text-gray-500">Templates</button>
            </div>
          </div>
          <div className="py-4">
            <h3 className="font-medium">Make Your Mark With Premium Business Cards</h3>
          </div>
        </div>




        </div>

        {/* RIGHT SIDE - PRODUCT DETAILS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="border border-gray-200 rounded-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Price Calculator</h2>
            </div>
            
            <div className="p-4 flex flex-col gap-4">
              {/* Size */}
              <div className="flex justify-between items-center">
                <label className="font-medium">Size</label>
                <div className="w-1/2">
                  <input 
                    type="text" 
                    value="90 mm x 54 mm" 
                    readOnly 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              {/* Quantity */}
              <div className="flex justify-between items-center">
                <label className="font-medium">Quantity Per Design</label>
                <div className="w-1/2">
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                  </select>
                </div>
              </div>
              
              {/* Paper Material */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <label className="font-medium">Paper Material</label>
                  <div className="relative">
                    <span className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs cursor-help">?</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={paperMaterial}
                    onChange={(e) => setPaperMaterial(e.target.value)}
                  >
                    <option value="260gsm Art Card">260gsm Art Card</option>
                    <option value="300gsm Art Card">300gsm Art Card</option>
                  </select>
                </div>
              </div>
              
              {/* Finishing */}
              <div className="flex justify-between items-center">
                <label className="font-medium">Finishing</label>
                <div className="w-1/2">
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={finishing}
                    onChange={(e) => setFinishing(e.target.value)}
                  >
                    <option value="1 Side Hot Stamping">1 Side Hot Stamping</option>
                    <option value="2 Side Hot Stamping">2 Side Hot Stamping</option>
                  </select>
                </div>
              </div>
              
              
              
              
              
              
              
              {/* File Upload */}
              <div className="flex justify-between items-start">
                <div>
                  <label className="font-medium">The hot stamping file must be uploaded</label>
                </div>
                <div className="w-1/2 border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
                  <div className="text-red-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <div className="text-sm text-center">
                    <p>Drag a file OR</p>
                    <button className="text-red-500 font-medium">Select File</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Price and Add to Cart */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Total:</span>
                <span className="text-2xl font-bold text-red-500">RM0.00</span>
                <span className="text-xs text-gray-500">Unit Price: RM0.00</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <input type="checkbox" id="shipping" />
                  <label htmlFor="shipping" className="text-sm">Shipping Cost Estimation</label>
                </div>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <Link href="/editor" className="mt-4 bg-red-100 rounded-full p-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-red-200 transition-colors">
              <div className="text-red-500"></div>
              <div>
                <h3 className="font-medium text-red-500">Add to Cart</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default SinglePage