(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_18cb3d64._.js", {

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
"[project]/src/sanity/lib/image.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "urlFor": (()=>urlFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-client] (ecmascript)");
;
;
// https://www.sanity.io/docs/image-url
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"]
});
const urlFor = (source)=>{
    return builder.image(source);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hero": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
;
;
;
;
function Hero({ title, text, image }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "careers-banner-section-main",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "careers-banner-images galery",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "careers-banner-images-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col justify-center items-center gap-8 h-full z-20",
                        children: [
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-4xl lg:text-6xl font-semibold text-white text-pretty max-w-3xl",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/Hero.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose-lg lg:prose-xl prose-invert flex items-center",
                                children: text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                    value: text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/Hero.tsx",
                                    lineNumber: 23,
                                    columnNumber: 23
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/Hero.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/Hero.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "",
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(image).url(),
                        width: 1920,
                        height: 397,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/Hero.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/Hero.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/Hero.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/Hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/Features.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Features": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
;
;
;
function Features({ features, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wp-block-multidots-multipurpose-block is-block-center mdhome-why-multidots mdinc-section-bottom-margin mdcareer-perks",
        children: [
            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "wp-block-heading has-text-align-center has-text-color",
                id: "mdcareer-perks-and-benefits",
                style: {
                    color: "#000000"
                },
                children: [
                    "                            ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/Features.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-multidots-multipurpose-block is-block-center mdhome-why-multidots-boxes",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wp-block-columns mdhome-why-multidots-columns ",
                    children: Array.isArray(features) ? features.map((feature, index)=>{
                        const isLastInColumn = index === Math.ceil(features.length / 2) - 1 || index === features.length - 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wp-block-column mdhome-why-multidots-column is-layout-flow wp-block-column-is-layout-flow",
                            style: {
                                flexBasis: "50%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-row gap-12 p-4 ${!isLastInColumn ? 'border-b border-gray-200' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-15 h-15 absolute rounded-full z-0 translate-x-2 left-2",
                                                style: {
                                                    backgroundColor: feature.backgroundColor?.hex || '#ffffff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/Features.tsx",
                                                lineNumber: 39,
                                                columnNumber: 45
                                            }, this),
                                            feature.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(feature.icon).width(60).height(60).url(),
                                                width: 60,
                                                height: 60,
                                                alt: feature.title,
                                                className: "object-contain relative"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/Features.tsx",
                                                lineNumber: 47,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blocks/Features.tsx",
                                        lineNumber: 38,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-slate-800",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/Features.tsx",
                                                lineNumber: 58,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-600",
                                                children: feature.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/Features.tsx",
                                                lineNumber: 59,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blocks/Features.tsx",
                                        lineNumber: 57,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blocks/Features.tsx",
                                lineNumber: 35,
                                columnNumber: 37
                            }, this)
                        }, feature._key, false, {
                            fileName: "[project]/src/components/blocks/Features.tsx",
                            lineNumber: 30,
                            columnNumber: 33
                        }, this);
                    }) : null
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/Features.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/Features.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blocks/Features.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/SplitImage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SplitImage": (()=>SplitImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SplitImage({ title, image, orientation, description, authorimage, authorname, authordesignation, video }) {
    _s();
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoUrl = video?.url || null;
    console.log(video);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-content-with-video mdinc-section-bottom-margin",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-columns mdcareer-content-with-video-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-column mdcareer-content-with-video-info is-layout-flow wp-block-column-is-layout-flow",
                        style: {
                            flexBasis: "48.82%"
                        },
                        children: [
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wp-block-heading",
                                id: "h-our-purpose-passion",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                lineNumber: 31,
                                columnNumber: 29
                            }, this) : null,
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                value: description,
                                className: "mdhome-gallery-details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                lineNumber: 36,
                                columnNumber: 40
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-columns mdcarer-author-details is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wp-block-column mdcarer-author-img anil-sir-img is-layout-flow wp-block-column-is-layout-flow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            className: "wp-block-image size-large is-resized",
                                            children: authorimage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(authorimage).url(),
                                                width: authorimage.width || 80,
                                                height: authorimage.height || 80,
                                                alt: "",
                                                loading: "lazy",
                                                decoding: "async",
                                                className: "wp-image-39940 perfmatters-lazy loaded",
                                                style: {
                                                    width: "80px",
                                                    height: "80px"
                                                },
                                                sizes: "auto, (max-width: 160px) 100vw, 160px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                lineNumber: 45,
                                                columnNumber: 41
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wp-block-column mdcarer-author-content is-layout-flow wp-block-column-is-layout-flow",
                                        children: [
                                            authorname ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "wp-block-heading",
                                                id: "h-anil-gupta",
                                                children: authorname
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                lineNumber: 63,
                                                columnNumber: 37
                                            }, this) : null,
                                            authordesignation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: authordesignation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                lineNumber: 69,
                                                columnNumber: 37
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wp-block-column mdcarer-author-video is-layout-flow wp-block-column-is-layout-flow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mdinc-life-at-md-video",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wp-block-image",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "mdinc-testimonial-video",
                                                        href: videoUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mdinc-video-play-button-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mdinc-video-play-button-box-inner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-column mdcareer-content-with-video-banner our-purpose-right is-layout-flow wp-block-column-is-layout-flow",
                        style: {
                            flexBasis: "47.7%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "wp-block-image aligncenter size-full is-resized animated-md-logo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "wp-block-image size-full",
                                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(image).url(),
                                    width: image.width || 438,
                                    height: image.height || 497,
                                    loading: "lazy",
                                    decoding: "async",
                                    alt: "Core Values",
                                    className: "wp-image-45951 perfmatters-lazy loaded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                    lineNumber: 111,
                                    columnNumber: 33
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/SplitImage.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/SplitImage.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/SplitImage.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(SplitImage, "7cBAtA6anpsg4lzjm9TU42tmeSM=");
_c = SplitImage;
var _c;
__turbopack_context__.k.register(_c, "SplitImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/Jobs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Jobs": (()=>Jobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
;
;
function Jobs({ _key, title, text, jobs, btntext, btnurl }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container w-[1200] mx-auto flex flex-col gap-8 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-current-opening mdinc-width-970 mdinc-section-bottom-margin",
            children: [
                "   ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-block-outer open-position",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-block-outer open-position",
                            children: [
                                title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, this) : null,
                                Array.isArray(text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                    value: text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this) : text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "details",
                                    children: text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "open-position-accordion",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "position-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                            lineNumber: 26,
                                            columnNumber: 25
                                        }, this),
                                        jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "positions-lists",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "position-details-main",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "group [&[open]]:border-orange-500 transition-colors duration-100 px-4 border-b-2 py-4 ",
                                                            name: _key,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "text-xl font-semibold text-slate-800 list-none cursor-pointer py-4 flex items-center justify-between",
                                                                    children: [
                                                                        job.title,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "transform origin-center transition-transform duration-200",
                                                                            children: job.location ? ` ${job.location}` : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                            lineNumber: 42,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 40,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pb-4 flex flex-row gap-6",
                                                                    children: [
                                                                        job.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                                                            value: job.body
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                            lineNumber: 47,
                                                                            columnNumber: 57
                                                                        }, this) : null,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: `/job/${job.slug.current}`,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "text-black-500 underline decoration-2 decoration-orange-500 basis-[10%]",
                                                                            children: "Learn more"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                            lineNumber: 48,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 46,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, job._id, true, {
                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "position-details-header",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "position-name",
                                                                    children: [
                                                                        "  ",
                                                                        job.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "job-location",
                                                                    children: [
                                                                        " ",
                                                                        job.location ? ` ${job.location}` : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 58,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "position-details-body",
                                                            children: [
                                                                job.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                                                    value: job.body,
                                                                    className: "position-detail-description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 53
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "position-apply-btn",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `/job/${job.slug.current}`,
                                                                        children: "Learn more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                        lineNumber: 64,
                                                                        columnNumber: 75
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 33
                                                }, this)
                                            }, _key, false, {
                                                fileName: "[project]/src/components/blocks/Jobs.tsx",
                                                lineNumber: 33,
                                                columnNumber: 29
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                    lineNumber: 25,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                            lineNumber: 13,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wp-block-multidots-multipurpose-block is-block-center mdhome-gallery-info",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wp-block-button aligncenter",
                                    children: btntext && btnurl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: btnurl,
                                        className: "wp-block-button__link wp-element-button",
                                        children: btntext
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/Jobs.tsx",
                                        lineNumber: 78,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/Jobs.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/Jobs.tsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/Jobs.tsx",
                    lineNumber: 12,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/Jobs.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/Jobs.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = Jobs;
var _c;
__turbopack_context__.k.register(_c, "Jobs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/titleDescription.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TitleDescription": (()=>TitleDescription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
;
;
function TitleDescription({ title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-about-md mdinc-width-970",
        children: [
            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "wp-block-heading has-text-align-center",
                id: "h-about-multidots",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/titleDescription.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this) : null,
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                value: description,
                components: {
                    block: {
                        left: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-left",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/titleDescription.tsx",
                                lineNumber: 22,
                                columnNumber: 49
                            }, void 0),
                        center: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/titleDescription.tsx",
                                lineNumber: 23,
                                columnNumber: 51
                            }, void 0),
                        right: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-right",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/titleDescription.tsx",
                                lineNumber: 24,
                                columnNumber: 50
                            }, void 0)
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/titleDescription.tsx",
                lineNumber: 17,
                columnNumber: 28
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blocks/titleDescription.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = TitleDescription;
var _c;
__turbopack_context__.k.register(_c, "TitleDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/LogoList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LogoList": (()=>LogoList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
function LogoList({ title, text, logos, itemsPerRow, backgroundColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`grid-cols-${itemsPerRow}`)
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/LogoList.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-about-featured mdinc-section-bottom-margin",
                children: [
                    title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl mx-auto md:text-2xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: Array.isArray(text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                            value: text,
                            components: {
                                block: {
                                    left: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-left",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                                            lineNumber: 49,
                                            columnNumber: 57
                                        }, void 0),
                                    center: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                                            lineNumber: 50,
                                            columnNumber: 59
                                        }, void 0),
                                    right: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-right",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                                            lineNumber: 51,
                                            columnNumber: 58
                                        }, void 0)
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this) : text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-columns are-vertically-aligned-center mdcareer-about-featured-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                        children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-column is-vertically-aligned-center mdcareer-about-featured-column is-layout-flow wp-block-column-is-layout-flow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "wp-block-image size-large is-resized",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(logo).auto('format').url(),
                                        alt: logo.alt || 'Logo',
                                        width: logo.width || 162,
                                        height: logo.height || 46,
                                        className: " perfmatters-lazy loaded ",
                                        loading: "lazy",
                                        decoding: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/LogoList.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this)
                            }, logo._key, false, {
                                fileName: "[project]/src/components/blocks/LogoList.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/LogoList.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-our-client mdinc-section-bottom-margin",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "wp-block-heading has-text-align-center h2-below-cnt",
                        id: "h-our-clients",
                        children: "Our Clients"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "has-text-align-center after-h2-cnt",
                        children: "We are proud to help the big brands and large enterprises with their complex engineering, marketing, and business performance problems. Solving interesting, challenging, and rewarding problems energize us. If working on complex and big problems fire Dopamine in your brain too, then we could be a good match."
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "client_logo-block_0dd36afc2b5047cf6e75f193aeccffea",
                        className: "mdinc-client-logo-grid large_device",
                        children: [
                            {
                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/Ask-group-media.svg?w=1024",
                                alt: "",
                                width: 69,
                                height: 50
                            },
                            {
                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/tropicana-brand-group-1.svg?w=1024",
                                alt: "",
                                width: 162,
                                height: 46
                            },
                            {
                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/home-accenture-logo.svg?w=1024",
                                alt: "",
                                width: 136,
                                height: 35
                            },
                            {
                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2023/12/SiriusXM.svg?w=1024",
                                alt: "SiriusXM Logo",
                                style: {
                                    objectFit: "cover"
                                }
                            },
                            {
                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2023/12/Foursquare.svg?w=1024",
                                alt: ""
                            }
                        ].map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdinc-logo-outer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mdinc-logo-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                        className: "wp-block-image size-large is-resized",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            loading: "lazy",
                                            decoding: "async",
                                            src: logo.src,
                                            alt: logo.alt,
                                            width: logo.width,
                                            height: logo.height,
                                            style: logo.style
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/LogoList.tsx",
                                            lineNumber: 125,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/LogoList.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/blocks/LogoList.tsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/LogoList.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/LogoList.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = LogoList;
var _c;
__turbopack_context__.k.register(_c, "LogoList");
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
"[project]/src/components/blocks/TestimonialSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialSlider": (()=>TestimonialSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)"); // assuming you have a `urlFor` utility
;
;
;
;
;
;
function TestimonialSlider({ title, testimonials, reviewlogos, reviews }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-multidots-multipurpose-block is-block-center mdinc-rating-main mdinc-section-bottom-margin mdinc-width-970",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "wp-block-heading has-text-align-center md-career-we-are-loved-heading",
                        id: "h-we-are-so-loved",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-multidots-multipurpose-block is-block-center mdinc-rating",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wp-block-columns has-4-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-column is-layout-flow wp-block-column-is-layout-flow",
                                style: {
                                    flexBasis: "20%"
                                },
                                children: reviews?.map((review)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clutch-widget md-facebook-rating-main md-glassdoor-rating-main",
                                        children: review && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(review).width(220).height(85).url(),
                                            alt: review.alt || 'Logo',
                                            width: 220,
                                            height: 85,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                            lineNumber: 49,
                                            columnNumber: 45
                                        }, this)
                                    }, review._key, false, {
                                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                        lineNumber: 46,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-our-people-slider mdinc-width-970 mdinc-section-bottom-margin",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mdc-peple-say-blk-outer addSlider slick-initialized slick-slider",
                    role: "toolbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...settings,
                        children: testimonials.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mdc-peple-say-blk slick-slide slick-cloned",
                                    "data-slick-index": "-1",
                                    "aria-hidden": "true",
                                    style: {
                                        width: "970px"
                                    },
                                    tabIndex: "-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mdc-peple-say-blk-text",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: t.quote
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                lineNumber: 80,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mdc-peple-say-bottom",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdc-peple-say-author-logo",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mdc-peple-say-detail-testimonial-avtar",
                                                        children: t.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(t.image).width(60).height(60).url(),
                                                            alt: t.author,
                                                            width: 60,
                                                            height: 60,
                                                            loading: "lazy",
                                                            decoding: "async",
                                                            className: "perfmatters-lazy",
                                                            "data-src": "https://careers.multidots.com/wp-content/uploads/sites/2/2021/07/Harsh-1.jpg?quality=90?w=400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mdc-peple-say-detail-author",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mdc-peple-say-detail-testimonial-founder",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    children: t.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mdc-peple-say-detail-testimonial-designation",
                                                                children: t.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                                lineNumber: 83,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                            lineNumber: 82,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, t._key, true, {
                                    fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/TestimonialSlider.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = TestimonialSlider;
var _c;
__turbopack_context__.k.register(_c, "TestimonialSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/tabSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabSection": (()=>TabSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TabSection({ title, text, tabs }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 w-[1200] mx-auto container flex flex-col gap-18 ",
        children: [
            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl mx-auto md:text-2xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/tabSection.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8",
                children: Array.isArray(text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                    value: text,
                    components: {
                        block: {
                            left: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-left",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/tabSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 53
                                }, void 0),
                            center: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/tabSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 55
                                }, void 0),
                            right: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-right",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/tabSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 54
                                }, void 0)
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/tabSection.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, this) : text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/tabSection.tsx",
                    lineNumber: 38,
                    columnNumber: 21
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/tabSection.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    tabs[activeIndex]?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(tabs[activeIndex].image).width(600).height(400).url(),
                            alt: tabs[activeIndex].title,
                            width: 970,
                            height: 430,
                            className: "rounded-lg shadow-lg object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/tabSection.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/tabSection.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-x-28 mb-6  border-gray-300 py-20",
                        children: tabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveIndex(index),
                                className: ` py-4 px-4 font-medium border-b-2 ${activeIndex === index ? ' border-orange-500' : 'text-black-500 border-gray-300'}`,
                                children: tab.title
                            }, tab._key, false, {
                                fileName: "[project]/src/components/blocks/tabSection.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/tabSection.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/tabSection.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blocks/tabSection.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(TabSection, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c = TabSection;
var _c;
__turbopack_context__.k.register(_c, "TabSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/imageTextSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageTextSection": (()=>ImageTextSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
function ImageTextSection({ title, description, mainImage, backgroundImage, imagePosition = 'right' }) {
    const isImageLeft = imagePosition === 'left';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wp-block-multidots-multipurpose-block is-block-center mdcareer-great-place-to-work mdinc-section-bottom-margin",
            style: {
                backgroundImage: backgroundImage ? `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(backgroundImage).url()})` : 'none'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wp-block-columns mdcareer-great-place-to-work-inner is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-column mdcareer-great-place-to-work-content is-layout-flow wp-block-column-is-layout-flow",
                        style: {
                            flexBasis: "66.66%"
                        },
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "wp-block-heading",
                                id: "h-we-are-proud-to-be-certified-as-a-great-place-to-work",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                lineNumber: 33,
                                columnNumber: 35
                            }, this),
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                value: description,
                                components: {
                                    block: {
                                        left: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-left",
                                                children: children
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                                lineNumber: 42,
                                                columnNumber: 61
                                            }, void 0),
                                        center: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center",
                                                children: children
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                                lineNumber: 43,
                                                columnNumber: 63
                                            }, void 0),
                                        right: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-right",
                                                children: children
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                                lineNumber: 44,
                                                columnNumber: 62
                                            }, void 0)
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                lineNumber: 37,
                                columnNumber: 40
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-column mdcareer-great-place-to-work-image is-layout-flow wp-block-column-is-layout-flow",
                        style: {
                            flexBasis: "33.33%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "wp-block-image size-full",
                            children: !isImageLeft && mainImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(mainImage).width(100).url(),
                                    alt: "Main",
                                    width: 100,
                                    height: 100,
                                    decoding: "async",
                                    className: "wp-image-58567 perfmatters-lazy loaded",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                                lineNumber: 57,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/imageTextSection.tsx",
                lineNumber: 27,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/imageTextSection.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_c = ImageTextSection;
var _c;
__turbopack_context__.k.register(_c, "ImageTextSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/blocks/CardSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CardSection": (()=>CardSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-client] (ecmascript)");
;
;
;
function CardSection({ title, icon, btntext, btnurl, title2, text, btntext2, icon2, btnurl2, bgimage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wp-block-multidots-multipurpose-block is-block-center mdcaeer-councelling-section-main mdinc-section-bottom-margin two-columns md-career-home-post-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wp-block-column career-councelling-section-details is-layout-flow wp-block-column-is-layout-flow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "wp-block-image aligncenter size-full is-resized",
                            children: icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        decoding: "async",
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(icon).url(),
                                        alt: "",
                                        className: "wp-image-57014 perfmatters-lazy loaded",
                                        width: 412,
                                        height: 342,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/CardSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            decoding: "async",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(icon).url(),
                                            alt: "",
                                            className: "wp-image-57014",
                                            width: 412,
                                            height: 342
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                                            lineNumber: 28,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/CardSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "wp-block-heading has-text-align-center councelling-section-details-heading",
                            id: "h-counseling-free-career-guidance",
                            children: title ? title : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-a89b3969 wp-block-buttons-is-layout-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-button councelling-section-details-btn",
                                children: btntext && btnurl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: btnurl,
                                    className: "wp-block-button__link wp-element-button",
                                    children: btntext
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/CardSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/CardSection.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wp-block-column soft-skills-section-details is-layout-flow wp-block-column-is-layout-flow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "wp-block-image aligncenter size-full is-resized",
                                children: icon2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            loading: "lazy",
                                            decoding: "async",
                                            width: "519",
                                            height: "519",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(icon2).url(),
                                            alt: "",
                                            className: "wp-image-58038 perfmatters-lazy loaded",
                                            style: {
                                                objectFit: "contain",
                                                width: "270px",
                                                height: "270px"
                                            },
                                            sizes: "auto, (max-width: 519px) 100vw, 519px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                loading: "lazy",
                                                decoding: "async",
                                                width: "519",
                                                height: "519",
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(icon2).url(),
                                                alt: "",
                                                className: "wp-image-58038",
                                                style: {
                                                    objectFit: "contain",
                                                    width: "270px",
                                                    height: "270px"
                                                },
                                                sizes: "auto, (max-width: 519px) 100vw, 519px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/CardSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true) : null
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            title2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "wp-block-heading has-text-align-center has-white-color has-text-color has-link-color wp-elements-5eb9caf019c69d11b89ff374f754513f",
                                id: "h-10-soft-skills-to-accelerate-your-career",
                                style: {
                                    fontSize: "clamp(18.959px, 1.185rem + ((1vw - 3.2px) * 1.255), 30px)"
                                },
                                children: title2
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                lineNumber: 91,
                                columnNumber: 29
                            }, this) : null,
                            text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "has-text-align-center has-white-color has-text-color has-link-color wp-elements-a507b566e60a1ecca4ab117e0802f685",
                                style: {
                                    fontSize: "14px"
                                },
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-a89b3969 wp-block-buttons-is-layout-flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wp-block-button councelling-section-details-btn",
                                    children: btntext2 && btnurl2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: btnurl2,
                                        className: "wp-block-button__link wp-element-button",
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        children: btntext2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/CardSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/CardSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/CardSection.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/CardSection.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/CardSection.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/CardSection.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/CardSection.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = CardSection;
var _c;
__turbopack_context__.k.register(_c, "CardSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageBuilder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageBuilder": (()=>PageBuilder),
    "createDataAttributeConfig": (()=>createDataAttributeConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/Features.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$SplitImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/SplitImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Jobs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/Jobs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$titleDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/titleDescription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$LogoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/LogoList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/TestimonialSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$tabSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/tabSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$imageTextSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/imageTextSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$CardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blocks/CardSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const { projectId, dataset, stega } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].config();
const createDataAttributeConfig = {
    projectId,
    dataset,
    baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : ""
};
function PageBuilder({ content, documentId, documentType }) {
    _s();
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(content, {
        "PageBuilder.useOptimistic[blocks]": (state, action)=>{
            if (action.id === documentId) {
                return action?.document?.content?.map({
                    "PageBuilder.useOptimistic[blocks]": (block)=>state?.find({
                            "PageBuilder.useOptimistic[blocks]": (s)=>s._key === block?._key
                        }["PageBuilder.useOptimistic[blocks]"]) || block
                }["PageBuilder.useOptimistic[blocks]"]);
            }
            return state;
        }
    }["PageBuilder.useOptimistic[blocks]"]);
    if (!Array.isArray(blocks)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-sanity": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDataAttribute"])({
            ...createDataAttributeConfig,
            id: documentId,
            type: documentType,
            path: "content"
        }).toString(),
        children: blocks.map((block)=>{
            const DragHandle = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sanity": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDataAttribute"])({
                        ...createDataAttributeConfig,
                        id: documentId,
                        type: documentType,
                        path: `content[_key=="${block._key}"]`
                    }).toString(),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/PageBuilder.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                }, this);
            switch(block._type){
                case "hero":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 79,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 78,
                        columnNumber: 29
                    }, this);
                case "features":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Features"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 85,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 84,
                        columnNumber: 29
                    }, this);
                case "splitImage":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$SplitImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitImage"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 91,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 90,
                        columnNumber: 29
                    }, this);
                case "jobs":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$Jobs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Jobs"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 97,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 96,
                        columnNumber: 29
                    }, this);
                case "titleDescription":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$titleDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleDescription"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 103,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 102,
                        columnNumber: 29
                    }, this);
                case "logoList":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$LogoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoList"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 109,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 108,
                        columnNumber: 29
                    }, this);
                case "clientList":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientList, {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 115,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 114,
                        columnNumber: 29
                    }, this);
                case "testimonialSlider":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialSlider"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 122,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 121,
                        columnNumber: 29
                    }, this);
                case "tabSection":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$tabSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabSection"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 128,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 127,
                        columnNumber: 29
                    }, this);
                case "imageTextSection":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$imageTextSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageTextSection"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 134,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 133,
                        columnNumber: 29
                    }, this);
                case "cardSection":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragHandle, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$CardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSection"], {
                            ...block
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageBuilder.tsx",
                            lineNumber: 140,
                            columnNumber: 33
                        }, this)
                    }, block._key, false, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 139,
                        columnNumber: 29
                    }, this);
                default:
                    // This is a fallback for when we don't have a block type
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Block not found: ",
                            block._type
                        ]
                    }, block._key, true, {
                        fileName: "[project]/src/components/PageBuilder.tsx",
                        lineNumber: 145,
                        columnNumber: 32
                    }, this);
            }
        })
    }, void 0, false, {
        fileName: "[project]/src/components/PageBuilder.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(PageBuilder, "Y3ZzdPscLJYjdawkzQggAOx8R6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"]
    ];
});
_c = PageBuilder;
var _c;
__turbopack_context__.k.register(_c, "PageBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_18cb3d64._.js.map