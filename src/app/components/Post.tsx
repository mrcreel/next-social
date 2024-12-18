import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="bg-cyan-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/15278251/pexels-photo-15278251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
            alt="avatar"
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
          />
          {/* USER NAME */}
          <span className="font-medium">Brandon Russell</span>
        </div>
        <Image src="/more.png" alt="more" height={16} width={16} className="" />
      </div>
      {/* DESCRIPTIOM */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            fill
            src="https://images.pexels.com/photos/25785496/pexels-photo-25785496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
            alt="more"
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          suscipit dolor eligendi ratione est aspernatur enim cumque inventore,
          nihil facere saepe omnis quia, itaque, tempore quibusdam
          necessitatibus ipsam impedit vel!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between my-4 text-sm">
        <div className="flex gap-8">
          <div className="bg-slate-50 flex gap-4 items-center p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              231
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="bg-slate-50 flex gap-4 items-center p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              29
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="bg-slate-50 flex gap-4 items-center p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              64
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
