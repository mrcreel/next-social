import Image from 'next/image'
import Link from 'next/link'

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src="https://images.pexels.com/photos/16552374/pexels-photo-16552374/free-photo-of-woman-leaning-head-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="media"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard
