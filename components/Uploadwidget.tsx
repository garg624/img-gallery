// "use client"
import React from 'react'
import { CldUploadButton } from 'next-cloudinary'
import { uploadUrl } from '@/actions/action'
const Uploadwidget = () => {
    
interface uploadImg {
    event: "sucess";
    info: {
        url: string;
        public_id: string
    };
}
    return (
        <div>
            {/* <CldUploadButton uploadPreset="xjeh0mjb" onUpload={(result) => {

                const res = result as uploadImg;
                async function uploadUrlOnDb() {
                    const result = await uploadUrl(res.info.url);
                    console.log("client side res", result)
                }
                uploadUrlOnDb();
                console.log(res);



            }} /> */}
            upload
        </div>
    )
}

export default Uploadwidget