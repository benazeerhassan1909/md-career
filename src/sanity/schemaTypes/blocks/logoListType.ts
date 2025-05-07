// /schemas/sections/logoList.ts
import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const logoList = defineType({
    name: 'logoList',
    title: 'Logo List',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "text",
            type: "blockContent",
        }),
        defineField({
            name: 'itemsPerRow',
            title: 'Items per Row',
            type: 'number',
            initialValue: 3,
            validation: (Rule) => Rule.min(1).max(8),
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [
                defineField({
                    name: 'logo',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        },
                        {
                            name: 'width',
                            title: 'Image Width',
                            type: 'number',
                        },
                        {
                            name: 'height',
                            title: 'Image Height',
                            type: 'number',
                        },
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Logo List Block',
                subtitle: 'Logos Block',
            }
        },
    },
})
