import { PrismaClient } from "@prisma/client";
import type { word } from "@prisma/client";
import { z } from 'zod'

const prisma = new PrismaClient()

const querySchema = z.object({
  amount: z.string().optional().transform((val, ctx) => {
    if (val == undefined) {
      return 1
    }

    const parsed = parseInt(val)
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not a number"
      })
      return z.NEVER
    }
    return parsed
  }),
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, query => querySchema.safeParse(query))
   if (!query.success)
    throw query.error.issues
  
  const words = await prisma.$queryRaw<word[]>
    `SELECT * FROM word ORDER BY RANDOM() LIMIT ${query.data.amount};`
  
  return words
})
