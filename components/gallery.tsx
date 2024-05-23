"use client"
import { getAllimages } from '@/actions/action'

import ImageCard from './ImageCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageCardSkeleton from './ImageCardSkeleton';

const Gallery =() => {
  const [images,setImages]=useState([]);
  const router = useRouter();
 



  useEffect(()=>{
    async function fetchImg() {
      const imagesRes=await getAllimages();
      // console.log(imagesRes)
      setImages(imagesRes as any)
      console.log(images)
      router.refresh();
    
    }
    fetchImg();
  },[])
  if(images.length==0){

    return <div className='w-full flex flex-col lg:flex-row justify-center mt-5 items-center gap-2'>
      <ImageCardSkeleton />
      <ImageCardSkeleton />
      <ImageCardSkeleton />
      <ImageCardSkeleton />
    </div>
  }

  return (
    <div className='container min-h-full min-w-full'>
      <div className="columns-1 md:columns-2 lg:columns-3  mx-auto ">
        {/* <CardWrapper /> */}
        {images.map((img:any) => (
        <ImageCard url={img.url} id={img._id} key={img._id} width={img.width} height={img.height}/>
      ))}
      </div>
    </div>
  )
}

export default Gallery