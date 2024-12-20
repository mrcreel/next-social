import Feed from '@/app/components/Feed'
import LeftMenu from '@/app/components/LeftMenu'
import RightMenu from '@/app/components/RightMenu'
import Image from 'next/image'

const ProfilePage = () => {
  return (
    <div className="">
      <div className="flex gap-6 pt-6">
        {/* LEFT */}
        <div className="hidden w-[20%] xl:block">
          <LeftMenu type="profile" />
        </div>
        {/* CENTER */}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.pexels.com/photos/20427650/pexels-photo-20427650/free-photo-of-photo-of-people-sunbathing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="profile picture"
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src="https://images.pexels.com/photos/29743753/pexels-photo-29743753/free-photo-of-portrait-of-woman-in-sunlit-tropical-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="avatar"
                  width={128}
                  height={128}
                  className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full ring-4 ring-white"
                />
              </div>
              <h1 className="mb-4 mt-20 text-2xl font-medium">Lura Fisher</h1>
              <div className="mb-4 flex items-center justify-center gap-12">
                <div className="flex flex-col items-center">
                  <span className="font-medium">8435</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1.6K</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">937</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        {/* RIGHT */}
        <div className="hidden w-[30%] lg:block">
          <RightMenu userId="test" />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
