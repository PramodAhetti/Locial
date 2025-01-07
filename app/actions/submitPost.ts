'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
import { PrismaClient } from "@prisma/client";
import { format } from "path";
export async function submitPost(formdata:FormData){
    const prisma=new PrismaClient();
    try{
        console.log(" formdata:",formdata);
    // const session=await getServerSession(authOptions);
    // if(session){
    //     const body=await request.json();
    //     console.log("body",body)
    //     const post =await prisma.post.create({data : {
    //       authorId:body.authorId,
    //       content:body.message,
    //       latitude:body.location?.coords.latitude,
    //       longitude:body.location?.coords.longitude,
    //       time:new Date().toString()
    //     }});
    //     return Response.json({message:"Post is saved"});
    // }else{
    //     throw "Unauthorized";
    // }
   
  }catch(e){
    console.log(e);
  }
  }