// filepath: /home/macahetti/workspace/Locial/app/actions/submitPost.ts
"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
import { PrismaClient } from "@prisma/client";

export async function submitPost(formdata: FormData) {
  const prisma = new PrismaClient();
  try {
    console.log("formdata:", formdata);
    const session = await getServerSession(authOptions);
    let author;

    if (session?.user?.email) {
      author = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (!author) {
        throw new Error("User not found");
      }
    } else {
      throw new Error("Login required");
    }

    const coords = formdata.get("location") as string;
    let location = JSON.parse(coords);
    console.log("location : ",location)
    const post = await prisma.post.create({
      data: {
        content: formdata.get("message") as string,
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        author: {
         connect:{id: author.id}
         },
        time: Date(), // Use the current date and time
      },
    });

    return { message: "Post is saved", post };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to save post");
  } finally {
    await prisma.$disconnect();
  }
}

