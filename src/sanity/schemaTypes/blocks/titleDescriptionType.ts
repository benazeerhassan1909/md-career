import { defineType, defineField } from 'sanity'

export const titleDescription = defineType({
    name: 'titleDescription',
    title: 'Title + Description',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: "blockContent",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "Title & Description Block",
            };
        },
    },
})
