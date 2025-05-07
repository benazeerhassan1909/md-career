import { defineField, defineType } from "sanity";

export const jobType = defineType({
    name: "job",
    title: "Job",
    type: "document",
    fields: [
        defineField({
            name: "heroimage",
            type: "image",
            title: "Hero Image",
        }),
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
            name: "body",
            title: "Details",
            type: "blockContent",
        }),
        defineField({
            name: "location",
            type: "string",
            title: "Location",
        }),
        defineField({
            name: "skills",
            type: "array",
            of: [
                defineField({
                    name: "skill",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            type: "string",
                        }),
                        defineField({
                            name: "skilllist",
                            type: "array",
                            of: [
                                defineField({
                                    name: "skilllistitem",
                                    type: "string",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "benefitsheading",
            type: "string",
            title: "Benefits Heading",
        }),
        defineField({
            name: "benefits",
            title: "Benefits",
            type: "array",
            of: [{ type: "string" }],
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
        defineField({
            name: "chooseForm",
            title: "Choose Form",
            type: "reference",
            to: [{ type: "careerForm" }]
        }),
       
    ],
     preview: {
            select: {
                title: "title",
            },
            prepare({ title }) {
                return {
                    title: title ?? "Job Block",
                };
            },
        },
    
});