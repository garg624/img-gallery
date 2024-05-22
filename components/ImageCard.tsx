import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageCard = ({ url, id, width, height }: any) => {
  return (
    <Link
      className="group hover:shadow-lg ease-in-out inline-block cursor-pointer hover:scale-102 transition-all duration-100"
      href={`/i/${id}`}
    >
    <div className='absolute  hidden  group-hover:inline-block top-16 right-10'>hisuhfghfghfghfghfgfsgghs</div>
      <Image src={url} alt={"title"} width={width} height={height} className='object-contain group-hover:brightness-50 rounded-lg' />
      {/* <p className='hidden group-hover:inline-block'>hello</p> */}
    </Link>
  )
}

export default ImageCard