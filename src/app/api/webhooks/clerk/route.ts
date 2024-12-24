import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { error } from 'console'
import prisma from '@/lib/client'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local',
    )
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data
  const eventType = evt.type
  // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  // console.log('Webhook payload:', body)

  if (evt.type === 'user.created') {
    try {
      await prisma.user.create({
        data: {
          userId: evt.data.id,
          userName: JSON.parse(body).data.username,
          avatarImage: JSON.parse(body).data.image_url || '/noAvatar.png',
          profileImage: '/noAvatar.png',
          createdAt: new Date(),
        },
      })
      return new Response('User created', { status: 200 })
    } catch (error) {
      console.log(error)
      return new Response('Error: Could not create user', { status: 500 })
    }
  }

  if (evt.type === 'user.updated') {
    try {
      await prisma.user.update({
        where: {
          userId: evt.data.id,
        },
        data: {
          userName: JSON.parse(body).data.username,
          avatarImage: JSON.parse(body).data.image_url || '/noAvatar.png',
          profileImage: JSON.parse(body).data.profile_image_url,
          updatedAt: new Date(),
        },
      })
      return new Response('User updated', { status: 200 })
    } catch (error) {
      console.log(error)
      return new Response('Error: Could not update user', { status: 500 })
    }
  }

  return new Response('Webhook received', { status: 200 })
}
