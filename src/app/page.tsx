import LeftMenu from './components/leftMenu/LeftMenu'
import RightMenu from './components/rightMenu/RightMenu'
import Stories from './components/Stories'
import Feed from './components/feed/Feed'
import AddPost from './components/AddPost'

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden w-[20%] xl:block">
        <LeftMenu type="home" />
      </div>
      {/* CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden w-[30%] lg:block">
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage
