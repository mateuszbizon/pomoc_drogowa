import { ContactSchema } from "@/validations/contactSchema";
import axios from "axios";

export async function addContactService(contact: ContactSchema) {
    const dataToSend = {
        records: [
            {
                fields: {
                    Name: contact.name,
                    Phone: contact.phone,
                    Description: contact.description
                }
            }
        ]
    }

    const result = axios.post('https://api.airtable.com/v0/appc2qCA5uUAWUvAD/klienci', dataToSend, {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
        }
    })

    return result
}