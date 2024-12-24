import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'

const AddPost = async () => {
  'add server'

  const { userId } = await auth()
  console.log(userId)

  const testAction = async (formData: FormData) => {
    'use server'

    if (!userId) return

    const postBody = formData.get('postBody') as string

    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          postBody: postBody,
          deleted: false,
        },
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
        alt="Avatar"
        height={48}
        width={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form className="flex gap-4" action={testAction}>
          <textarea
            className="flex-1 rounded-lg bg-slate-100 p-2"
            name="postBody"
            id="addPost"
            placeholder="What's on your mind?"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            height={20}
            width={20}
            className="h-5 w-5 cursor-pointer self-end"
          />
          <button className="">Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addimage.png" alt="add image" height={20} width={20} />
            Photo
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addVideo.png" alt="add video" height={20} width={20} />
            Video
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/poll.png" alt="poll" height={20} width={20} />
            Poll
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addevent.png" alt="add event" height={20} width={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
