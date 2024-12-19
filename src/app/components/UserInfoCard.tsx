import Image from 'next/image'
import Link from 'next/link'

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-xs text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Rosie Porter</span>
          <span className="text-sm">rosie1234</span>
        </div>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center gap-2">
          <Image
            src="/map.png"
            alt="city"
            height={16}
            width={16}
            className=""
          />
          <span className="">
            Living in <b>McHenry</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/school.png"
            alt="school"
            height={16}
            width={16}
            className=""
          />
          <span className="">
            Went to <b>Stone High</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/work.png"
            alt="work"
            height={16}
            width={16}
            className=""
          />
          <span className="">
            Works at <b>No where</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/link.png"
              alt="website"
              height={16}
              width={16}
              className=""
            />
            <Link
              href="http://localhost:3000"
              className="font-medium text-blue-500"
            >
              localhost:3000
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/date.png"
              alt="date joined"
              height={16}
              width={16}
              className=""
            />
            <span className="text-sm">Joined Dec 2024</span>
          </div>
        </div>
        <button className="rounded-md bg-blue-500 p-2 text-sm text-white">
          Follow
        </button>
        <span className="cursor-pointer self-end text-xs text-red-400">
          Block User
        </span>
      </div>
    </div>
  )
}

export default UserInfoCard
