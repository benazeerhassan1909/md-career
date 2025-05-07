import { defineField, defineType } from "sanity";

export const formType = defineType({
    name: "formType",
    title: "Choose Form",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "chooseForm",
            title: "Choose Form",
            type: "reference",
            to: [{ type: "careerForm" }]
        }),
        defineField({
            name: "enablesidebar",
            title: "Enable Sidebar",
            type: "boolean",
        }),
        defineField({
            name: "currentopenings",
            title: "Show Current Openings",
            type: "boolean",
        }),
        defineField({
            name: "showquote",
            title: "Show Quote",
            type: "boolean",
        }),
        defineField({
            name: "quote",
            title: "Quote",
            type: "string",
            hidden: ({ parent }) => parent?.showquote !== true
        }),
        defineField({
            name: "quoteauthor",
            title: "Quote Author",
            type: "string",
            hidden: ({ parent }) => parent?.showquote !== true
        }),
       
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({title }) {
            return {
                title: title ?? "Form Block",
            };
        },
    },
});