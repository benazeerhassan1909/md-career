// schemas/form.js

export const careerForm = {
    name: 'careerForm',
    type: 'document',
    title: 'Forms',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Form Title',
        },
        {
            name: 'id',
            type:'string',
            title: 'ID',
            options: {
                source: 'title',
            },
        },
        {
            name: 'fields',
            type: 'array',
            title: 'Form Fields',
            of: [
                {
                    type: 'object',
                    title: 'Field',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Field Name',
                            description: 'Unique field name (e.g., fullName, email, phone)',
                        },
                        {
                            name: 'type',
                            type: 'string',
                            title: 'Field Type',
                            options: {
                                list: [
                                    { title: 'Text', value: 'text' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Tel', value: 'tel' },
                                    { title: 'Textarea', value: 'textarea' },
                                    { title: 'URL', value: 'url' },
                                    { title: 'File Upload', value: 'file' },
                                    { title: 'Checkbox', value: 'checkbox' },
                                ],
                                layout: 'dropdown',
                            },
                        },
                        // add allowedFormats if choosen field is file
                        {
                            name: 'allowedFormats',
                            type: 'string',
                            title: 'Allowed File Formats',
                            description: 'Comma-separated list of allowed file formats (e.g., .jpg, .png)',
                            hidden: ({ parent }: { parent: { type?: string } }) => parent?.type !== 'file'
                        },
                        {
                            name: 'placeholder',
                            type: 'string',
                            title: 'Placeholder Text',
                        },
                        {
                            name: 'helpText',
                            type: 'string',
                            title: 'Help Text',
                        },
                        {
                            name: 'note',
                            type: 'string',
                            title: 'Note',
                        },
                        {
                            name: 'isRequired',
                            type: 'boolean',
                            title: 'Required Field?',
                            initialValue: true,
                        },
                        {
                            name: 'showPlaceholder',
                            type: 'boolean',
                            title: 'Use Label as Placeholder?',
                            initialValue: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'submitButtonText',
            type: 'string',
            title: 'Submit Button Text',
            initialValue: 'Apply Now',
        },
    ],
};
