"use client"
import { getImageById } from '@/actions/action'
import { Button } from '@/components/ui/button';
import { CiShare1 ,CiSaveDown2 } from "react-icons/ci";
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {
    EmailIcon,
    EmailShareButton,
    FacebookMessengerIcon,
    FacebookShareButton,
    
    TelegramIcon,
    TelegramShareButton,
    
    TwitterIcon,
    TwitterShareButton,
 
    WhatsappIcon,
    WhatsappShareButton,
    
  } from "react-share";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Separator } from '@/components/ui/separator';


interface ImageResponse {
    url:string;
    _id:string;
    width:number;
    height:number;
}
export default function Page({ params }: { params: { id: string } }) {
    const [image, setImage] = useState<ImageResponse>({} as ImageResponse);
    const [currentUrl,setCurrenturl]=useState("");
   

    useEffect(()=>{
        
        async function fetchdata() {
            setCurrenturl(window.location.href);
            const imageRes=await getImageById(params.id) || {};
            // console.log(imageRes)
            setImage(imageRes);
            }
            fetchdata();
            
        
    },[])
    return (
        <div className="flex flex-col items-center justify-center h-full w-full fixed">
            <div className='absolute top-5 left-5'>
                <Button variant={"outline"} asChild>
                    <Link href={"/"}><IoMdClose className='text-2xl'/></Link>
                </Button>
            </div>
            <div className='absolute top-5 right-5 flex items-center justify-center gap-2'>

            <Dialog >
                <DialogTrigger>
                    <Button className='rounded-full' variant={"outline"}>
                         <CiShare1 className='text-2xl' />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className=''>Share the image....</DialogTitle>
                    </DialogHeader>
                    <Separator />
                    <div className='grid grid-cols-5'>
                            <TwitterShareButton url={currentUrl}>
                                <TwitterIcon className='rounded-full col-span-1'/>
                            </TwitterShareButton>
                            <FacebookShareButton url={currentUrl}>
                                <FacebookMessengerIcon className='rounded-full col-span-1'/>
                            </FacebookShareButton>
                            <WhatsappShareButton url={currentUrl}>
                                <WhatsappIcon className='rounded-full col-span-1' />
                            </WhatsappShareButton>
                            <EmailShareButton url={currentUrl}>
                                <EmailIcon className='rounded-full col-span-1' />
                            </EmailShareButton>
                            <TelegramShareButton url={currentUrl}>
                                <TelegramIcon className='rounded-full col-span-1' />
                            </TelegramShareButton>
                    </div>

                </DialogContent>
            </Dialog>
            
    <Button className='rounded-full' asChild>
        <Link href={image.url || ""} >
        <CiSaveDown2 className='text-2xl' />
        </Link>
    </Button>

            
            </div>
           <Image src={image.url} alt={`${image._id}`} className='w-full h-full object-contain ' width={image.width} height={image.height} priority/>
           </div>
    )
  }




// 

// const page = ({param}:{param:{id:string}}) => {
//     const [image,setImage]=useState({});
//     useEffect(()=>{
//         console.log(param.id)
//         async function fetchdata() {
//             const imageRes=await getImageById(param.id);
//             console.log(imageRes)
//             setImage(imageRes as any);
//             }
//             fetchdata();
            
        
//     },[])
//   return (
//    
//   )
// }

// export default page