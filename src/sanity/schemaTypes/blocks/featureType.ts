import { defineField, defineType } from "sanity";

export const featuresType = defineType({
    name: "features",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "features",
            type: "array",
            of: [
                defineField({
                    name: "feature",
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
                            name: "icon",
                            type: "image",
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
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "Features Block",
                subtitle: "Features Block",
            };
        },
    },

});