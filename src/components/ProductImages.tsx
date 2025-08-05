"use client"


import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id: 1,
        url:"https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 2,
        url:"https://images.unsplash.com/photo-1539877254216-818ed7c76096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
    },
    {
        id: 3,
        url:"https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
    },
    {
        id: 4,
        url:"https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"
    },

]

const ProductImages = () => {

    const [index, setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                src={images[index].url} 
                alt="" 
                fill sizes="50vw"
                className="object-cover rounded-md"/>
            </div>
            <div className="flex justify-between gap-4 mt-8 cursor-pointer">
                {images.map((img,i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={()    =>setIndex(i)}>
                        <Image 
                        src={img.url}
                        alt=""
                        fill sizes="30vw" 
                        className="object-cover rounded-md"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages