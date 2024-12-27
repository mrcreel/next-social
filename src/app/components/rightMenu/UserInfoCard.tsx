import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import UserInfoCardInteraction from './UserInfoCardInteraction'

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt)
  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  let isUserBlocked = false
  let isFollowing = false
  let isFollowRequested = false

  const { userId: currentUserId } = await auth()

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    })
    if (blockRes) return (isUserBlocked = true)

    const followRes = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    })
    if (followRes) return (isFollowing = true)

    const followRequestRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    })
    if (followRequestRes) return (isFollowRequested = true)
  }

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
          <span className="text-xl text-black">
            {user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.userName}
          </span>
          <span className="text-sm">{user.userName}</span>
        </div>
        {user.description && <p className="">{user.description}</p>}
        {user.location && (
          <div className="flex items-center gap-2">
            <Image
              src="/map.png"
              alt="city"
              height={16}
              width={16}
              className=""
            />
            <span className="">
              Living in <b>{user.location}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image
              src="/school.png"
              alt="school"
              height={16}
              width={16}
              className=""
            />
            <span className="">
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <Image
              src="/work.png"
              alt="work"
              height={16}
              width={16}
              className=""
            />
            <span className="">
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        {user.website && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src="/link.png"
                alt="website"
                height={16}
                width={16}
                className=""
              />
              <Link href={user.website} className="font-medium text-blue-500">
                {user.website?.split('//')[1]}
              </Link>
            </div>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Image
            src="/date.png"
            alt="date joined"
            height={16}
            width={16}
            className=""
          />
          <span className="text-sm">Joined {formattedDate}</span>
        </div>
        <UserInfoCardInteraction
          userId={user.id}
          currentUserId={currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowRequested={isFollowRequested}
        />
      </div>
    </div>
  )
}

export default UserInfoCard
