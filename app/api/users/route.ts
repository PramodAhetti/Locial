import { authOptions } from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import { NextRequest,NextResponse } from "next/server";


export async function GET(req:NextRequest){
   const session= await getServerSession(authOptions) ;
   if(session){
    console.log(req.url)
    return NextResponse.json({data:"test response"})
   }else{
    return NextResponse.json({error:"Need to log in"},{status:500})
   }


}