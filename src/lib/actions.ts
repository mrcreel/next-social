'use server'

import { auth } from '@clerk/nextjs/server'
import prisma from './client'

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = await auth()
  if (!currentUserId) throw new Error('User not authenticated')

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    })

    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          followId: existingFollow.followId,
        },
      })
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      })

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            followResuestId: existingFollowRequest.followResuestId,
          },
        })
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
            deleted: false,
          },
        })
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong!')
  }
}
