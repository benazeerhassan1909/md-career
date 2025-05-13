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
            name: 'showtitle',
            type: 'boolean',
            title: 'Show Title',
            initialValue: false,
        },
        {
            name: 'showtitleonform',
            type: 'boolean',
            title: 'Show Title on Form',
            initialValue: false,
        },
        {
            name: 'id',
            type: 'string',
            title: 'ID',
            options: {
                source: 'title',
            },
        },
        {
            name: 'class',
            type: 'string',
            title: 'Class',
        },

        {
            name: 'note',
            type: 'text',
            title: 'Note',
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
                                    { title: 'Select Dropdown', value: 'select' },
                                ],
                                layout: 'dropdown',
                            },
                        },
                        //FUll width
                        {
                            name: 'fullWidth',
                            type: 'boolean',
                            title: 'Half Width',
                            initialValue: false,
                        },

                        // File-specific settings
                        {
                            name: 'allowedFormats',
                            type: 'string',
                            title: 'Allowed File Formats',
                            description: 'Comma-separated list (e.g., .pdf,.docx,.jpg)',
                            hidden: ({ parent }: { parent: { type?: string } }) => parent?.type !== 'file'
                        },
                        // Select-specific settings
                        {
                            name: 'selectOptions',
                            type: 'array',
                            title: 'Dropdown Options',
                            of: [{ type: 'string' }],
                            description: 'Add all available options for selection',
                            hidden: ({ parent }: { parent?: { type?: string } }) => parent?.type !== 'select',
                            validation: (Rule: { custom: (callback: (options: string[] | undefined, context: { parent?: { type?: string } }) => true | string) => void }) => Rule.custom((options: string[] | undefined, context: { parent?: { type?: string } }) => {
                                if (context.parent?.type === 'select' && (!options || options.length === 0)) {
                                    return 'At least one option is required for select fields'
                                }
                                return true
                            })
                        },
                        {
                            name: 'isMultiSelect',
                            type: 'boolean',
                            title: 'Allow multiple selections?',
                            initialValue: false,
                            hidden: ({ parent }: { parent?: { type?: string } }) => parent?.type !== 'select'
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