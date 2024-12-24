import Feed from '@/app/components/Feed'
import LeftMenu from '@/app/components/LeftMenu'
import RightMenu from '@/app/components/RightMenu'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const ProfilePage = async ({ params }: { params: { userName: string } }) => {
  const { userName } = await params

  const user = await prisma.user.findUnique({
    where: {
      userName,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  })

  if (!user) return notFound()

  const { userId: currentUserId } = await auth()

  let isBlocked = false

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        senderId: user.userId,
        receiverId: currentUserId,
      },
    })
    if (res) isBlocked = true
  }

  if (isBlocked) return notFound()

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
                  src={user.profileImage || '/noAvatar.png'}
                  alt="profile picture"
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src={user.avatarImage || '/noAvatar.png'}
                  alt="avatar"
                  width={128}
                  height={128}
                  className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full ring-4 ring-white"
                />
              </div>
              <h1 className="mb-4 mt-20 text-2xl font-medium">
                {user.firstName && user.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user.userName}
              </h1>
              <div className="mb-4 flex items-center justify-center gap-12">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.posts}</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.followers}</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.following}</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        {/* RIGHT */}
        <div className="hidden w-[30%] lg:block">
          <RightMenu user={user} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
