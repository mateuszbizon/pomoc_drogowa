import {z} from "zod"

export const contactSchema = z.object({
    name: z.string().min(1, "Imię i nazwisko nie może być puste"),
    phone: z.string().min(9, "Telefon musi mieć minimum 9 znaków"),
    description: z.string().min(1, "Opis nie może być pusty"),
})

export type ContactSchema = z.infer<typeof contactSchema>