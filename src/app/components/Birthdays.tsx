import Image from 'next/image'
import Link from 'next/link'

const Birthdays = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <span className="font-semibold">Evan Berry</span>
        </div>
        <div className="flex justify-end gap-3">
          <button className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white">
            Celebrate!
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="flex items-center gap-4 rounded-lg bg-slate-100 p-4">
        <Image src="/gift.png" alt="gift" className="" height={24} width={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="font-semibold text-gray-700">
            Upcoming birthdays
          </span>
          <span className="text-gray-500">See the other 10 birthdays</span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays
