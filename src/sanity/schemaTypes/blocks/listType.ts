// schemas/educationScholarshipQuote.ts
import { defineField, defineType } from 'sanity'

export const List = defineType({
    name: 'List',
    title: 'List',
    type: 'document',
    fields: [
        defineField({
            name: 'listtitle',
            title: 'List Title',
            type: 'string',
        }),
        defineField({
            name: "lists",
            title: "Lists",
            type: "array",
            of: [
                defineField({
                    name: "list",
                    title: "List",
                    type: "string",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "List Block",
            };
        },
    },
})
