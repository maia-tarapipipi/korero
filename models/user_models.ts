import * as z from 'zod'

export const userDraftSchema = z.object({
  username: z.string(),
  name: z.string(),
  level: z.string(),
})

export const user = userDraftSchema.extend({
  id: z.string(),
})

export type UserDraft = z.infer<typeof userDraftSchema>
export type User = z.infer<typeof user>
