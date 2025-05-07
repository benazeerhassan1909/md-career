const CHUNK_PUBLIC_PATH = "server/app/sitemap.xml/route.js";
const runtime = require("../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_@sanity_491a448e._.js");
runtime.loadChunk("server/chunks/node_modules_b913f7ae._.js");
runtime.loadChunk("server/chunks/[root of the server]__6712ee30._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/sitemap.xml/route/actions.js [app-rsc] (server actions loader, ecmascript)", CHUNK_PUBLIC_PATH);
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/src/app/sitemap--route-entry.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/src/app/sitemap--route-entry.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
