"use server"

import { connect } from "@/dbconfig/db"
import Image from "@/models/images.model";
import { revalidatePath } from "next/cache";

export async function getAllimages() {
     connect();
    const images = await Image.find().sort({ createdAt: -1 });;
    // console.log("action",images)
    return images;
}

export async function uploadUrl({url,width,height}:{url:string,width:number,height:number}) {
    connect();
    if(!url){
        return "no url";

    }
    const res=await Image.create({
        url,
        width,
        height
    })
    revalidatePath('/', 'layout')
    return res;
}
export async function getImageById(id:any) {
    if(!id){
        return "no id";
    }    
    try{
        connect();
        const imageData=await Image.findById(id);
        console.log("id action",imageData);
        return imageData;
    }catch(e){
        console.log("error",e)
    }
}