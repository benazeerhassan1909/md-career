import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const splitImageType = defineType({
    name: "splitImage",
    type: "object",
    fields: [
        defineField({
            name: "orientation",
            type: "string",
            options: {
                list: [
                    { value: "imageLeft", title: "Image Left" },
                    { value: "imageRight", title: "Image Right" },
                ],
            },
        }),
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: "blockContent",
        }),
        defineField({
            name: "authorname",
            title: "Author Name",
            type: "string",
        }),
        defineField({
            name: "authordesignation",
            title: "Author Designation",
            type: "string",
        }),
        defineField({
            name: "authorimage",
            title: "Author Image",
            type: "image",
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
            name: "image",
            type: "image",
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
        // add radio button filed for video upload or youtube url
        defineField({
            name: 'videoType',
            title: 'Video Type',
            type: 'string',
            options: {
                list: [
                    { value: 'upload', title: 'Upload Video' },
                    { value: 'url', title: 'Youtube URL' },
                ],   
            },
        }),
        defineField({
            name: 'videoUrl',
            title: 'Youtube URL',
            type: 'url',
            hidden: ({ parent }) => parent?.videoType !== 'url',
        }),

        defineField({
            name: 'video',
            title: 'Upload Video',
            type: 'file',
            hidden: ({ parent }) => parent?.videoType !== 'upload',
            options: {
                accept: 'video/*', // restricts file type to videos
            },
        }),
    ],
    icon: BlockContentIcon,

    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare({ title, media }) {
            return {
                title : title ?? "Text and Image Block",
                subtitle: "Text and Image Block",
                media
            };
        },
    },
});