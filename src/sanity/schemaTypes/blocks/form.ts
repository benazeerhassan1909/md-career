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
            initialValue: false, // Add initial value
        }),
        defineField({
            name: "currentopenings",
            title: "Show Current Openings",
            type: "boolean",
            hidden: ({ parent }) => !parent?.enablesidebar,
            initialValue: false,
        }),
        defineField({
            name: "jobs",
            title: "Jobs",
            type: "array",
            of: [{ type: "reference", to: [{ type: "job" }] }],
            hidden: ({ parent }) => !(parent?.currentopenings && parent?.enablesidebar),
        }),
        defineField({
            name: "showquote",
            title: "Show Quote",
            type: "boolean",
            hidden: ({ parent }) => !parent?.enablesidebar,
            initialValue: false,
        }),
        defineField({
            name: "quote",
            title: "Quote",
            type: "text", // Changed from string to text for better editing
            hidden: ({ parent }) => !(parent?.showquote && parent?.enablesidebar),
            initialValue: "",
        }),
    
      
        defineField({
            name: "quoteauthor",
            title: "Quote Author",
            type: "string",
            hidden: ({ parent }) => !(parent?.showquote && parent?.enablesidebar),
            initialValue: "",
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