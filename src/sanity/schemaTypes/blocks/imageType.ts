// schemas/imageType.ts
import { defineType, defineField } from 'sanity'

export const imageType = defineType({
    name: 'imageBlock',
    title: 'Image Block',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }),
    ],

    preview: {
        select: {
            title: "heading",
        },
        prepare({ title }) {
            return {
                title: title ?? 'Image Block',
            };
        },
    },
})