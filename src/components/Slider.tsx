"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
    {
        id: 1,
        title: "Daily Life",
        description: "Sale! 50% off!",
        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        url: "/",
        bg: "bg-gradient-to-r from yellow-50 to-pink-50"
    },
    {
        id: 2,
        title: "Milk and Honey",
        description: "Sale! 50% off!",
        img: "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/",
        bg: "bg-gradient-to-r from pink-50 to-blue-50" 
    },
    {
        id: 3,
        title: "Book and Soul",
        description: "Sale! 50% off!",
        img: "https://images.unsplash.com/photo-1542639130-b6a81c306c3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/",
        bg: "bg-gradient-to-r from blue-50 to-yellow-50"
    },
    
]

const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === slides.length-1 ? 0: prev+1))
        },3000)
    },[])

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
        <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{transform:`translateX(-${current * 100}vw)`}}>
            {slides.map(slide => (
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>

                    {/* Text Container */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                        <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                        <h1 className="text-5xl lg-:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                        <Link href={slide.url}>
                        <button className="rounded-md bg-black text-white py-3 px-4">SHOP HERE</button>
                        </Link>
                    </div>

                    {/* Image Container */}
                    <div className="w-1/2 xl:w-1/2 xl:h-full relative">
                        <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/>
                    </div>
                </div>
            ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {
            slides.map((slide, index) =>(
                <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""

                }`}
                key={slide.id}
                onClick={() => setCurrent(index)}>
                    {current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Slider