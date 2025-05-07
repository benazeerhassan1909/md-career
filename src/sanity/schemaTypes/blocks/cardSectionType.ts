import { defineField, defineType } from "sanity";

export const cardSectionType = defineType({
    name: "cardSection",
    type: "object",
     groups: [
            { name: 'card1', title: 'Card 1' },
            { name: 'card2', title: 'Card 2' },
           
        ],
    fields: [
        defineField({
            name: "title",
            type: "string",
            group: 'card1',
            title: "Card 1 Title"

        }),
        defineField({
            name: "text1",
            type: "string",
            group: 'card1',
            title: "Card 1 Text"

        }),
        defineField({
            name: "icon",
            type: "image",
            title: "Card 1 Image",
            group: 'card1'

        }),
        defineField({
            name: "btntext",
            type: "string",
            title: "Card 1 Button Text",
            group: 'card1'

        }),
        defineField({
            name: "btnurl",
            type: "url",
            title: "Card 1 Button URL",
            group: 'card1'

        }),
        defineField({
            name: "title2",
            type: "string",
            group: 'card2',
            title: "Card 2 Title"
        }),
        defineField({
            name: "icon2",
            type: "image",
            title: "Card 2 Image",
            group: 'card2'

        }),
        defineField({
            name: "btntext2",
            type: "string",
            title: "Card 2 Button Text",
            group: 'card2'

        }),
        defineField({
            name: "btnurl2",
            type: "url",
            title: "Card 2 Button URL",
            group: 'card2'

        }),
        defineField({
            name: "text",
            type: "string",
            group: 'card2',
            title: "Card 2 Text"

        }),
        defineField({
            name: "bgimage",
            type: "image",
            title: "Card 2 BG Image",
            group: 'card2'

        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title  }) {
            return {
                title: title ? `Card Block: ${title}` : 'Card Block',
            };
        },
    },

});