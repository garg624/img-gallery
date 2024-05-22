"use client"
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';
import { getCldImageUrl } from 'next-cloudinary';

interface uploadImg {
  event: "sucess";
  info: {
    url: string;
    public_id: string
  };
}
export default  function  Home() {

  const [imgId, setimgId] = useState("defaultImg");
  const [urll, seturll] = useState("");
  const url = getCldImageUrl({
    width: 960,
    height: 600,
    src: imgId,
  });
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='border-sky-200 border-2 px-5 py-2  rounded-xl' >
        //upload btn
        <CldUploadButton uploadPreset="xjeh0mjb" onUpload={(result) => {
          //its nothing but the way to give the types to the var
          const res = result as uploadImg;
          // console.log(res);
          seturll(res.info.url);
          setimgId(res.info.public_id);

          console.log(imgId)
        }} />
      </div>
      <div className='flex-col items-center justify-center content-center'>

        <CldImage

          width="500"
          height="600"
          src={imgId}
          sizes="100vw"
          alt="Description of my image"
          // removeBackground
        />


        <p className='self-center'>
          Uploaded image ID--
          {imgId} and {url}
        </p>
        
      </div>
      <div className='gallery text-6xl '>
        Gallery
      </div>
    </main>
  )
}
