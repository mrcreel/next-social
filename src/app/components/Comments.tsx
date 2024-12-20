import Image from 'next/image'

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
          alt="avatar"
          height={32}
          width={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a comment..."
            className="flex-1 bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="mt-6 flex justify-between gap-4">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
            alt="avatar"
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
          />
          {/* DESCRIPTION */}
          <div className="flex flex-1 flex-col gap-2">
            <span className="font-medium">Edna Barker</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              numquam! Libero odio tempora beatae voluptatem veniam totam
              excepturi, doloremque iste voluptatibus assumenda ad quae?
              Temporibus, ex odio? Voluptatibus, atque natus.
            </p>
            <div className="mt-2 flex items-center gap-8 text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="like"
                  height={12}
                  width={12}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">3 Likes</span>
              </div>
            </div>
          </div>
          {/* ICON */}
          <div className="h-4 w-4 cursor-pointer">
            <Image
              src="/more.png"
              alt="more"
              height={16}
              width={16}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
