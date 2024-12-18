import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className="bg-white p-4 rounded-lg flex gap-4 justify-between text-sm shadow-md">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Avatar"
        height={48}
        width={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            className="bg-slate-100 flex-1 rounded-lg p-2"
            name=""
            id=""
            placeholder="What's on your mind?"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            height={20}
            width={20}
            className="h-5 w-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="add image" height={20} width={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="add video" height={20} width={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="poll" height={20} width={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="add event" height={20} width={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
