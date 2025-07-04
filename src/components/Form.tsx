/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';
import { submitCareerForm } from '../sanity/lib/submitCareerForm';
// import ReCAPTCHA from "react-google-recaptcha";


interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    isRequired?: boolean;
    showPlaceholder?: boolean;
    helpText?: string;
    note?: string; // Added note field
    allowedFormats?: string; // Added allowed formats
    selectOptions?: string[]; // Added selectOptions for dropdown fields
    fullWidth?: boolean; // Added fullWidth field
}

interface FormConfig {
    title?: string;
    submitButtonText?: string;
    id?: string;
    fields?: FormField[];
    class?: string;
    note?: string;
    showtitle?: boolean;
    showtitleonform?: boolean;
}

const JobApplicationForm = ({ jobId, jobSlug, formId }: { jobId: string; jobSlug?: string, formId?: string }) => {
    const [form, setForm] = useState<FormConfig | null>(null);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileName, setFileName] = useState('');
    // const [token, setToken] = useState<string | null>(null);



    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});
    const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});
    const [fileError, setFileError] = useState<string>('');
    const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                let formDetails;

                if (jobId) {
                    const jobData = await client.fetch(
                        `*[_type == "job" && _id == $jobId][0]{
                        ...,
                        chooseForm->{
                            title,
                            submitButtonText,
                            fields
                        }
                    }`,
                        { jobId }
                    );
                    if (!jobData?.chooseForm) {
                        throw new Error('Form not found for this job');
                    }
                    formDetails = jobData.chooseForm;
                }
                else if (formId) {
                    formDetails = await client.fetch(`*[_id == $chooseFormId][0]`, {
                        chooseFormId: formId,
                    });
                }

                setForm(formDetails);

                if (formDetails?.fields) {
                    const initialData: Record<string, any> = {};
                    formDetails.fields.forEach((field: FormField) => {
                        // Auto-populate position field if it exists and we have a job slug
                        if (field.name === 'position' && jobSlug) {
                            initialData[field.name] = jobSlug;
                        } else {
                            initialData[field.name] = field.type === 'checkbox' ? false : '';
                        }
                    });
                    setFormData(initialData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [jobId, jobSlug, formId]);



    const handleFocus = (fieldName: string) => {
        setFocusedFields(prev => ({ ...prev, [fieldName]: true }));
    };

    const handleBlur = (fieldName: string) => {
        setFocusedFields(prev => ({ ...prev, [fieldName]: false }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, allowedFormats?: string) => {

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const fileExtension = file.name.split('.').pop()?.toLowerCase();

            // Validate file format
            if (allowedFormats && !allowedFormats.includes(`.${fileExtension}`)) {
                setFileError(`Please upload a file in ${allowedFormats} format`);
                return;
            }

            setFileError('');
            setFormData(prev => ({
                ...prev,
                [fieldName]: file,
            }));

            setFileName(file.name); // Update the file name state

            // Clear file error when file is selected
            if (formErrors[fieldName]) {
                setFormErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors[fieldName];
                    return newErrors;
                });
            }
        }
    };
    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!form?.fields) return false;

        let isValid = true;

        form.fields.forEach((field) => {
            const fieldValue = formData[field.name];
            const isEmpty = fieldValue === undefined || fieldValue === null ||
                (typeof fieldValue === 'string' && fieldValue.trim() === '') ||
                (Array.isArray(fieldValue) && fieldValue.length === 0);

            // Required field validation
            if (field.isRequired) {
                if (isEmpty) {
                    errors[field.name] = `Please enter your ${field.label?.toLowerCase()}.`;
                    isValid = false;
                }

                // Special case for checkbox
                if (field.type === 'checkbox' && !fieldValue) {
                    errors[field.name] = 'Please check the box';
                    isValid = false;
                }

                // Special case for file uploads
                if (field.type === 'file' && isEmpty) {
                    errors[field.name] = 'Please upload a file';
                    isValid = false;
                }
            }

            // Field-specific format validation (only if field has value)
            if (!isEmpty && fieldValue) {
                if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue.toString())) {
                    errors[field.name] = 'Please enter a valid email address';
                    isValid = false;
                }
                else if (field.type === 'url' && !/^https?:\/\/.+\..+/.test(fieldValue.toString())) {
                    errors[field.name] = 'Please enter a valid URL';
                    isValid = false;
                }
                else if (field.type === 'tel' && !/^[\d\s\+\-\(\)]{10,}$/.test(fieldValue.toString())) {
                    errors[field.name] = 'Please enter a valid phone number';
                    isValid = false;
                }
            }

            // Additional file validation
            if (field.type === 'file' && fileError) {
                errors[field.name] = fileError;
                isValid = false;
            }
        });

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // This should prevent the default form submission behavior

        // If the page is still reloading, the issue might be elsewhere
        setIsSubmitting(true);
        setSubmitStatus({});

        try {
            // Validate form
            const isValid = validateForm();
            if (!isValid) {
                throw new Error('Please fill in all required fields correctly.');
            }

            if (!form?.fields) {
                throw new Error('Form configuration is missing');
            }

            // Submit career form - make sure this returns a Promise
            await submitCareerForm(formData, form.fields, form.title || '');

            // Only send confirmation if email field exists and has value
            const hasEmailField = form.fields.some(f => f.name === 'email');
            if (hasEmailField && formData.email) {
                await sendConfirmationEmail({
                    email: formData.email,
                    message: 'Thank you for your application!',
                });
            }

            // Handle success
            setSubmitStatus({
                success: true,
                message: 'Application submitted successfully! A confirmation has been sent to your email.'

            });

            // Reset form
            resetFormFields(form.fields);

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                success: false,
                message: error instanceof Error
                    ? error.message
                    : 'Error submitting application. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper function for sending email
    const sendConfirmationEmail = async (emailData: {
        email: string;
        message: string;
    }) => {
        try {
            console.log('Sending confirmation email to:', emailData.email);
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send email');
            }
            console.log('response', response);

            return await response.json();
        } catch (error) {
            console.error('Email sending error:', error);
            throw error; // Re-throw to be caught in the main handler
        }
    };

    // Helper function to reset form fields
    const resetFormFields = (fields: FormField[]) => {
        const resetData: Record<string, any> = {};
        fields.forEach((field: FormField) => {
            resetData[field.name] = field.type === 'checkbox' ? false : '';
        });
        setFormData(resetData);
    };
    console.log('form', form);
    if (!form) {
        return <div>Loading form...</div>;
    }

    if (!form.fields || form.fields.length === 0) {
        return <div>No form fields configured for this job</div>;
    }

    // Group fields into pairs for the two-column layout
    const groupedFields: FormField[][] = [];
    let currentGroup: FormField[] = [];

    form.fields.forEach((field, index) => {
        // If it's a textarea, push as a single item group (full width)
        if (field.type === 'textarea') {
            // Push any existing group first
            if (currentGroup.length > 0) {
                groupedFields.push([...currentGroup]);
                currentGroup = [];
            }
            groupedFields.push([field]);
        }
        // Checkboxes can be grouped with other fields
        else if (field.type === 'checkbox') {
            currentGroup.push(field);

            // Push group when we have 2 fields or it's the last field
            if (currentGroup.length === 2 || index === (form?.fields?.length || 0) - 1) {
                groupedFields.push([...currentGroup]);
                currentGroup = [];
            }
        }
        else {
            // Regular field - add to current group
            currentGroup.push(field);

            // Push group when we have 2 fields or it's the last field
            if (currentGroup.length === 2 || index === (form?.fields?.length || 0) - 1) {
                groupedFields.push([...currentGroup]);
                currentGroup = [];
            }
        }
    });

    return (
        <section className={form.class}>
            {form.showtitle && form.showtitleonform == false && (
                <h2>{form.title || 'Apply Now'}</h2>
            )}
            <div id={form.id} className={`contact-form-block ${form.class}`}>
                <form onSubmit={handleSubmit} method="post"
                    className="wpcf7-form tttt mdcareer-submit-form mdinc-section-bottom-margin"
                    encType="multipart/form-data"
                    noValidate
                >
                    <div style={{ display: 'none' }}>
                        <input type="hidden" name="form_name" value={form.title} />
                    </div>
                    {form.showtitle && form.showtitleonform && (
                        <h3>{form.title}</h3>
                    )}
                    {form.note && (
                        <div className="councelling-form-notes">
                            <h6>Important Note:</h6>
                            <p>{form.note}</p>
                        </div>
                    )}

                    {groupedFields.map((fieldPair, pairIndex) => (
                        <div
                            key={pairIndex}
                            className={`
                        mdinc-form-field 
                        ${fieldPair[0]?.type === 'textarea' ? 'full-width-field' : ''}
                        ${fieldPair.some(field => field.fullWidth) ? 'full-width-field' : ''}
                    `}
                        >
                            {fieldPair.map((field) => (
                                <div
                                    key={field.name + pairIndex}
                                    className={`
                                ${field.type === 'checkbox' || field.type === 'textarea'
                                            ? 'cust-wrapper'
                                            : 'mdinc-form-field-wrapper-container'
                                        } 
                                ${formErrors[field.name] ? 'has-error' : ''}
                                ${field.fullWidth ? 'full-width-field' : ''}
                            `}
                                >
                                    {field.type !== 'checkbox' && !field.showPlaceholder && (
                                        <label htmlFor={field.name} className="form-label">
                                            {field.label}
                                            {field.isRequired && <span className="required-asterisk">*</span>}
                                        </label>
                                    )}

                                    {field.type === 'textarea' ? (
                                        <>
                                            <span className="wpcf7-form-control-wrap mdinc-form-field-wrappers">
                                                <textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    value={formData[field.name] || ''}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus(field.name)}
                                                    onBlur={() => handleBlur(field.name)}
                                                    placeholder={field.showPlaceholder && field.isRequired ? field.label + ' *' : field.showPlaceholder && !field.isRequired ? field.label : field.placeholder}
                                                    required={field.isRequired}
                                                    className="wpcf7-form-control wpcf7-textarea"
                                                    rows={4}
                                                    style={{
                                                        borderBottomColor: focusedFields[field.name] ? '#fd5636' : '',
                                                        transition: 'border-bottom-color 0.3s ease'
                                                    }}
                                                />
                                            </span>
                                            {field.helpText && (
                                                <div className="help-tip">
                                                    <p>{field.helpText}</p>
                                                </div>
                                            )}
                                            {field.note && (
                                                <div className="note-text">
                                                    <p>Note:{field.note}</p>
                                                </div>
                                            )}
                                        </>
                                    ) :
                                        field.type === 'select' ? (
                                            <div className={`mdinc-form-field ${field.fullWidth ? 'full-width-field' : ''}`}>
                                                <div className={`mdinc-form-field-wrapper-container ${field.fullWidth ? 'full-width-field' : ''}`}>
                                                    <div className={`mdinc-selectBox ${touchedFields[field.name] ? 'mdinc-selectBox-active' : ''}`}
                                                        onClick={() => setTouchedFields(prev => ({ ...prev, [field.name]: !prev[field.name] }))}>
                                                        <select
                                                            id={`mdinc-carrer-form-${field.name}`}
                                                            className="mdinc-carrer-form-field"
                                                            name={field.name}
                                                            value={formData[field.name] || ''}
                                                            onChange={(e) => {
                                                                handleChange(e);
                                                                setTouchedFields(prev => ({
                                                                    ...prev,
                                                                    [field.name]: false,
                                                                }));
                                                            }}
                                                            onFocus={() => handleFocus(field.name)}
                                                            onBlur={() => handleBlur(field.name)}
                                                            required={field.isRequired}
                                                        >
                                                            <option value="">{field.placeholder}</option>
                                                            {field.selectOptions?.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <div className="mdcareer-contact-select-wrapper">
                                                            <label className="source-left-title">
                                                                {field.label}
                                                                {field.isRequired && '*'}
                                                            </label>
                                                            <div className={`mdcareer-contact-selectlabel ${field.name}`}>
                                                                {formData[field.name] || field.placeholder}
                                                            </div>
                                                            <ul
                                                                className={`mdcareer-contact-selectbox ${field.name}`}
                                                                style={{ display: touchedFields[field.name] ? 'block' : 'none' }}
                                                            >
                                                                {field.selectOptions?.map((option) => (
                                                                    <li
                                                                        key={option}
                                                                        data-value={option}
                                                                        onClick={() => {
                                                                            setFormData(prev => ({
                                                                                ...prev,
                                                                                [field.name]: option,
                                                                            }));
                                                                            setTouchedFields(prev => ({
                                                                                ...prev,
                                                                                [field.name]: false,
                                                                            }));
                                                                        }}
                                                                    >
                                                                        {option}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : field.type === 'checkbox' ? (
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 md-career-custom-checkbox">
                                                <span className="wpcf7-form-control-wrap">
                                                    <span className="wpcf7-form-control wpcf7-checkbox">
                                                        <span className="wpcf7-list-item">
                                                            <input
                                                                id={field.name}
                                                                name={field.name}
                                                                type="checkbox"
                                                                checked={!!formData[field.name]}
                                                                onChange={handleChange}
                                                                className={`privcy ${formErrors[field.name] ? 'has-error-border' : ''}`}
                                                            />
                                                            <span className="wpcf7-list-item-label"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="mdinc-checkbox-content">
                                                    <label htmlFor={field.name}>
                                                        {field.label}
                                                        {field.isRequired && <span className="required-asterisk">*</span>}
                                                    </label>
                                                </span>
                                                {field.helpText && (
                                                    <div className="help-tip">
                                                        <p>{field.helpText}</p>
                                                    </div>
                                                )}
                                                {field.note && (
                                                    <div className="note-text">
                                                        <p>{field.note}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ) : field.type === 'file' ? (
                                            <>
                                                        <div className={`mdinc-source-fileUpload ${field.fullWidth ? 'full-width-field' : ''}`} >
                                                    <div className="mdinc-file" >
                                                        <span className="wpcf7-form-control-wrap mdinc-btn" >
                                                            <input
                                                                id={field.name}
                                                                name={field.name}
                                                                type="file"
                                                                onChange={(e) => handleFileChange(e, field.name, field.allowedFormats)}
                                                                required={field.isRequired}
                                                                className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required mdinc-contact-form-file"
                                                                accept={field.allowedFormats} />
                                                        </span>
                                                        < span className="file-format" >
                                                            Allowed formats *: <small>{field.allowedFormats} </small>
                                                        </span>
                                                        {fileError || formErrors[field.name] || fileName ? (
                                                            <span className="wpcf7-not-valid-tip file-error mdinc-info mdinc-error">
                                                                {fileError || formErrors[field.name] || fileName}
                                                            </span>
                                                        ) : (
                                                            <span className="mdinc-info">No file chosen</span>
                                                        )}

                                                        <div className="file-format-help">
                                                            {field.helpText && (
                                                                <div className="help-tip">
                                                                    <p>{field.helpText}</p>
                                                                </div>
                                                            )}
                                                            {field.note && (
                                                                <div className="note-text">
                                                                    <p>{field.note}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span className="wpcf7-form-control-wrap mdinc-form-field-wrapper">
                                                    <input
                                                        id={field.name}
                                                        name={field.name}
                                                        type={field.type}
                                                        value={formData[field.name] || ''}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus(field.name)}
                                                        onBlur={() => handleBlur(field.name)}
                                                        placeholder={field.showPlaceholder && field.isRequired ? field.label + ' *' : field.showPlaceholder && !field.isRequired ? field.label : field.placeholder}
                                                        required={field.isRequired}
                                                        className={`wpcf7-form-control wpcf7-text ${field.isRequired ? 'wpcf7-validates-as-required' : ''}`}
                                                        style={{
                                                            borderBottomColor: focusedFields[field.name] ? '#fd5636' : '',
                                                            transition: 'border-bottom-color 0.3s ease'
                                                        }}
                                                    />
                                                </span>
                                                {field.helpText && (
                                                    <div className="help-tip">
                                                        <p>{field.helpText}</p>
                                                    </div>
                                                )}
                                                {field.note && (
                                                    <div className="note-text">
                                                        <p>{field.note}</p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    {formErrors[field.name] && field.type !== 'file' && field.type !== 'checkbox' && (
                                        <span className={`wpcf7-not-valid-tip ${field.name}-error mdinc-error`}>
                                            {formErrors[field.name]}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-submit">
                        <input
                            type="submit"
                            value={isSubmitting ? 'Submitting...' : form.submitButtonText || 'Apply Now'}
                            disabled={isSubmitting}
                            className="wpcf7-form-control wpcf7-submit mdinc-apply-btn"
                        />
                        <span className="ajax-loader"></span>
                    </div>

                    {submitStatus.message && (
                        <div className={`wpcf7-response-output wpcf7-validation-errors ${submitStatus.success ? 'resume-submit-success' : 'general-error-form'}`} role="alert">
                            {submitStatus.message}
                            <div className="mdinc-loaderOuter">
                                <span className="mdinc-loader"></span>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default JobApplicationForm;