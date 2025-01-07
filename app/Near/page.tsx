"use client";
import Link from "next/link";
import {Link2, Home, SendHorizonal, Edit3, Trash2, SendHorizonalIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Alert from "@mui/material/Alert";
import Delete from "../component/delete";
import { submitPost } from "../actions/submitPost";
import alert from "../component/alert"
export default function HomeAndNearLayout() {
  type Location = {
    coords: {
      latitude: number;
      longitude: number;
    };
  };

  const user = useSession();
  const router = useRouter();
  const postRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [reload,setreload]=useState<boolean>(false);
  const [avatar, setavatar] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s"
  );



 


  const getCurLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position); // Resolve the promise with the position
          },
          (error) => {
            console.error("Error getting location:", error);
            reject(error); // Reject the promise if there's an error
          }
        );
      } else {
        reject(new Error("Browser doesnt support GPS"));
      }
    });
  };





  // const submitPost = async (formData:FormData) => {
  //   const message = postRef.current?.value;
  //   console.log("message :", message);

  //   try {
  //     const location = await getCurLocation();
  //     const authorIdResponse = await axios.get("/api/users/new");
  //     const authorId = authorIdResponse.data?.data?.id;

  //     const result = await axios.post("/api/post/new", {
  //       authorId,
  //       message,
  //       location,
  //     });
  //     if (postRef.current) {
  //       postRef.current.value = "";
  //     }
  //     setreload(!(reload));
  //     alert.success('Posted')
  //   } catch (error) {
  //     alert.error('Try again')
  //   }
  // };


 
 

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      if (user.status=='authenticated') {
        try {
          if (user.data?.user?.image) {
            setavatar(user.data.user.image);
          }
          await axios.get("/api/users/new");
        } catch (error) {
          alert.error("Try again")
          console.error("Error fetching user info:", error);
        }
      } else {
        router.push("/");
      }

      try {
        const location = await getCurLocation();
        console.log(location);
        const response = await axios.post("/api/post/all", { location });
        console.log(response.data.data);
        if(response.data.data.length==0){
          alert.error("No Posts found");
        }else{
        setPosts(response.data.data);
        }
      } catch (error) {
        alert.error('error')
        console.error("Error fetching posts:", error);
      }
    };

    fetchUserAndPosts();
  }, [user.status,reload, router]);









  return (
    <div className="h-screen w-full grid grid-cols-12 bg-zinc-800 grid-rows-12">
      <header className="row-start-1 row-end-2 col-start-1 col-end-13 m-4 flex justify-between items-center space-x-2">
        <Link href="/">
          <Home className="w-8 h-8 text-white" />
        </Link>
        <Image
          src={avatar}
          width={40}
          height={40}
          alt="avatar"
          style={{
            borderRadius: 20,
          }}
        />
      </header>
<form action={submitPost} className="bg-slate-600 flex flex-col row-start-12 row-end-13 col-start-1 col-end-13 flex w-full">
 <input type="text"></input>
 <input type="file" id="file-input" className="hidden"></input>
 <label htmlFor="file-input"></label>
 <button type="submit">Submit</button>
</form>
      <div className="col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-11 flex flex-col m-3 text-black rounded-md">
        {posts.map((data) =>
          user.data?.user?.email == data.author.email ? (
            <div
              key={data.id}
              className="text-xs w-fit bg-emerald-200 self-end flex flex-col m-2 rounded-md"
            >
              <span className="bg-lime-200 p-1 font-bold w-fit rounded-lg border border-black m-1">
                {data.author.email.split("@")[0]}
              </span>
              <div className="flex justify-between p-1 items-center">
                <p className="text-sm">{data.content}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xs p-2 text-zinc-500">
                  {data.time.slice(4, 15)}
                </h1>
                <Delete id={data.id}></Delete>
              </div>
            </div>
          ) : (
            <div
              key={data.id}
              className="text-xs w-fit flex flex-col bg-white m-2 rounded-md"
            >
              <span className="bg-lime-200 p-1 font-bold w-fit rounded-lg border border-black m-1">
                {data.author.email.split("@")[0]}
              </span>
              <div className="flex justify-between p-1 items-center">
                <p className="text-sm">{data.content}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xs p-2 text-zinc-500">
                  {data.time.slice(4, 15)}
                </h1>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
