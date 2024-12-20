import Image from 'next/image'

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm text-gray-500 shadow-md">
      <div className="relative h-20">
        <Image
          src="https://images.pexels.com/photos/20427650/pexels-photo-20427650/free-photo-of-photo-of-people-sunbathing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile picture"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/29743753/pexels-photo-29743753/free-photo-of-portrait-of-woman-in-sunlit-tropical-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
          width={48}
          height={48}
          className="absolute -bottom-6 left-0 right-0 m-auto h-12 w-12 rounded-full ring-1 ring-white"
        />
      </div>
      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-semibold">Lura Fisher</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/29743753/pexels-photo-29743753/free-photo-of-portrait-of-woman-in-sunlit-tropical-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/29743753/pexels-photo-29743753/free-photo-of-portrait-of-woman-in-sunlit-tropical-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/29743753/pexels-photo-29743753/free-photo-of-portrait-of-woman-in-sunlit-tropical-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">621 Followers</span>
        </div>
        <button className="rounded-md bg-blue-500 p-2 text-xs text-white">
          My profile
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
