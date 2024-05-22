import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageCard = ({url,id}:any) => {
  return (
    <Link
    className="bg-white shadow-md rounded-md overflow-hidden grid-cols-span col-span-1"
    href={`/${id}`}
>
    <img src={url} alt={"title"} className="w-full h-48 object-contain" width={100} height={100}/>
    
</Link>
  )
}

export default ImageCard