import Link from "next/link"
import Image from "next/image"


const Footer = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/* TOP */}
      <div className="flex justify-between gap-24">
        {/* LEFT */}
        <div className="w-1/4 flex flex-col gap-8">
          <Link href="/">
            {""}
            <div className="text-2xl tracking-wide">photobook</div>
          </Link>
          <p>123, Street 32, 12345 Subang Jaya, Selangor</p>
          <span>test@photobook</span>
          <span>60123456789</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16}/>
            <Image src="/instagram.png" alt="" width={16} height={16}/>
            <Image src="/youtube.png" alt="" width={16} height={16}/>

          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2"></div>
        {/* RIGHT */}
        <div className="w-1/4"></div>
      </div>
      {/* CENTER */}
      <div className=" "></div>
    </div>
  )
}

export default Footer