import { defineType, defineField } from 'sanity'

export const careerSubmission = defineType({
    name: 'careerSubmission',
    title: 'Career Submissions',
    type: 'document',
    fields: [
        defineField({
            name: 'formName',
            type: 'string',
            title: 'Form Name',
        }),
        defineField({
            name: 'submittedDetails',
            type: 'text',
            title: 'Submitted Details',
        }),
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
        }),
        defineField({
            name: 'rawData',
            type: 'text',
            title: 'Raw JSON Data',
            description: 'Backup of all submission data',
        })
    ],
    preview: {
        select: {
            formName: 'formName',
            submittedAt: 'submittedAt',
            applicant: 'submittedDetails'
        },
        prepare({ formName, submittedAt, applicant }) {
            // Extract the first line that looks like "Name: ..." for the subtitle
            const nameLine = applicant.split('\n').find(line => line.toLowerCase().includes('name:'));
            const applicantName = nameLine ? nameLine.split(':')[1].trim() : 'Unknown applicant';

            return {
                title: `${formName || 'Career Submission'}`,
                subtitle: `${applicantName} - ${new Date(submittedAt).toLocaleDateString()}`,
            }
        },
    },
})