import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29773887/pexels-photo-29773887/free-photo-of-charming-getreidegasse-in-salzburg-austria.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Lena</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29768364/pexels-photo-29768364/free-photo-of-stylish-woman-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Isaiah</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/19785770/pexels-photo-19785770/free-photo-of-closeup-of-a-pregnant-woman-holding-prenatal-scans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Jeanette</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/14994705/pexels-photo-14994705/free-photo-of-iced-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Caleb</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/17785614/pexels-photo-17785614/free-photo-of-traditional-house-building-in-a-town-in-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Matthew</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/19600180/pexels-photo-19600180/free-photo-of-christmas-trees-in-the-hotel-lobby.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Mollie</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28387802/pexels-photo-28387802/free-photo-of-a-large-pile-of-green-apples.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27244374/pexels-photo-27244374/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Joshua</span>
        </div>
      </div>
    </div>
  )
}

export default Stories
