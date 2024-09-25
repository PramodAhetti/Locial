import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma=new PrismaClient();
export async function POST(request: NextRequest,res:NextResponse) {
  try{
   const {email}:{email: string} =await request.json();
   console.log("email",email)
   let user=await prisma.user.findUnique({
   where:{
    email:email
   } 
   })
   if(!user){
    const newUser=await prisma.user.create({data:{
      email
    }})
    user=newUser;
   }
   console.log(user)
  return NextResponse.json({ data: {id:user.id} })
  } catch(e){
   return NextResponse.json({error:e});
  }
}