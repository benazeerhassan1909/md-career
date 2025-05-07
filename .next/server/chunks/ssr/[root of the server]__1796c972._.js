module.exports = {

"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[project]/src/sanity/presentation/resolve.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolve": (()=>resolve)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/presentation.mjs [app-ssr] (ecmascript)");
;
const resolve = {
    locations: {
        // Add more locations for other post types
        post: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineLocations"])({
            select: {
                title: 'title',
                slug: 'slug.current'
            },
            resolve: (doc)=>({
                    locations: [
                        {
                            title: doc?.title || 'Untitled',
                            href: `/posts/${doc?.slug}`
                        },
                        {
                            title: 'Posts index',
                            href: `/posts`
                        }
                    ]
                })
        })
    }
};
}}),
"[project]/src/sanity/env.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-03';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "aiy1j8gs"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}}),
"[project]/src/sanity/schemaTypes/blockContentType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "blockContentType": (()=>blockContentType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const blockContentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: 'block',
            // Styles let you define what blocks can be marked up as. The default
            // set corresponds with HTML tags, but you can set any title or value
            // you want, and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                {
                    title: 'Normal',
                    value: 'normal'
                },
                {
                    title: 'H1',
                    value: 'h1'
                },
                {
                    title: 'H2',
                    value: 'h2'
                },
                {
                    title: 'H3',
                    value: 'h3'
                },
                {
                    title: 'H4',
                    value: 'h4'
                },
                {
                    title: 'Quote',
                    value: 'blockquote'
                }
            ],
            lists: [
                {
                    title: 'Bullet',
                    value: 'bullet'
                }
            ],
            // Marks let you mark up inline text in the Portable Text Editor
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting
                decorators: [
                    {
                        title: 'Strong',
                        value: 'strong'
                    },
                    {
                        title: 'Emphasis',
                        value: 'em'
                    }
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ]
                    }
                ]
            }
        }),
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: 'image',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageIcon"],
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text'
                }
            ]
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/siteSettings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: [
        'update',
        'publish'
    ],
    groups: [
        {
            name: 'generalSettings',
            title: 'General'
        },
        {
            name: 'headerSettings',
            title: 'Header'
        },
        {
            name: 'footerSettings',
            title: 'Footer'
        },
        {
            name: 'pageSettings',
            title: 'Pages'
        }
    ],
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'generalSettings'
        },
        {
            name: 'logo',
            title: 'Site Logo',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'generalSettings',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                },
                {
                    name: 'width',
                    title: 'Image Width',
                    type: 'number'
                },
                {
                    name: 'height',
                    title: 'Image Height',
                    type: 'number'
                }
            ]
        },
        {
            name: 'header',
            title: 'Header Settings',
            type: 'object',
            group: 'headerSettings',
            fields: [
                {
                    name: 'menuItems',
                    title: 'Menu Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string'
                                },
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'string'
                                },
                                {
                                    name: 'subMenu',
                                    title: 'Sub Menu',
                                    type: 'array',
                                    of: [
                                        {
                                            type: 'object',
                                            fields: [
                                                {
                                                    name: 'title',
                                                    title: 'Title',
                                                    type: 'string'
                                                },
                                                {
                                                    name: 'url',
                                                    title: 'URL',
                                                    type: 'string'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'footer',
            title: 'Footer Settings',
            type: 'object',
            group: 'footerSettings',
            fields: [
                {
                    name: 'footerText',
                    title: 'Footer Text',
                    type: 'string'
                },
                {
                    name: 'socialLinks',
                    title: 'Social Links',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'name',
                                    title: 'Platform Name',
                                    type: 'string'
                                },
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'url'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // Additional general settings
        {
            name: 'generalSettings',
            title: 'General Settings',
            type: 'object',
            group: 'generalSettings',
            fields: [
                {
                    name: 'favicon',
                    title: 'Favicon',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: 'seoDescription',
                    title: 'SEO Description',
                    type: 'text'
                }
            ]
        },
        {
            name: "homePage",
            type: "reference",
            to: [
                {
                    type: "page"
                }
            ],
            group: 'pageSettings'
        }
    ]
};
const __TURBOPACK__default__export__ = siteSettings;
}}),
"[project]/src/sanity/schemaTypes/pageType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pageType": (()=>pageType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
;
const pageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "page",
    title: "Page",
    type: "document",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "content",
            type: "pageBuilder"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "mainImage",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "slug.current"
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/pageBuilderType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pageBuilderType": (()=>pageBuilderType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const pageBuilderType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "pageBuilder",
    type: "array",
    of: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "hero"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "splitImage"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "features"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "faqs"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "titleDescription"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
            type: "logoList"
        })
    ],
    options: {
        insertMenu: {
            views: [
                {
                    name: "grid",
                    previewImageUrl: (schemaType)=>`/block-previews/${schemaType}.png`
                }
            ]
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/faqType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "faqType": (()=>faqType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const faqType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "faq",
    title: "FAQ",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "blockContent"
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/blocks/faqsType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "faqsType": (()=>faqsType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const faqsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "faqs",
    title: "FAQs",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {
                            type: "faq"
                        }
                    ]
                }
            ]
        })
    ],
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpCircleIcon"],
    preview: {
        select: {
            title: "title"
        },
        prepare ({ title }) {
            return {
                title,
                subtitle: "FAQs"
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/featureType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "featuresType": (()=>featuresType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const featuresType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "features",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "features",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "feature",
                    type: "object",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "text",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "icon",
                            type: "image"
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare ({ title }) {
            return {
                title,
                subtitle: "Features"
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/heroType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "heroType": (()=>heroType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const heroType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "hero",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "text",
            type: "blockContent"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "image",
            type: "image"
        })
    ],
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextIcon"],
    preview: {
        select: {
            title: "title",
            media: "image"
        },
        prepare ({ title, media }) {
            return {
                title,
                subtitle: "Hero",
                media: media ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextIcon"]
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/splitImageType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "splitImageType": (()=>splitImageType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const splitImageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "splitImage",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "orientation",
            type: "string",
            options: {
                list: [
                    {
                        value: "imageLeft",
                        title: "Image Left"
                    },
                    {
                        value: "imageRight",
                        title: "Image Right"
                    }
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Description',
            type: "blockContent"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "authorname",
            title: "Author Name",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "authordesignation",
            title: "Author Designation",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "authorimage",
            title: "Author Image",
            type: "image"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "image",
            type: "image"
        })
    ],
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlockContentIcon"],
    preview: {
        select: {
            title: "title",
            media: "image"
        },
        prepare ({ title, media }) {
            return {
                title,
                subtitle: "Text and Image",
                media
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/titleDescriptionType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "titleDescription": (()=>titleDescription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const titleDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'titleDescription',
    title: 'Title + Description',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Description',
            type: "blockContent"
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description'
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/blocks/logoListType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// /schemas/sections/logoList.ts
__turbopack_context__.s({
    "logoList": (()=>logoList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const logoList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'logoList',
    title: 'Logo List',
    type: 'object',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagesIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'itemsPerRow',
            title: 'Items per Row',
            type: 'number',
            initialValue: 3,
            validation: (Rule)=>Rule.min(1).max(8)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'White',
                        value: 'bg-white'
                    },
                    {
                        title: 'Gray 100',
                        value: 'bg-gray-100'
                    },
                    {
                        title: 'Gray 800',
                        value: 'bg-gray-800'
                    },
                    {
                        title: 'Black',
                        value: 'bg-black'
                    },
                    {
                        title: 'Blue 500',
                        value: 'bg-blue-500'
                    },
                    {
                        title: 'Red 500',
                        value: 'bg-red-500'
                    },
                    {
                        title: 'Transparent',
                        value: 'bg-transparent'
                    }
                ],
                layout: 'dropdown'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'logo',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text'
                        }
                    ]
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare ({ title }) {
            return {
                title: title || 'Logo List Section',
                subtitle: 'Logos'
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "schema": (()=>schema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blockContentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blockContentType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$siteSettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/siteSettings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/pageType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageBuilderType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/pageBuilderType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$faqType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/faqType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$faqsType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/faqsType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$featureType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/featureType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$heroType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/heroType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$splitImageType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/splitImageType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$titleDescriptionType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/titleDescriptionType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$logoListType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/logoListType.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blockContentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockContentType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$siteSettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageBuilderType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageBuilderType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$faqType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faqType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$faqsType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faqsType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$featureType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["featuresType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$heroType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$splitImageType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitImageType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$titleDescriptionType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["titleDescription"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$logoListType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoList"]
    ]
};
}}),
"[project]/src/sanity/structure.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "structure": (()=>structure)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
const structure = (S)=>S.list().title('MD Career').items([
        S.listItem().title('Site Settings').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CogIcon"]).child(S.document().schemaType('siteSettings').documentId('siteSettings') // 👈 Forces a single document
        ),
        S.documentTypeListItem("page").title("Pages"),
        S.documentTypeListItem("faq").title("FAQs")
    ]);
}}),
"[project]/sanity.config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "myTheme": (()=>myTheme),
    "urlFor": (()=>urlFor)
});
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/presentation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$presentation$2f$resolve$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/presentation/resolve.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$dashboard$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/dashboard/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$media$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity-plugin-media/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/structure.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/node/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const props = {
    '--my-white': '#fff',
    '--my-black': '#1a1a1a',
    '--my-blue': '#4285f4',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58'
};
const myTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildLegacyTheme"])({
    /* Base theme colors */ '--black': props['--my-black'],
    '--white': props['--my-white'],
    '--gray': '#666',
    '--gray-base': '#666',
    '--component-bg': props['--my-white'],
    '--component-text-color': props['--my-black'],
    /* Brand */ '--brand-primary': props['--my-blue'],
    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--my-blue'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],
    /* State */ '--state-info-color': props['--my-blue'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],
    /* Navbar */ '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
    '--focus-color': props['--my-blue']
});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"],
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schema"],
    theme: myTheme,
    icon: ()=>'🎓',
    document: {
        newDocumentOptions: (prev, { creationContext })=>{
            if (creationContext.type === 'global') {
                return prev.filter((docType)=>![
                        'siteSettings',
                        'pageSettings'
                    ].includes(docType.templateId));
            }
            return prev;
        }
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structure"]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiVersion"]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presentationTool"])({
            resolve: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$presentation$2f$resolve$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolve"],
            previewUrl: {
                previewMode: {
                    enable: '/api/draft-mode/enable'
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$media$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["media"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$dashboard$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardTool"])({
            widgets: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$dashboard$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanityTutorialsWidget"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$dashboard$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectInfoWidget"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$dashboard$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectUsersWidget"])()
            ]
        })
    ],
    tools: (prev, { currentUser })=>{
        const isAdmin = currentUser?.roles.some((role)=>role.name === 'administrator');
        if (isAdmin) {
            return prev;
        }
        return prev.filter((tool)=>tool.name !== 'vision');
    }
});
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"]
});
const urlFor = (source)=>builder.image(source);
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1796c972._.js.map