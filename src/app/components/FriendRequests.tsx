import Image from 'next/image'
import Link from 'next/link'

const FriendRequests = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-xs text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/videos/4504040/4k-animal-lover-baby-dog-bearded-man-4504040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
            height={40}
            width={40}
          />
          <span className="font-semibold">Leon Peterson</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt="accept"
            className="cursor-pointer"
            height={20}
            width={20}
          />
          <Image
            src="/reject.png"
            alt="reject"
            className="cursor-pointer"
            height={20}
            width={20}
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint"
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
            height={40}
            width={40}
          />
          <span className="font-semibold">Gussie Norman</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt="accept"
            className="cursor-pointer"
            height={20}
            width={20}
          />
          <Image
            src="/reject.png"
            alt="reject"
            className="cursor-pointer"
            height={20}
            width={20}
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/6490568/pexels-photo-6490568.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
            height={40}
            width={40}
          />
          <span className="font-semibold">Corey Gilbert</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt="accept"
            className="cursor-pointer"
            height={20}
            width={20}
          />
          <Image
            src="/reject.png"
            alt="reject"
            className="cursor-pointer"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests
