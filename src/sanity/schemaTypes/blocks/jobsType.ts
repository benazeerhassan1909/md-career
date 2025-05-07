import { defineField, defineType } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";


export const jobsType = defineType({
    name: "jobs",
    title: "Jobs",
    type: "object",
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
            name: "jobs",
            title: "Jobs",
            type: "array",
            of: [{ type: "reference", to: [{ type: "job" }] }],
        }),
        defineField({
            name: "btntext",
            type: "string",
            title: "Button Text",
        }),
        defineField({
            name: "btnurl",
            type: "url",
            title: "Button URL",
        }),
    ],
    icon: HelpCircleIcon,
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "Jobs Block",
                subtitle: "Jobs Block",
            };
        },
    },
});