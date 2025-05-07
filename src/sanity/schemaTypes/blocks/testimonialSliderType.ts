import { defineType, defineField, defineArrayMember } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const testimonialSlider = defineType({
    name: 'testimonialSlider',
    title: 'Testimonial Slider',
    type: 'object',
    icon: StarIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Slider Title',
            type: 'string',
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [
                defineField({
                    name: 'reviewimage',
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
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
            ],
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'testimonial',
                    fields: [
                        defineField({ name: 'quote', type: 'text', title: 'Quote' }),
                        defineField({ name: 'author', type: 'string', title: 'Author Name' }),
                        defineField({ name: 'role', type: 'string', title: 'Author Role' }),
                        defineField({ name: 'image', type: 'image', title: 'Author Image' }),
                        defineField({
                            name: 'backgroundColor',
                            title: 'Background Color',
                            type: 'color',
                            options: {
                                disableAlpha: true,
                            },
                        }),],
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
                title: title || 'Testimonial Slider Block',
                subtitle: 'Testimonials Block',
            }
        },
    },
})
