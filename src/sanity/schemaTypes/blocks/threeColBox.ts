import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const threeColBox = defineType({
    name: 'threeColBox',
    title: 'Three Col Box',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "text",
            type: "string",
        }),
       
        defineField({
            name: "boxes",
            title: "Boxes",
            type: "array",
            of: [
                defineField({
                    name: "box",
                    title: "Box",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            type: "string",
                        }),
                        defineField({
                            name: "text",
                            type: "string",
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
                title: title ?? 'Three Col Box Block',
            }
        },
    },
})
