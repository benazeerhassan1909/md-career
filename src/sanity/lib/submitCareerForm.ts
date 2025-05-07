// lib/submitCareerForm.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'aiy1j8gs',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
})

export const uploadResume = async (file: File) => {
    const asset = await client.assets.upload('file', file, {
        filename: file.name,
        contentType: file.type,
    });

    return {
        _type: 'file',
        asset: {
            _type: 'reference',
            _ref: asset._id,
        }
    };
};

export const submitCareerForm = async (formData: Record<string, any>, formFields: any[], formName: string) => {
    // Process file uploads first
    let resumeFile = null;
    const fileFields = formFields.filter(field => field.type === 'file' && formData[field.name]);

    if (fileFields.length > 0) {
        resumeFile = await uploadResume(formData[fileFields[0].name]);
    }

    // Format all form fields into a text string
    let submittedDetails = '';

    formFields.forEach(field => {
        if (field.type !== 'file') {
            const label = field.label || field.name;
            const value = formData[field.name] || '(not provided)';
            submittedDetails += `${label}: ${value}\n`;
        }
    });

    // Create the Sanity document
    const doc = {
        _type: 'careerSubmission',
        formName: formName, // Store form name in its dedicated field
        submittedAt: new Date().toISOString(),
        submittedDetails: submittedDetails.trim(),
        rawData: JSON.stringify({
            formName,
            ...formData
        }),
    };

    // Add resume file if uploaded
    if (resumeFile) {
        doc.resume = resumeFile;
    }

    return await client.create(doc);
};