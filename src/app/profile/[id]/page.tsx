import Feed from '@/app/components/Feed'
import LeftMenu from '@/app/components/LeftMenu'
import RightMenu from '@/app/components/RightMenu'

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
