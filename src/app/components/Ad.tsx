import Image from 'next/image'

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium text-gray-500">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="more" height={16} width={16} className="" />
      </div>
      {/* BOTTOM */}
      <div
        className={`mt-4 flex flex-col ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
      >
        <div
          className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}
        >
          <Image
            src="https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="more"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="more"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="font-medium text-blue-500">Crocket Co.</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
            : size === 'md'
              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro ipsum amet velit sapiente.'
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro ipsum amet velit sapiente. Accusantium voluptate quos ullam architecto facere aliquam veritatis omnis odio, expedita quia culpa maiores eligendi rerum.'}
        </p>
        <button className="rounded-lg bg-gray-200 p-2 text-xs text-gray-500">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Ad
