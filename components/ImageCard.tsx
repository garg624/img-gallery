import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


const ImageCard = ({ url, id, width, height }: any) => {
  // const [isHovered, setIsHovered] = React.useState("hidden");

  return (


    <Link
      className="group relative  overflow-hidden hover:shadow-lg ease-in-out inline-block cursor-pointer hover:scale-102 transition-all duration-100"
      href={`/i/${id}`}
    >
      <Image
        src={url}
        alt={"title"}
        width={width}
        height={height}
        className='object-contain group-hover:brightness-50 rounded-lg'

      />
      <div
        className="absolute inset-0 hidden justify-center items-center bg-gradient-to-t from-black/60 to-transparent group-hover:flex"
      >
        <CiCirclePlus className='text-9xl brightness-50' />
      </div>
    </Link>

  )
}

export default ImageCard