import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import MobileMenu from './MobileMenu'

const NavBar = () => {
  return (
    <div className="bg-yellow-300 h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          CupOfSugar
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-[30%] items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  )
}

export default NavBar
