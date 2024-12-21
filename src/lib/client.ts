import { PrismaClient } from '@prisma/client'

const GlobalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

const prisma = GlobalForPrisma.prisma || new PrismaClient()

export default prisma

if (process.env.NODE_ENV !== 'production') GlobalForPrisma.prisma = prisma
