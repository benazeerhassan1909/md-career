(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9501238f._.js", {

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
"[project]/node_modules/next-sanity/dist/visual-editing/client-component.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VisualEditingLazyClientComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const VisualEditingClientComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.r("[project]/node_modules/next-sanity/dist/_chunks-es/VisualEditing.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i));
function VisualEditingLazyClientComponent(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VisualEditingClientComponent, {
            ...props
        })
    });
}
;
 //# sourceMappingURL=client-component.js.map
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeIntoResult": (()=>encodeIntoResult),
    "stegaEncodeSourceMap": (()=>stegaEncodeSourceMap),
    "stegaEncodeSourceMap$1": (()=>stegaEncodeSourceMap$1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/_chunks-es/stegaClean.js [app-client] (ecmascript)");
;
const reKeySegment = /_key\s*==\s*['"](.*)['"]/;
function isKeySegment(segment) {
    return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function toString(path) {
    if (!Array.isArray(path)) throw new Error("Path is not an array");
    return path.reduce((target, segment, i)=>{
        const segmentType = typeof segment;
        if (segmentType === "number") return `${target}[${segment}]`;
        if (segmentType === "string") return `${target}${i === 0 ? "" : "."}${segment}`;
        if (isKeySegment(segment) && segment._key) return `${target}[_key=="${segment._key}"]`;
        if (Array.isArray(segment)) {
            const [from, to] = segment;
            return `${target}[${from}:${to}]`;
        }
        throw new Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
    }, "");
}
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
}, UNESCAPE = {
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function jsonPath(path) {
    return `$${path.map((segment)=>typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match)=>ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key !== "" ? `[?(@._key=='${segment._key.replace(/['\\]/g, (match)=>ESCAPE[match])}')]` : `[${segment._index}]`).join("")}`;
}
function parseJsonPath(path) {
    const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
    let match;
    for(; (match = parseRe.exec(path)) !== null;){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>UNESCAPE[m]);
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
        if (match[3] !== void 0) {
            const _key = match[3].replace(/\\(\\')/g, (m)=>UNESCAPE[m]);
            parsed.push({
                _key,
                _index: -1
            });
            continue;
        }
    }
    return parsed;
}
function jsonPathToStudioPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._key !== "") return {
            _key: segment._key
        };
        if (segment._index !== -1) return segment._index;
        throw new Error(`invalid segment:${JSON.stringify(segment)}`);
    });
}
function jsonPathToMappingPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._index !== -1) return segment._index;
        throw new Error(`invalid segment:${JSON.stringify(segment)}`);
    });
}
function resolveMapping(resultPath, csm) {
    if (!csm?.mappings) return;
    const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
    if (csm.mappings[resultMappingPath] !== void 0) return {
        mapping: csm.mappings[resultMappingPath],
        matchedPath: resultMappingPath,
        pathSuffix: ""
    };
    const mappings = Object.entries(csm.mappings).filter(([key])=>resultMappingPath.startsWith(key)).sort(([key1], [key2])=>key2.length - key1.length);
    if (mappings.length == 0) return;
    const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
    return {
        mapping,
        matchedPath,
        pathSuffix
    };
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function isRecord(value) {
    return typeof value == "object" && value !== null;
}
function walkMap(value, mappingFn, path = []) {
    if (isArray(value)) return value.map((v, idx)=>{
        if (isRecord(v)) {
            const _key = v._key;
            if (typeof _key == "string") return walkMap(v, mappingFn, path.concat({
                _key,
                _index: idx
            }));
        }
        return walkMap(v, mappingFn, path.concat(idx));
    });
    if (isRecord(value)) {
        if (value._type === "block" || value._type === "span") {
            const result = {
                ...value
            };
            return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
        }
        return Object.fromEntries(Object.entries(value).map(([k, v])=>[
                k,
                walkMap(v, mappingFn, path.concat(k))
            ]));
    }
    return mappingFn(value, path);
}
function encodeIntoResult(result, csm, encoder) {
    return walkMap(result, (value, path)=>{
        if (typeof value != "string") return value;
        const resolveMappingResult = resolveMapping(path, csm);
        if (!resolveMappingResult) return value;
        const { mapping, matchedPath } = resolveMappingResult;
        if (mapping.type !== "value" || mapping.source.type !== "documentValue") return value;
        const sourceDocument = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path], matchPathSegments = parseJsonPath(matchedPath), fullSourceSegments = parseJsonPath(sourcePath).concat(path.slice(matchPathSegments.length));
        return encoder({
            sourcePath: fullSourceSegments,
            sourceDocument,
            resultPath: path,
            value
        });
    });
}
const DRAFTS_FOLDER = "drafts", VERSION_FOLDER = "versions", PATH_SEPARATOR = ".", DRAFTS_PREFIX = `${DRAFTS_FOLDER}${PATH_SEPARATOR}`, VERSION_PREFIX = `${VERSION_FOLDER}${PATH_SEPARATOR}`;
function isDraftId(id) {
    return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
    return id.startsWith(VERSION_PREFIX);
}
function isPublishedId(id) {
    return !isDraftId(id) && !isVersionId(id);
}
function getVersionFromId(id) {
    if (!isVersionId(id)) return;
    const [_versionPrefix, versionId, ..._publishedId] = id.split(PATH_SEPARATOR);
    return versionId;
}
function getPublishedId(id) {
    return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
function createEditUrl(options) {
    const { baseUrl, workspace: _workspace = "default", tool: _tool = "default", id: _id, type, path, projectId, dataset } = options;
    if (!baseUrl) throw new Error("baseUrl is required");
    if (!path) throw new Error("path is required");
    if (!_id) throw new Error("id is required");
    if (baseUrl !== "/" && baseUrl.endsWith("/")) throw new Error("baseUrl must not end with a slash");
    const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
        baseUrl,
        id,
        type,
        path: stringifiedPath
    });
    if (workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), isPublishedId(_id)) searchParams.set("perspective", "published");
    else if (isVersionId(_id)) {
        const versionId = getVersionFromId(_id);
        searchParams.set("perspective", versionId);
    }
    const segments = [
        baseUrl === "/" ? "" : baseUrl
    ];
    workspace && segments.push(workspace);
    const routerParams = [
        "mode=presentation",
        `id=${id}`,
        `type=${type}`,
        `path=${encodeURIComponent(stringifiedPath)}`
    ];
    return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
}
function resolveStudioBaseRoute(studioUrl) {
    let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
    return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? {
        baseUrl
    } : {
        ...studioUrl,
        baseUrl
    };
}
const filterDefault = ({ sourcePath, resultPath, value })=>{
    if (isValidDate(value) || isValidURL(value)) return !1;
    const endPath = sourcePath.at(-1);
    return !(sourcePath.at(-2) === "slug" && endPath === "current" || typeof endPath == "string" && (endPath.startsWith("_") || endPath.endsWith("Id")) || sourcePath.some((path)=>path === "meta" || path === "metadata" || path === "openGraph" || path === "seo") || hasTypeLike(sourcePath) || hasTypeLike(resultPath) || typeof endPath == "string" && denylist.has(endPath));
}, denylist = /* @__PURE__ */ new Set([
    "color",
    "colour",
    "currency",
    "email",
    "format",
    "gid",
    "hex",
    "href",
    "hsl",
    "hsla",
    "icon",
    "id",
    "index",
    "key",
    "language",
    "layout",
    "link",
    "linkAction",
    "locale",
    "lqip",
    "page",
    "path",
    "ref",
    "rgb",
    "rgba",
    "route",
    "secret",
    "slug",
    "status",
    "tag",
    "template",
    "theme",
    "type",
    "textTheme",
    "unit",
    "url",
    "username",
    "variant",
    "website"
]);
function isValidDate(dateString) {
    return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? !!Date.parse(dateString) : !1;
}
function isValidURL(url) {
    try {
        new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
    } catch  {
        return !1;
    }
    return !0;
}
function hasTypeLike(path) {
    return path.some((segment)=>typeof segment == "string" && segment.match(/type/i) !== null);
}
const TRUNCATE_LENGTH = 20;
function stegaEncodeSourceMap(result, resultSourceMap, config) {
    const { filter, logger, enabled } = config;
    if (!enabled) {
        const msg = "config.enabled must be true, don't call this function otherwise";
        throw logger?.error?.(`[@sanity/client]: ${msg}`, {
            result,
            resultSourceMap,
            config
        }), new TypeError(msg);
    }
    if (!resultSourceMap) return logger?.error?.("[@sanity/client]: Missing Content Source Map from response body", {
        result,
        resultSourceMap,
        config
    }), result;
    if (!config.studioUrl) {
        const msg = "config.studioUrl must be defined";
        throw logger?.error?.(`[@sanity/client]: ${msg}`, {
            result,
            resultSourceMap,
            config
        }), new TypeError(msg);
    }
    const report = {
        encoded: [],
        skipped: []
    }, resultWithStega = encodeIntoResult(result, resultSourceMap, ({ sourcePath, sourceDocument, resultPath, value })=>{
        if ((typeof filter == "function" ? filter({
            sourcePath,
            resultPath,
            filterDefault,
            sourceDocument,
            value
        }) : filterDefault({
            sourcePath,
            resultPath,
            value
        })) === !1) return logger && report.skipped.push({
            path: prettyPathForLogging(sourcePath),
            value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
            length: value.length
        }), value;
        logger && report.encoded.push({
            path: prettyPathForLogging(sourcePath),
            value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
            length: value.length
        });
        const { baseUrl, workspace, tool } = resolveStudioBaseRoute(typeof config.studioUrl == "function" ? config.studioUrl(sourceDocument) : config.studioUrl);
        if (!baseUrl) return value;
        const { _id: id, _type: type, _projectId: projectId, _dataset: dataset } = sourceDocument;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])(value, {
            origin: "sanity.io",
            href: createEditUrl({
                baseUrl,
                workspace,
                tool,
                id,
                type,
                path: sourcePath,
                ...!config.omitCrossDatasetReferenceData && {
                    dataset,
                    projectId
                }
            })
        }, // We use custom logic to determine if we should skip encoding
        !1);
    });
    if (logger) {
        const isSkipping = report.skipped.length, isEncoding = report.encoded.length;
        if ((isSkipping || isEncoding) && ((logger?.groupCollapsed || logger.log)?.("[@sanity/client]: Encoding source map into result"), logger.log?.(`[@sanity/client]: Paths encoded: ${report.encoded.length}, skipped: ${report.skipped.length}`)), report.encoded.length > 0 && (logger?.log?.("[@sanity/client]: Table of encoded paths"), (logger?.table || logger.log)?.(report.encoded)), report.skipped.length > 0) {
            const skipped = /* @__PURE__ */ new Set();
            for (const { path } of report.skipped)skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
            logger?.log?.("[@sanity/client]: List of skipped paths", [
                ...skipped.values()
            ]);
        }
        (isSkipping || isEncoding) && logger?.groupEnd?.();
    }
    return resultWithStega;
}
function prettyPathForLogging(path) {
    return toString(jsonPathToStudioPath(path));
}
var stegaEncodeSourceMap$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    stegaEncodeSourceMap
});
;
 //# sourceMappingURL=stegaEncodeSourceMap.js.map
}}),
"[project]/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dequal": (()=>dequal)
});
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}}),
"[project]/node_modules/@sanity/next-loader/dist/hooks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDraftModeEnvironment": (()=>useDraftModeEnvironment),
    "useDraftModePerspective": (()=>useDraftModePerspective),
    "useIsLivePreview": (()=>useIsLivePreview),
    "useIsPresentationTool": (()=>useIsPresentationTool),
    "usePresentationQuery": (()=>usePresentationQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/next-loader/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaEncodeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-effect-event/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function useDraftModeEnvironment() {
    const subscribe2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDraftModeEnvironment.useCallback[subscribe2]": (listener)=>(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentListeners"].add(listener), ({
                "useDraftModeEnvironment.useCallback[subscribe2]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentListeners"].delete(listener)
            })["useDraftModeEnvironment.useCallback[subscribe2]"])
    }["useDraftModeEnvironment.useCallback[subscribe2]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe2, {
        "useDraftModeEnvironment.useSyncExternalStore": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environment"]
    }["useDraftModeEnvironment.useSyncExternalStore"], {
        "useDraftModeEnvironment.useSyncExternalStore": ()=>"checking"
    }["useDraftModeEnvironment.useSyncExternalStore"]);
}
function useDraftModePerspective() {
    const subscribe2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDraftModePerspective.useCallback[subscribe2]": (listener)=>(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perspectiveListeners"].add(listener), ({
                "useDraftModePerspective.useCallback[subscribe2]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perspectiveListeners"].delete(listener)
            })["useDraftModePerspective.useCallback[subscribe2]"])
    }["useDraftModePerspective.useCallback[subscribe2]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe2, {
        "useDraftModePerspective.useSyncExternalStore": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perspective"]
    }["useDraftModePerspective.useSyncExternalStore"], {
        "useDraftModePerspective.useSyncExternalStore": ()=>"checking"
    }["useDraftModePerspective.useSyncExternalStore"]);
}
function useIsPresentationTool() {
    const environment2 = useDraftModeEnvironment();
    return environment2 === "checking" ? null : environment2 === "presentation-iframe" || environment2 === "presentation-window";
}
function useIsLivePreview() {
    const environment2 = useDraftModeEnvironment();
    return environment2 === "checking" ? null : environment2 === "presentation-iframe" || environment2 === "presentation-window" || environment2 === "live";
}
function reducer(state, { type, payload }) {
    switch(type){
        case "query-change":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state, payload) ? state : {
                ...state,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.data, payload.data) ? state.data : payload.data,
                sourceMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.sourceMap, payload.sourceMap) ? state.sourceMap : payload.sourceMap,
                perspective: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.perspective, payload.perspective) ? state.perspective : payload.perspective
            };
        default:
            return state;
    }
}
const initialState = {
    data: null,
    sourceMap: null,
    perspective: null
};
function subscribe(listener) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkListeners"].add(listener), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkListeners"].delete(listener);
}
const EMPTY_QUERY_PARAMS = {}, LISTEN_HEARTBEAT_INTERVAL = 1e4;
function usePresentationQuery(props) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState), { query, params = EMPTY_QUERY_PARAMS, stega = !0 } = props, comlink$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "usePresentationQuery.useSyncExternalStore[comlink$1]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlink"]
    }["usePresentationQuery.useSyncExternalStore[comlink$1]"], {
        "usePresentationQuery.useSyncExternalStore[comlink$1]": ()=>null
    }["usePresentationQuery.useSyncExternalStore[comlink$1]"]), projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "usePresentationQuery.useSyncExternalStore[projectId]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkProjectId"]
    }["usePresentationQuery.useSyncExternalStore[projectId]"], {
        "usePresentationQuery.useSyncExternalStore[projectId]": ()=>null
    }["usePresentationQuery.useSyncExternalStore[projectId]"]), dataset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "usePresentationQuery.useSyncExternalStore[dataset]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$next$2d$loader$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkDataset"]
    }["usePresentationQuery.useSyncExternalStore[dataset]"], {
        "usePresentationQuery.useSyncExternalStore[dataset]": ()=>null
    }["usePresentationQuery.useSyncExternalStore[dataset]"]), perspective2 = useDraftModePerspective(), handleQueryHeartbeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "usePresentationQuery.useEffectEvent[handleQueryHeartbeat]": (comlink2)=>{
            if (!projectId || !dataset || !perspective2) {
                console.warn("usePresentationQuery: projectId, dataset and perspective must be set", {
                    projectId,
                    dataset,
                    perspective: perspective2
                });
                return;
            }
            perspective2 === "checking" || perspective2 === "unknown" || comlink2.post("loader/query-listen", {
                projectId,
                dataset,
                perspective: perspective2,
                query,
                params,
                heartbeat: LISTEN_HEARTBEAT_INTERVAL
            });
        }
    }["usePresentationQuery.useEffectEvent[handleQueryHeartbeat]"]), handleQueryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "usePresentationQuery.useEffectEvent[handleQueryChange]": (event)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])({
                projectId,
                dataset,
                query,
                params
            }, {
                projectId: event.projectId,
                dataset: event.dataset,
                query: event.query,
                params: event.params
            }) && dispatch({
                type: "query-change",
                payload: {
                    data: event.result,
                    sourceMap: event.resultSourceMap || null,
                    perspective: event.perspective
                }
            });
        }
    }["usePresentationQuery.useEffectEvent[handleQueryChange]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePresentationQuery.useEffect": ()=>{
            if (!comlink$1) return;
            const unsubscribe = comlink$1.on("loader/query-change", handleQueryChange), interval = setInterval({
                "usePresentationQuery.useEffect.interval": ()=>handleQueryHeartbeat(comlink$1)
            }["usePresentationQuery.useEffect.interval"], LISTEN_HEARTBEAT_INTERVAL);
            return ({
                "usePresentationQuery.useEffect": ()=>{
                    clearInterval(interval), unsubscribe();
                }
            })["usePresentationQuery.useEffect"];
        }
    }["usePresentationQuery.useEffect"], [
        comlink$1
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePresentationQuery.useMemo": ()=>stega && state.sourceMap ? {
                ...state,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaEncodeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaEncodeSourceMap"])(state.data, state.sourceMap, {
                    enabled: !0,
                    studioUrl: "/"
                })
            } : state
    }["usePresentationQuery.useMemo"], [
        state,
        stega
    ]);
}
;
 //# sourceMappingURL=hooks.js.map
}}),
}]);

//# sourceMappingURL=_9501238f._.js.map