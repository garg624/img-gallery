"use client"
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';
import { getCldImageUrl } from 'next-cloudinary';
import Gallery from '@/components/gallery';

interface uploadImg {
  event: "sucess";
  info: {
    url: string;
    public_id: string
  };
}
export default  function  Home() {

  const [imgId, setimgId] = useState("defaultImg");
  const [urll, seturl] = useState("");
  const url = getCldImageUrl({
    width: 960,
    height: 600,
    src: imgId,
  });
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
     
        <Gallery />
      
    </main>
  )
}
