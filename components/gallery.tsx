"use client"
import { getAllimages } from '@/actions/action'

import ImageCard from './ImageCard';
import { useEffect, useState } from 'react';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Gallery =() => {
  const [images,setImages]=useState([]);
  const router = useRouter();
 



  useEffect(()=>{
    async function fetchImg() {
      
      
      const imagesRes=await getAllimages();
      console.log(imagesRes)
      setImages(imagesRes as any)
      console.log(images)
      router.refresh();
    
    }
    fetchImg();
  },[])
  // if(images.length==0){
  //   notFound();
  // }

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