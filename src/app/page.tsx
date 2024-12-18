import React from 'react'
import LeftMenu from './components/LeftMenu'
import RightMenu from './components/RightMenu'
import Stories from './components/Stories'
import Feed from './components/Feed'
import AddPost from './components/AddPost'

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="bg-slate-300 hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* CENTER */}
      <div className="bg-slate-300 w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="bg-gray-300 hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage
