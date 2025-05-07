import { defineField, defineType } from 'sanity'

export const tabSection = defineType({
    name: 'tabSection',
    title: 'Tab Section',
    type: 'object',
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
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [
                defineField({
                    name: 'tab',
                    title: 'Tab',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Tab Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Tab Image',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    title: 'Alternative Text',
                                    type: 'string',
                                }),
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
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'tabs.0.title',
        },
        prepare({ title }) {
            return {
                title: title ? `Tab Block: ${title}` : 'Tab Block',
            }
        },
    },
})
