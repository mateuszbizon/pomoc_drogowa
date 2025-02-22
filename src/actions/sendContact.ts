"use server"

import Welcome from "@/emails/welcome";
import { addContactService } from "@/services/contacts";
import { contactSchema, ContactSchema } from "@/validations/contactSchema";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'mat-biz@wp.pl',
            subject: 'New client',
            react: Welcome({ name: contact.name, phone: contact.phone, description: contact.description })
        })
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