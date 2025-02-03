"use client";
import Link from "next/link";
import { Home, SendHorizontal, LinkIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { submitPost } from "../actions/submitPost";
import alert from "../component/alert";
import { getPosts } from "../actions/getPosts";
import getCurLocation from "../actions/getLocation";
import addUser from "../actions/addUser";
import imageCompression from "browser-image-compression";
import DisplayPosts from "../component/displayPosts";
import Skeleton from "../component/skeleton";
export default function HomeAndNearLayout() {
  const user = useSession();
  const router = useRouter();
  const postRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const content = postRef.current?.value;
    const file = fileInputRef.current?.files?.[0];

    if (!content || !file) {
      alert.error("Please provide content and an image.");
      return;
    }

    try {
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = async () => {
        const base64data = reader.result?.toString().split(",")[1];
        const formData = new FormData();
        formData.append("message", content);
        const location = await getCurLocation();
        formData.append("location", JSON.stringify(location));
        formData.append("file", base64data || "");

        try {
          await submitPost(formData);
          if (postRef.current) postRef.current.value = "";
          alert.success("Post submitted successfully");
          setReload(!reload);
        } catch (error) {
          alert.error("Error submitting post");
        }
      };
    } catch (error) {
      alert.error("Error compressing image");
    }
  };

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      if (user.status === "authenticated") {
        try {
          if (user.data?.user?.image) setAvatar(user.data.user.image);
          if (user.data.user?.email) await addUser(user.data.user.email);
        } catch (error) {
          alert.error("Try again");
        }
      } else {
        router.push("/");
      }

      try {
        const location = await getCurLocation();
        const near_posts = await getPosts(location);
        setPosts(near_posts);
      } catch (error) {
        alert.error("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndPosts();
  }, [user.status, reload, router]);

  return (
    <div className="h-screen w-full grid grid-cols-12 bg-zinc-800 grid-rows-12">
      <header className="row-start-1 row-end-2 col-start-1 col-end-13 m-4 flex justify-between items-center space-x-2">
        <Link href="/">
          <Home className="w-8 h-8 text-white" />
        </Link>
        <Image src={avatar} width={40} height={40} alt="avatar" style={{ borderRadius: 20 }} />
      </header>
      <form onSubmit={handleSubmit} className="bg-slate-600 m-1 flex flex-row rounded-lg row-start-12 row-end-13 col-start-1 col-end-13 w-full">
        <input type="text" ref={postRef} placeholder="Message" className="text-black w-full p-2" />
        <input type="file" id="file-input" ref={fileInputRef} className="hidden" />
        <label htmlFor="file-input" className="w-1/6 bg-white text-black flex flex-col justify-center items-center">
          <LinkIcon />
        </label>
        <button type="submit" className="w-1/6 bg-white text-black flex flex-col justify-center items-center">
          <SendHorizontal />
        </button>
      </form>
      <div className="col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-12 flex flex-col m-3 text-black rounded-md">
        {loading ? <Skeleton /> : user.data?.user?.email && <DisplayPosts posts={posts} user_email={user.data.user.email} />}
      </div>
    </div>
  );
}
