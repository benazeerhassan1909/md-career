import { defineField, defineType } from "sanity";

export const bannerType = defineType({
    name: "banner",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"

        }),
        defineField({
            name: "text",
            type: "string",
            title: " Text"

        }),
        defineField({
            name: "icon",
            type: "image",
            title: "Card Image",

        }),
        defineField({
            name: "btntext",
            type: "string",
            title: " Button Text",
            

        }),
        defineField({
            name: "btnurl",
            type: "url",
            title: "Button URL",

        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({title  }) {
            return {
                title: title ? `Banner Block: ${title}` : 'Banner Block',
            };
        },
    },

});