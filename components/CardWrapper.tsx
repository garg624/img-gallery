"use client"
import { getAllimages } from '@/actions/action'
import React, { Suspense, useEffect, useState } from 'react'
import { toast } from 'sonner';
import ImageCard from './ImageCard';

interface ImageInt {
    _id: string,
    url: string,

}
const CardWrapper =async () => {
    const [images,setImages]=useState<ImageInt[]>([]);

    useEffect(()=>{
    const fetchData = async () => {
        try {
          const data:ImageInt[] = await getAllimages();
          console.log("card wrapper ",data);
          setImages(data);
          console.log("imgs",images)
        } catch (error) {
          console.error(error);
          toast.error("There is an error while getting all trending images");
        }
      };
  
      fetchData();
    }, []);
  
    if(images.length == 0){
      return(
       <div className=''>loading</div>
      )
    }
  return (
    
       <Suspense
      fallback={
        [1, 2, 3, 4].map((id) => (
          <ImageCard key={id} />
        ))
      }
    >
      {images.map((img:any) => (
        <ImageCard url={img.url} id={img._id} />
      ))}
    </Suspense>
    
  )
}

export default CardWrapper