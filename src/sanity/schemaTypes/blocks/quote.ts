// schemas/educationScholarshipQuote.ts
import { defineField, defineType } from 'sanity'

export const Quote = defineType({
    name: 'Quote',
    title: 'Quote',
    type: 'document',
    fields: [
        defineField({
            name: 'quoteText',
            title: 'Quote Text',
            type: 'text',
            description: 'The main quote text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            description: 'Name of the person quoted',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'quoteImage',
            title: 'Quote Image',
            type: 'image',
            description: 'Image shown beside the quote',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "Quote Block",
            };
        },
    },
})
