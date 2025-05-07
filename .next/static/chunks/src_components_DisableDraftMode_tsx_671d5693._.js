(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_DisableDraftMode_tsx_671d5693._.js", {

"[project]/src/components/DisableDraftMode.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DisableDraftMode": (()=>DisableDraftMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/next-loader/dist/hooks.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DisableDraftMode() {
    _s();
    const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraftModeEnvironment"])();
    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "live" && environment !== "unknown") {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "/api/draft-mode/disable",
        className: "fixed bottom-4 right-4 bg-gray-50 px-4 py-2",
        children: "Disable Draft Mode"
    }, void 0, false, {
        fileName: "[project]/src/components/DisableDraftMode.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(DisableDraftMode, "dZzzRBsD08c4iYl0t77cXFMw+24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraftModeEnvironment"]
    ];
});
_c = DisableDraftMode;
var _c;
__turbopack_context__.k.register(_c, "DisableDraftMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_DisableDraftMode_tsx_671d5693._.js.map