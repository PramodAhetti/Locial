"use client";
import Link from "next/link";
import {Link2, Home, SendHorizonal, Edit3, Trash2, SendHorizonalIcon, SendHorizontal, Link2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Delete from "../component/delete";
import { submitPost } from "../actions/submitPost";
import alert from "../component/alert"
import { getPosts} from "../actions/getPosts";
import getCurLocation from "../actions/getLocation";
import addUser from "../actions/addUser";
import { lcov } from "node:test/reporters";

export default function HomeAndNearLayout() {
  const user = useSession();
  const router = useRouter();
  const postRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [reload,setreload]=useState<boolean>(false);
  const [avatar, setavatar] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s"
  );


 
  async function sendPost() {
    const formData = new FormData();
  
    // Append message from the input
    if (postRef.current?.value) {
      formData.append("message", postRef.current.value);
    }
  
    // Get the file input element
    const fileInput = document.getElementById("file-input") as HTMLInputElement | null;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append("file", fileInput.files[0]); // Append the first selected file
    }
  
    // Append location data
    const location = await getCurLocation();
    formData.append("location", JSON.stringify(location));
  
    // Append user email
    if (user.data?.user?.email) {
      formData.append("email", user.data.user.email);
    }
  
    // Submit the form data
    try {
      const response = await submitPost(formData);
      alert.success(response.message);
  
      // Clear inputs
      if (postRef.current) {
        postRef.current.value = ""; // Clear the message input
      }
      if (fileInput) {
        fileInput.value = ""; // Clear the file input
      }
  
      setreload(!reload); // Trigger reload
    } catch (error) {
      console.error("Error submitting post:", error);
      alert.error("Failed to submit the post.");
    }
  }
  
  useEffect(() => {
    const fetchUserAndPosts = async () => {
      if (user.status=='authenticated') {
        try {
          if (user.data?.user?.image) {
            setavatar(user.data.user.image);
          }
          if(user.data.user?.email){
          console.log(await addUser(user.data.user.email));

          }
          // await axios.get("/api/users/new");
        } catch (error) {
          alert.error("Try again")
          console.error("Error fetching user info:", error);
        }
      } else {
        router.push("/");
      }
    
      try {
        const location = await getCurLocation();
        const near_posts= await getPosts(location);
        console.log(location,near_posts)
        setPosts(near_posts)
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
<form action={sendPost} className="bg-white text-black p-1 flex flex-row rounded-lg row-start-12 row-end-13 col-start-1 col-end-13 w-full">
 <input type="text"  ref={postRef} placeholder="Message" className="text-black w-full p-2"></input>
 <input type="file" id="file-input" className="hidden"></input>
 <label htmlFor="file-input" className="text-black bg-white flex flex-col justify-center"><Link2Icon></Link2Icon></label>
 <button type="submit" className="w-1/6 flex flex-col justify-center items-center"><SendHorizontal></SendHorizontal></button>
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
