"use client"

import { contactSchema, ContactSchema } from '@/validations/contactSchema'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

function ContactForm() {
    const form = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            phone: "",
            description: "",
        }
    })

    function onSubmit(data: ContactSchema) {
        console.log(data)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Imię i nazwisko</FormLabel>
                        <FormControl>
                            <Input placeholder="Imię i nazwsko" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Numer telefonu</FormLabel>
                        <FormControl>
                            <Input placeholder="Numer telefonu" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Opis zdarzenia</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Opis zdarzenia' {...field} className='resize-none' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className='w-full'>Wyślij</Button>
        </form>
    </Form>
  )
}

export default ContactForm