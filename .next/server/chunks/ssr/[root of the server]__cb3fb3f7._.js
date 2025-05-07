module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
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
"[project]/src/sanity/schemaTypes/categoryType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "categoryType": (()=>categoryType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
;
const categoryType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TagIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'text'
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/postcategoryType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "postcategoryType": (()=>postcategoryType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
;
const postcategoryType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'postcategory',
    title: 'Post Category',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TagIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'text'
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/postType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "postType": (()=>postType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
;
const postType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentTextIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'author',
            type: 'reference',
            to: {
                type: 'author'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'categories',
            type: 'array',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishedAt',
            type: 'datetime'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            type: 'blockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "relatedPosts",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: {
                        type: "post"
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "seo",
            type: "seo"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "social",
            type: "social"
        })
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare (selection) {
            const { author } = selection;
            return {
                ...selection,
                subtitle: author && `by ${author}`
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/authorType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authorType": (()=>authorType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
;
const authorType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'bio',
            type: 'array',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'block',
                    styles: [
                        {
                            title: 'Normal',
                            value: 'normal'
                        }
                    ],
                    lists: []
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
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
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "seo",
            type: "seo"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "social",
            type: "social"
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
                        })
                    ]
                })
            ]
        })
    ],
    // icon: StarIcon,
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
"[project]/src/components/DoorsOpenInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DoorsOpenInput": (()=>DoorsOpenInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-ssr] (ecmascript)");
;
;
;
function subtractMinutesFromDate(date, minutes) {
    return new Date(new Date(date).getTime() - minutes * 60000);
}
function DoorsOpenInput(props) {
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFormValue"])([
        'date'
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"], {
        space: 3,
        children: [
            props.renderDefault(props),
            typeof props.value === 'number' && date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                size: 1,
                children: [
                    "Doors open",
                    ' ',
                    subtractMinutesFromDate(date, props.value).toLocaleDateString(undefined, {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DoorsOpenInput.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DoorsOpenInput.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/sanity/schemaTypes/eventType.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventType": (()=>eventType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DoorsOpenInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DoorsOpenInput.tsx [app-ssr] (ecmascript)");
;
;
;
;
const eventType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"],
    groups: [
        {
            name: 'details',
            title: 'Details'
        },
        {
            name: 'editorial',
            title: 'Editorial'
        }
    ],
    fieldsets: [
        {
            name: 'dates',
            title: 'Dates',
            options: {
                collapsed: true,
                columns: 2
            }
        }
    ],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishedAt',
            type: 'datetime',
            fieldset: 'dates'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'updatedAt',
            type: 'datetime',
            fieldset: 'dates'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            type: 'string',
            group: 'details',
            validation: (rule)=>rule.min(100).max(200).warning('For consistency, this summary should be between 100-200 characters')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            'options': {
                'source': 'name'
            },
            hidden: ({ document })=>!document?.name,
            validation: (Rule)=>Rule.required().error('Required to generate a page on the website'),
            group: 'editorial',
            readOnly: ({ currentUser })=>{
                const isAdmin = currentUser?.roles.some((role)=>role.name === 'administrator');
                return !isAdmin;
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'format',
            type: 'string',
            title: 'Event format',
            options: {
                list: [
                    'in-person',
                    'virtual'
                ],
                layout: 'radio'
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'eventType',
            type: 'string',
            options: {
                list: [
                    'in-person',
                    'virtual'
                ],
                layout: 'radio'
            },
            hidden: true,
            deprecated: {
                reason: 'Use the "Event format" field instead.'
            },
            readOnly: true,
            group: 'details'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            type: 'datetime',
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'doorsOpen',
            type: 'number',
            validation: (rule)=>rule.required().info('This field is important for...'),
            description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Why is this important?"
                    }, void 0, false, {
                        fileName: "[project]/src/sanity/schemaTypes/eventType.jsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    "The Googlebot is an indexer of..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/sanity/schemaTypes/eventType.jsx",
                lineNumber: 86,
                columnNumber: 17
            }, this),
            initialValue: 60,
            components: {
                input: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DoorsOpenInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoorsOpenInput"]
            }
        }),
        // Replace "venue" in the array of fields:
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'venue',
            type: 'reference',
            to: [
                {
                    type: 'venue'
                }
            ],
            readOnly: ({ value, document })=>!value && document?.eventType === 'virtual',
            validation: (rule)=>rule.custom((value, context)=>{
                    if (value && context?.document?.eventType === 'virtual') {
                        return 'Only in-person events can have a venue';
                    }
                    return true;
                })
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'format'
        },
        prepare ({ title, subtitle }) {
            return {
                title: title,
                subtitle: subtitle,
                media: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"]
            };
        }
    }
});
}}),
"[project]/src/sanity/schemaTypes/artistType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "artistType": (()=>artistType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const artistType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'event',
            type: 'reference',
            to: [
                {
                    type: 'event'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'text',
            title: 'Artist description'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'photo',
            type: 'image',
            title: 'Artist photo',
            options: {
                hotspot: true
            }
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/venueType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "venueType": (()=>venueType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const venueType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'venue',
    title: 'Venue',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'eventType',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            type: 'datetime'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'doorsOpen',
            type: 'number'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'venue',
            type: 'reference',
            to: [
                {
                    type: 'venue'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'headline',
            type: 'reference',
            to: [
                {
                    type: 'artist'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'image',
            type: 'image'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'details',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'tickets',
            type: 'url'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'city',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'country',
            type: 'string'
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'date'
        }
    }
});
}}),
"[project]/src/components/TextAlignComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// TextAlignComponent.tsx
__turbopack_context__.s({
    "TextAlign": (()=>TextAlign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TextAlign = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: props.value ? props.value : 'left',
            width: '100%'
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/components/TextAlignComponent.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
}}),
"[project]/src/sanity/schemaTypes/mdpostType.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mdpostType": (()=>mdpostType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAlignComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAlignComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
const HighlightIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontWeight: 'bold'
        },
        children: " H "
    }, void 0, false, {
        fileName: "[project]/src/sanity/schemaTypes/mdpostType.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
const HighlightDecorator = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            backgroundColor: 'yellow'
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/sanity/schemaTypes/mdpostType.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
const mdpostType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'mdpost',
    title: 'MD Post',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                            {
                                title: 'Code',
                                value: 'code'
                            },
                            {
                                title: 'Highlight',
                                value: 'highlight',
                                icon: HighlightIcon,
                                component: HighlightDecorator
                            },
                            {
                                title: 'Left',
                                value: 'left',
                                component: (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAlignComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAlign"])(props),
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"]
                            },
                            {
                                title: 'Center',
                                value: 'center',
                                component: (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAlignComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAlign"])(props),
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"]
                            },
                            {
                                title: 'Right',
                                value: 'right',
                                component: (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAlignComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAlign"])(props),
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"]
                            }
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            },
                            // text color
                            {
                                name: 'textColor',
                                type: 'object',
                                title: 'Text Color',
                                fields: [
                                    {
                                        name: 'color',
                                        type: 'string',
                                        options: {
                                            list: [
                                                'red',
                                                'green',
                                                'blue'
                                            ]
                                        }
                                    }
                                ]
                            },
                            // background color
                            {
                                name: 'backgroundColor',
                                type: 'object',
                                title: 'Background Color',
                                fields: [
                                    {
                                        name: 'bgcolor',
                                        type: 'string',
                                        options: {
                                            list: [
                                                'red',
                                                'green',
                                                'blue'
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
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
                    ],
                    preview: {
                        select: {
                            image: 'asset',
                            width: 'asset.metadata.dimensions.width',
                            height: 'asset.metadata.dimensions.height'
                        },
                        prepare ({ image, width, height }) {
                            return {
                                title: `Image (${width}x${height})`,
                                media: image
                            };
                        }
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'blockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            'options': {
                'source': 'name'
            },
            hidden: ({ document })=>!document?.name,
            validation: (Rule)=>Rule.required().error('Required to generate a page on the website')
        }),
        {
            name: 'postcategories',
            title: 'Post Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'postcategory'
                        }
                    ]
                }
            ]
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'postType',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                list: [
                    {
                        title: 'Learning Development',
                        value: 'learning-development'
                    },
                    {
                        title: 'Project Learning',
                        value: 'project-learning'
                    },
                    {
                        title: 'Project Closure Meeting',
                        value: 'project-closure-meeting'
                    },
                    {
                        title: 'Technical Learning',
                        value: 'technical-learning'
                    },
                    {
                        title: 'WordPress VIP',
                        value: 'wordpress-VIP'
                    },
                    {
                        title: 'Uncategorized',
                        value: 'uncategorized'
                    }
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            type: 'datetime',
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'createdBy',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text'
                },
                {
                    name: 'width',
                    type: 'number',
                    title: 'Image Width'
                },
                {
                    name: 'height',
                    type: 'number',
                    title: 'Image Height'
                }
            ]
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/pageSettings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'pageSettings',
    title: 'Page Settings',
    type: 'document',
    // __experimental_actions: ['update', 'publish'], // Prevents creation and deletion
    fields: [
        {
            name: "mdheading",
            type: "string",
            title: "MD Post Page Heading",
            description: "Main heading for the MD post listing page"
        },
        {
            name: "mdsubheading",
            type: "string",
            title: "MD Post Subheading",
            description: "Secondary heading for the MD post listingpage"
        }
    ]
};
}}),
"[project]/src/sanity/schemaTypes/seoType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "seoType": (()=>seoType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const seoType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "seo",
    title: "SEO",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            description: "If provided, this will override the title field",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "description",
            type: "text"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "noIndex",
            type: "boolean"
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/redirectType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "redirectType": (()=>redirectType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
function isValidInternalPath(value) {
    if (!value) {
        return "Value is required";
    } else if (!value.startsWith("/")) {
        return "Internal paths must start with /";
    } else if (/[^a-zA-Z0-9\-_/:]/.test(value)) {
        return "Source path contains invalid characters";
    } else if (/:[^/]+:/.test(value)) {
        return "Parameters can only contain one : directly after /";
    } else if (value.split("/").some((part)=>part.includes(":") && !part.startsWith(":"))) {
        return "The : character can only appear directly after /";
    }
    return true;
}
function isValidUrl(value) {
    try {
        new URL(value || "");
        return true;
    } catch  {
        return "Invalid URL";
    }
}
const redirectType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "redirect",
    title: "Redirect",
    type: "document",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkIcon"],
    validation: (Rule)=>Rule.custom((doc)=>{
            if (doc && doc.source === doc.destination) {
                return [
                    "source",
                    "destination"
                ].map((field)=>({
                        message: "Source and destination cannot be the same",
                        path: [
                            field
                        ]
                    }));
            }
            return true;
        }),
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "source",
            type: "string",
            validation: (Rule)=>Rule.required().custom(isValidInternalPath)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "destination",
            type: "string",
            validation: (Rule)=>Rule.required().custom((value)=>{
                    const urlValidation = isValidUrl(value);
                    const pathValidation = isValidInternalPath(value);
                    if (urlValidation === true || pathValidation === true) {
                        return true;
                    }
                    return typeof urlValidation === "boolean" ? urlValidation : pathValidation;
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "permanent",
            description: "Should the redirect be permanent (301) or temporary (302)",
            type: "boolean",
            initialValue: true
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "isEnabled",
            description: "Toggle this redirect on or off",
            type: "boolean",
            initialValue: true
        })
    ]
});
}}),
"[project]/src/sanity/schemaTypes/socialType.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "socialType": (()=>socialType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const socialType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "social",
    title: "Social",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "linkedIn",
            title: "LinkedIn",
            type: "text",
            rows: 3
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "x",
            description: "Formerly known as Twitter",
            type: "text",
            rows: 2
        })
    ]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$categoryType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/categoryType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$postcategoryType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/postcategoryType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$postType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/postType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$authorType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/authorType.ts [app-ssr] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$eventType$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/eventType.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$artistType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/artistType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$venueType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/venueType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$mdpostType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/mdpostType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageSettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/pageSettings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$seoType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/seoType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$redirectType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/redirectType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$socialType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/socialType.ts [app-ssr] (ecmascript)");
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
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blockContentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockContentType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$categoryType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$postType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$authorType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authorType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$postcategoryType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postcategoryType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$seoType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seoType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$redirectType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirectType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$socialType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$eventType$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$artistType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["artistType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$venueType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["venueType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$mdpostType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdpostType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pageSettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
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
const structure = (S)=>S.list().title('Blog').items([
        S.documentTypeListItem('post').title('Posts'),
        S.documentTypeListItem('postcategory').title('Post Categories'),
        S.documentTypeListItem('author').title('Authors'),
        S.divider(),
        S.documentTypeListItem('mdpost').title('MD Posts').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"]),
        S.documentTypeListItem('category').title('Categories').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"]),
        S.divider(),
        S.listItem().title('Site Settings').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CogIcon"]).child(S.document().schemaType('siteSettings').documentId('siteSettings') // 👈 Forces a single document
        ),
        S.listItem().title('MD Post Settings').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CogIcon"]).child(S.document().schemaType('pageSettings').documentId('pageSettings') // 👈 Forces a single document
        ),
        S.divider(),
        S.documentTypeListItem("page").title("Pages"),
        S.documentTypeListItem("faq").title("FAQs"),
        S.divider(),
        ...S.documentTypeListItems().filter((item)=>item.getId() && ![
                "pageSettings",
                "category",
                "siteSettings",
                "page",
                "faq",
                "mdpost",
                'post',
                'postcategory',
                'author'
            ].includes(item.getId()))
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/assist/dist/index.mjs [app-ssr] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assist"])(),
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__cb3fb3f7._.js.map