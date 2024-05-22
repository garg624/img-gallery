"use client"
import { getAllimages } from '@/actions/action'

import ImageCard from './ImageCard';
import { useEffect, useState } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

const Gallery =() => {
  const [images,setImages]=useState([]);
  useEffect(()=>{
    async function fetchImg() {
      noStore();
      
      const imagesRes=await getAllimages();
      console.log(imagesRes)
      setImages(imagesRes as any)
      console.log(images)
    }
    fetchImg();
  },[])

  return (
    <div className='flex flex-col container'>
      <h1 className='text-4xl m-4 font-bold'>Gallery...</h1>
      <div className="grid grid-cols-1 m-2 md:grid-cols-3 lg:grid-cols-4 grid-auto-rows-minmax(200px, auto) gap-4">
        {/* <CardWrapper /> */}
        {images.map((img:any) => (
        <ImageCard url={img.url} id={img._id} key={img._id}/>
      ))}
      </div>
    </div>
  )
}

export default Gallery