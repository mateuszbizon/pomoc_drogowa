import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: 'tytul',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'opis',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'tytul'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'zawartosc',
            type: 'markdown',
            validation: (rule) => rule.required(),
        }),
    ]
})