"use server"

import { contactSchema, ContactSchema } from "@/validations/contactSchema";

export async function sendContact(contact: ContactSchema) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const resultValidation = contactSchema.safeParse(contact)

    if (!resultValidation.success) {
        return {
            success: false,
            message: "Invalid data"
        }
    }

    return {
        success: true,
        message: "Contact sent"
    }
}