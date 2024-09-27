import { authOptions } from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
export async function GET(req:NextRequest){
  try{
    
   const session= await getServerSession(authOptions) ;
   if(session){
    const id:number=Number(req.url.split('/users/')[1]); 
    
    const user=await prisma.user.findUnique({where:{id:id}});
    if(user){
      return NextResponse.json({data:user});
    }else{
      throw "user not found"
    }
   }else{
    throw "Autentication failed"
   }
  }catch(e){
    return NextResponse.json({error:e},{status:500})
  }
}