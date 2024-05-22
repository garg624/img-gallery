"use server"

import { connect } from "@/dbconfig/db"
import Image from "@/models/images.model";
import { revalidatePath } from "next/cache";

export async function getAllimages() {
     connect();
    const images = await Image.find();
    // console.log("action",images)
    return images;
}
export async function  uploadUrl(url:string) {
   connect();
    if(!url){
        return
    }
    const res=await Image.create({
        url
    })
    revalidatePath("/")
    return res;

}