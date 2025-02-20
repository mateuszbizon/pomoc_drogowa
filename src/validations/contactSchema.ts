import {z} from "zod"

export const contactSchema = z.object({
    name: z.string().min(1),
    phone: z.string().min(9),
    description: z.string().min(1),
})

export type ContactSchema = z.infer<typeof contactSchema>