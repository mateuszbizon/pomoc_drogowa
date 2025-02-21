"use server"

import { addContactService } from "@/services/contacts";
import { contactSchema, ContactSchema } from "@/validations/contactSchema";

export async function sendContact(contact: ContactSchema) {
    const resultValidation = contactSchema.safeParse(contact)

    if (!resultValidation.success) {
        return {
            success: false,
            message: "Invalid data"
        }
    }

    try {
        const data = await addContactService(contact)
    } catch (error) {
        return {
            success: false,
            message: "Can't send contact"
        }
    }

    return {
        success: true,
        message: "Contact sent"
    }
}