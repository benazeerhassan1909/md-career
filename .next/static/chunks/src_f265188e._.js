(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f265188e._.js", {

"[project]/src/sanity/env.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-03';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "aiy1j8gs"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/sanity/lib/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-client] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: true,
    stega: {
        studioUrl: '/studio'
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/sanity/lib/submitCareerForm.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/submitCareerForm.ts
__turbopack_context__.s({
    "submitCareerForm": (()=>submitCareerForm),
    "uploadResume": (()=>uploadResume)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: 'aiy1j8gs',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
    token: ("TURBOPACK compile-time value", "skOeW4sDFfB2sI2JhRbG9udM5ctpiBl7a3DTXfAjTmkQ4S8pliiFIHEnERHtKQoHKtnfndXA0XwbD5VGFlH8nLxyMlcRIYWdlhD9Xoa8YAudF1hveuIXVfeOM8fZt4Eg62Dnvouy7TvkI0uDmRjR4WCB1xvdebHjFFa0QM36s88LUjIkKEzm")
});
const uploadResume = async (file)=>{
    const asset = await client.assets.upload('file', file, {
        filename: file.name,
        contentType: file.type
    });
    return {
        _type: 'file',
        asset: {
            _type: 'reference',
            _ref: asset._id
        }
    };
};
const submitCareerForm = async (formData, formFields, formName)=>{
    // Process file uploads first
    let resumeFile = null;
    const fileFields = formFields.filter((field)=>field.type === 'file' && formData[field.name]);
    if (fileFields.length > 0) {
        resumeFile = await uploadResume(formData[fileFields[0].name]);
    }
    // Format all form fields into a text string
    let submittedDetails = '';
    formFields.forEach((field)=>{
        if (field.type !== 'file') {
            const label = field.label || field.name;
            const value = formData[field.name] || '(not provided)';
            submittedDetails += `${label}: ${value}\n`;
        }
    });
    // Create the Sanity document
    const doc = {
        _type: 'careerSubmission',
        formName: formName,
        submittedAt: new Date().toISOString(),
        submittedDetails: submittedDetails.trim(),
        rawData: JSON.stringify({
            formName,
            ...formData
        })
    };
    // Add resume file if uploaded
    if (resumeFile) {
        doc.resume = resumeFile;
    }
    return await client.create(doc);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$submitCareerForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/submitCareerForm.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const JobApplicationForm = ({ jobId })=>{
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobApplicationForm.useEffect": ()=>{
            const fetchData = {
                "JobApplicationForm.useEffect.fetchData": async ()=>{
                    try {
                        const jobData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type == "job" && _id == $jobId][0]{
                        ...,
                        chooseForm->{
                            title,
                            submitButtonText,
                            fields
                        }
                    }`, {
                            jobId
                        });
                        setForm(jobData.chooseForm);
                        if (jobData.chooseForm?.fields) {
                            const initialData = {};
                            jobData.chooseForm.fields.forEach({
                                "JobApplicationForm.useEffect.fetchData": (field)=>{
                                    initialData[field.name] = field.type === 'checkbox' ? false : '';
                                }
                            }["JobApplicationForm.useEffect.fetchData"]);
                            setFormData(initialData);
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
            }["JobApplicationForm.useEffect.fetchData"];
            fetchData();
        }
    }["JobApplicationForm.useEffect"], [
        jobId
    ]);
    const validateForm = ()=>{
        const errors = {};
        if (!form?.fields) return false;
        form.fields.forEach((field)=>{
            if (field.isRequired) {
                if (field.type === 'checkbox' && !formData[field.name]) {
                    errors[field.name] = 'This field is required';
                } else if (field.type !== 'checkbox' && !formData[field.name]?.toString().trim()) {
                    errors[field.name] = 'This field is required';
                } else if (field.type === 'file' && !formData[field.name]) {
                    errors[field.name] = 'Please upload a file';
                }
            }
        });
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target.checked;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const handleFileChange = (e, fieldName)=>{
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                [fieldName]: e.target.files[0]
            });
            // Clear file error when file is selected
            if (formErrors[fieldName]) {
                setFormErrors((prev)=>{
                    const newErrors = {
                        ...prev
                    };
                    delete newErrors[fieldName];
                    return newErrors;
                });
            }
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            setSubmitStatus({
                success: false,
                message: 'Please fill all required fields'
            });
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus({});
        try {
            if (!form || !form.fields) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$submitCareerForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitCareerForm"])(formData, form.fields, form.title || '');
            setSubmitStatus({
                success: true,
                message: 'Application submitted successfully!'
            });
            const resetData = {};
            form.fields.forEach((field)=>{
                resetData[field.name] = field.type === 'checkbox' ? false : '';
            });
            setFormData(resetData);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                success: false,
                message: 'Error submitting application. Please try again.'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!form) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading form..."
        }, void 0, false, {
            fileName: "[project]/src/components/Form.tsx",
            lineNumber: 164,
            columnNumber: 16
        }, this);
    }
    if (!form.fields || form.fields.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "No form fields configured for this job"
        }, void 0, false, {
            fileName: "[project]/src/components/Form.tsx",
            lineNumber: 168,
            columnNumber: 16
        }, this);
    }
    // Group fields into pairs for the two-column layout
    const groupedFields = [];
    let currentGroup = [];
    form.fields.forEach((field, index)=>{
        // If it's a textarea or checkbox, push as a single item group
        if (field.type === 'textarea' || field.type === 'checkbox') {
            // Push any existing group first
            if (currentGroup.length > 0) {
                groupedFields.push([
                    ...currentGroup
                ]);
                currentGroup = [];
            }
            groupedFields.push([
                field
            ]);
        } else {
            // Regular field - add to current group
            currentGroup.push(field);
            // Push group when we have 2 fields or it's the last field
            if (currentGroup.length === 2 || index === form.fields.length - 1) {
                groupedFields.push([
                    ...currentGroup
                ]);
                currentGroup = [];
            }
        }
    });
    console.log(form.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "singleopening-contact-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: form.title || 'Apply Now'
            }, void 0, false, {
                fileName: "[project]/src/components/Form.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: form.id,
                className: "contact-form-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    method: "post",
                    className: "wpcf7-form tttt mdcareer-submit-form mdinc-section-bottom-margin",
                    encType: "multipart/form-data",
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "form_name",
                                value: form.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Form.tsx",
                                lineNumber: 207,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Form.tsx",
                            lineNumber: 206,
                            columnNumber: 21
                        }, this),
                        groupedFields.map((fieldPair, pairIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdinc-form-field",
                                children: fieldPair.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${field.type === 'checkbox' ? '' : 'mdinc-form-field-wrapper-container'} ${formErrors[field.name] ? 'has-error' : ''}`,
                                        children: [
                                            field.type !== 'checkbox' && !field.showPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: field.name,
                                                className: "form-label",
                                                children: [
                                                    field.label,
                                                    field.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "required-asterisk",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 66
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Form.tsx",
                                                lineNumber: 220,
                                                columnNumber: 41
                                            }, this),
                                            field.type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "wpcf7-form-control-wrap mdinc-form-field-wrappers",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: field.name,
                                                            name: field.name,
                                                            value: formData[field.name] || '',
                                                            onChange: handleChange,
                                                            placeholder: field.showPlaceholder && field.isRequired ? field.label + ' *' : field.showPlaceholder && !field.isRequired ? field.label : field.placeholder,
                                                            required: field.isRequired,
                                                            className: "wpcf7-form-control wpcf7-textarea",
                                                            rows: 4
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 45
                                                    }, this),
                                                    field.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "help-tip",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: field.helpText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true) : field.type === 'checkbox' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 md-career-custom-checkbox",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "wpcf7-form-control-wrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-form-control wpcf7-checkbox",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "wpcf7-list-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: field.name,
                                                                        name: field.name,
                                                                        type: "checkbox",
                                                                        checked: !!formData[field.name],
                                                                        onChange: handleChange,
                                                                        className: "privcy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Form.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "wpcf7-list-item-label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Form.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Form.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mdinc-checkbox-content",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: field.name,
                                                            children: [
                                                                field.label,
                                                                field.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "required-asterisk",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Form.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 74
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Form.tsx",
                                                lineNumber: 247,
                                                columnNumber: 41
                                            }, this) : field.type === 'file' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdinc-source-fileUpload",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mdinc-file",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-form-control-wrap mdinc-btn",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                hidden: true,
                                                                id: field.name,
                                                                name: field.name,
                                                                type: "file",
                                                                onChange: (e)=>handleFileChange(e, field.name),
                                                                required: field.isRequired,
                                                                className: "wpcf7-form-control wpcf7-file wpcf7-validates-as-required mdinc-contact-form-file"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Form.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-not-valid-tip file-error mdinc-info mdinc-error",
                                                            children: formErrors[field.name] || 'No file chosen'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "file-format",
                                                            children: [
                                                                "Allowed formats*: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: ".pdf, .doc"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Form.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 71
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Form.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Form.tsx",
                                                lineNumber: 271,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "wpcf7-form-control-wrap mdinc-form-field-wrapper",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: field.name,
                                                            name: field.name,
                                                            type: field.type,
                                                            value: formData[field.name] || '',
                                                            onChange: handleChange,
                                                            placeholder: field.showPlaceholder && field.isRequired ? field.label + ' *' : field.showPlaceholder && !field.isRequired ? field.label : field.placeholder,
                                                            required: field.isRequired,
                                                            className: `wpcf7-form-control wpcf7-text ${field.isRequired ? 'wpcf7-validates-as-required' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 45
                                                    }, this),
                                                    field.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "help-tip",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: field.helpText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Form.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Form.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            formErrors[field.name] && field.type !== 'file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `wpcf7-not-valid-tip ${field.name}-error mdinc-error`,
                                                children: formErrors[field.name]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Form.tsx",
                                                lineNumber: 315,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, field.name, true, {
                                        fileName: "[project]/src/components/Form.tsx",
                                        lineNumber: 213,
                                        columnNumber: 33
                                    }, this))
                            }, pairIndex, false, {
                                fileName: "[project]/src/components/Form.tsx",
                                lineNumber: 211,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-submit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "submit",
                                    value: isSubmitting ? 'Submitting...' : form.submitButtonText || 'Apply Now',
                                    disabled: isSubmitting,
                                    className: "wpcf7-form-control wpcf7-submit mdinc-apply-btn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Form.tsx",
                                    lineNumber: 325,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ajax-loader"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Form.tsx",
                                    lineNumber: 331,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Form.tsx",
                            lineNumber: 324,
                            columnNumber: 21
                        }, this),
                        submitStatus.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `wpcf7-response-output wpcf7-validation-errors ${submitStatus.success ? 'resume-submit-success' : 'general-error-form'}`,
                            role: "alert",
                            children: [
                                submitStatus.message,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mdinc-loaderOuter",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mdinc-loader"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Form.tsx",
                                        lineNumber: 339,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Form.tsx",
                                    lineNumber: 338,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Form.tsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Form.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Form.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Form.tsx",
        lineNumber: 198,
        columnNumber: 9
    }, this);
};
_s(JobApplicationForm, "ePBtEyJ3IvXkmkVBc5a2pLY5Meo=");
_c = JobApplicationForm;
const __TURBOPACK__default__export__ = JobApplicationForm;
var _c;
__turbopack_context__.k.register(_c, "JobApplicationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f265188e._.js.map