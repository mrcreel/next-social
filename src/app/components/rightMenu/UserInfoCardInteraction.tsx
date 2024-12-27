'use client'

import { switchFollow } from '@/lib/actions'
import { useState } from 'react'

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowRequested,
}: {
  userId: string
  currentUserId: string
  isUserBlocked: boolean
  isFollowing: boolean
  isFollowRequested: boolean
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followRequested: isFollowRequested,
  })

  const follow = async () => {
    try {
      await switchFollow(userId)

      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequested:
          !prev.following && !prev.followRequested ? true : false,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form action={follow} className="">
        <button className="w-full rounded-md bg-blue-500 p-2 text-white">
          {userState.following
            ? 'Following'
            : userState.followRequested
              ? 'Friend Request Sent'
              : 'Follow'}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="cursor-pointer text-xs text-red-400">
          {userState.blocked ? 'Unblock User' : 'Block User'}
        </span>
      </form>
    </>
  )
}

export default UserInfoCardInteraction
