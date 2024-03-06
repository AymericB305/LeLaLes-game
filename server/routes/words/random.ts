import { PrismaClient, word } from "@prisma/client";
import { z } from 'zod'

const querySchema = z.object({
  amount: z.string().default('1').transform((val, ctx) => {
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

  const prisma = new PrismaClient()  
  
  const words = await prisma.$queryRaw<word[]>
    `SELECT * FROM word ORDER BY RANDOM() LIMIT ${query.data.amount};`
  
  return words
})
