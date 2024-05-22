"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './theme-toggle'
import { CldUploadButton } from 'next-cloudinary'
import { Separator } from "@/components/ui/separator"
import { uploadUrl } from '@/actions/action'

interface uploadImg {
    event: "sucess";
    info: {
        url: string;
        public_id: string;
        width:number;
        height:number;

    };
}
const Navbar = () => {
    
    return (
        <>
            <div className='flex justify-between items-center container  m-2  '>
                <p className='text-white text-2xl '>
                    logo
                </p>
                <div className='flex justify-between  gap-8'>

                    <Button variant="outline" className='border-white'>

                        <CldUploadButton uploadPreset="xjeh0mjb" onUpload={(result) => {

                            const res = result as uploadImg;
                            
                            async function uploadUrlOnDb(){
                                const result=await uploadUrl(res.info);
                                console.log("client side res",result)
                            }
                            uploadUrlOnDb();
                            console.log(res);
                            


                        }} />
                    </Button>
                    <ModeToggle />
                </div>
            </div>
            <Separator />
        </>
    )
}

export default Navbar