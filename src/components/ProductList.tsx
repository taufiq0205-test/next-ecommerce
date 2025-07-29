import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt=""
                fill sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover-opacity-0 transition-opacity easy duration-500"
                />
                <Image
                src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill sizes="25vw"
                />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product Name</span>
              <span className="font-semibold">$11</span>
            </div>
            <div className="text-sm text-gray-500">Description</div>
            <button className="rounded-md ring-1 ring-photobook text-photobook w-max py-2 px-4 text:xs hover:bg-photobook hover:text-white">Add to Cart
            </button>
            
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt=""
                fill sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover-opacity-0 transition-opacity easy duration-500"
                />
                <Image
                src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill sizes="25vw"
                />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product Name</span>
              <span className="font-semibold">$11</span>
            </div>
            <div className="text-sm text-gray-500">Description</div>
            <button className="rounded-md ring-1 ring-photobook text-photobook w-max py-2 px-4 text:xs hover:bg-photobook hover:text-white">Add to Cart
            </button>
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt=""
                fill sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover-opacity-0 transition-opacity easy duration-500"
                />
                <Image
                src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill sizes="25vw"
                />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product Name</span>
              <span className="font-semibold">$11</span>
            </div>
            <div className="text-sm text-gray-500">Description</div>
            <button className="rounded-md ring-1 ring-photobook text-photobook w-max py-2 px-4 text:xs hover:bg-photobook hover:text-white">Add to Cart
            </button>
            
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt=""
                fill sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover-opacity-0 transition-opacity easy duration-500"
                />
                <Image
                src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill sizes="25vw"
                />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product Name</span>
              <span className="font-semibold">$11</span>
            </div>
            <div className="text-sm text-gray-500">Description</div>
            <button className="rounded-md ring-1 ring-photobook text-photobook w-max py-2 px-4 text:xs hover:bg-photobook hover:text-white">Add to Cart
            </button>
            
        </Link>
    </div>
  )
}

export default ProductList
