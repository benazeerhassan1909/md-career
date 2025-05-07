module.exports = {

"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(frontend)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(frontend)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/sanity/lib/queries.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HOME_PAGE_QUERY": (()=>HOME_PAGE_QUERY),
    "JOBS_QUERY": (()=>JOBS_QUERY),
    "JOB_QUERY": (()=>JOB_QUERY),
    "JOB_SETTINGS_QUERY": (()=>JOB_SETTINGS_QUERY),
    "OG_IMAGE_QUERY": (()=>OG_IMAGE_QUERY),
    "PAGE_QUERY": (()=>PAGE_QUERY),
    "POSTS_QUERY": (()=>POSTS_QUERY),
    "POST_QUERY": (()=>POST_QUERY),
    "REDIRECTS_QUERY": (()=>REDIRECTS_QUERY),
    "SITEMAP_QUERY": (()=>SITEMAP_QUERY)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/groq/lib/groq.js [app-rsc] (ecmascript)");
;
const POSTS_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);
const POST_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  "seo": {
    "title": coalesce(seo.title, title, ""),
     "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  author->{
    name,
    image
  },
  relatedPosts[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);
const PAGE_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[_type == "page" && slug.current == $slug][0]{
     ...,
  "seo": {
    "title": coalesce(seo.title, title, ""),
     "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  content[] {
    ...,
    
    // Handle the 'jobs' content block
    _type == "jobs" => {
      ...,
      jobs[]->{
        _id,
        title,
        body,
        location,
        slug,
        "text": pt::text(body)
      }
    },
    
    // Handle the 'splitImage' content block
    _type == "splitImage" => {
      ...,
      "video": {
        "url": video.asset->url,
        "assetId": video.asset->_id
      }
    }
  }
}
`);
const HOME_PAGE_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[_id == "siteSettings"][0]{
    homePage->{
      ...,
      content[]{
        ...,
        _type == "jobs" => {
          ...,
          jobs[]->
        },
         // Handle the 'splitImage' content block
    _type == "splitImage" => {
      ...,
      "video": {
        "url": video.asset->url,
        "assetId": video.asset->_id
      }
    }
      }      
    }
  }`);
const REDIRECTS_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`
  *[_type == "redirect" && isEnabled == true] {
      source,
      destination,
      permanent
  }
`);
const OG_IMAGE_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`
  *[_id == $id][0]{
    title,
    "image": mainImage.asset->{
      url,
      metadata {
        palette
      }
    }
  }    
`);
const SITEMAP_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`
*[_type in ["page", "post"] && defined(slug.current)] {
    "href": select(
      _type == "page" => "/" + slug.current,
      _type == "post" => "/posts/" + slug.current,
      slug.current
    ),
    _updatedAt
}
`);
const JOBS_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`
*[_type == "job"]{
  _id,
  title,
  body,
  location,
  "text": pt::text(body)
}
`);
const JOB_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`
*[_type == "job" && slug.current == $slug][0] {
  _id,
  heroimage,
  title,
  body,
  location,
  jobdescription,
  skills,
  benefits,
  experiences,
  benefitsheading,
  btntext,
  btnurl,
  chooseForm
}
`);
const JOB_SETTINGS_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[_type == "siteSettings" && _id == "siteSettings"][0]{
    jobCTASettings {
      title,
      text,
      btnText,
      btnurl
    }
  }`);
}}),
"[project]/src/app/(frontend)/job/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>JobDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/live.ts [app-rsc] (ecmascript)"); // or your fetch method
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/queries.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function JobDetailPage({ params }) {
    const { slug } = params;
    const { data: job } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOB_QUERY"],
        params: {
            slug
        }
    });
    // const { data: jobCTASettings } = await sanityFetch({ query: JOB_SETTINGS_QUERY, params: { slug } });
    const { data: jobSettings } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOB_SETTINGS_QUERY"]
    });
    const jobCTASettings = jobSettings?.jobCTASettings;
    if (!job) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Job not found"
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
            lineNumber: 24,
            columnNumber: 16
        }, this);
    }
    const components = {
        list: {
            bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        paddingLeft: '20px',
                        listStyle: 'disc'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 28,
                    columnNumber: 76
                }, this),
            number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    style: {
                        paddingLeft: '20px',
                        listStyle: 'decimal'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 29,
                    columnNumber: 76
                }, this)
        },
        block: {
            left: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-left",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 37
                }, this),
            center: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 34,
                    columnNumber: 39
                }, this),
            right: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-right",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 38
                }, this),
            normal: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 76
                }, this),
            h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: '32px',
                        fontWeight: 'bold',
                        margin: '10px 0'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 72
                }, this),
            h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '10px 0'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 72
                }, this),
            h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        margin: '10px 0'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 39,
                    columnNumber: 72
                }, this)
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "main",
            className: "site-main",
            role: "main",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "singleopening-page-banner static-banner submit_resume_banner mdinc-after-img-space",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md-color-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "banner-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mdinc-banner-title mdinc-title",
                                    children: job.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "banner-content-inner mdinc-banner mdinc-has-full",
                                    children: [
                                        job.heroimage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[400px] w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(job.heroimage).url(),
                                                alt: job.title,
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: "object-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                            width: "100%",
                                            viewBox: "0 0 1920 600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                    children: `.a{fill:#fff0bd;}.b,.e,.h{fill:none;}.c{mix-blend-mode:darken;}.c,.e,.f,.g,.i{isolation:isolate;}.d{fill:#d1b34d;}.e,.h{stroke:#000;}.e{stroke-width:3px;mix-blend-mode:soft-light;}.f,.g{mix-blend-mode:overlay;}.f{clip-path:url(#a);}.h{stroke-width:4px;}.i{mix-blend-mode:luminosity;}.j{fill:url(#b);}.k{fill:#bdd0fb;}.l{fill:url(#c);}.m{fill:#91b3fa;}.n{opacity:0.304;}.o,.q{opacity:0.6;}.p,.q{fill:#fff;}.r{opacity:0.405;fill:url(#e);}.s{clip-path:url(#f);}.t{fill:#ffeeb4;}.u{fill:url(#g);}.v{fill:url(#h);}.w{fill:url(#i);}.x{fill:url(#j);}.y{fill:url(#k);}.z{fill:url(#l);}.aa{fill:url(#m);}.ab{fill:url(#n);}.ac{fill:url(#o);}.ad{stroke:none;}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "jobprofile-short-description-section jobprofile-skills-section",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: job.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                                value: job.body,
                                components: components
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 41
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "jobprofile-skills-section",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 col-md-6 col-sm-12 col-xs-12 job-profile-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "list-of-requirements",
                                        id: "list-of-requirements",
                                        children: Array.isArray(job.skills) && job.skills.length > 0 && job.skills.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "job-post-details",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "skills-list",
                                                        children: Array.isArray(item.skillitems) && item.skillitems.length > 0 && item.skillitems.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: skill
                                                            }, `skill-${index}`, false, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 65
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 49
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 col-md-6 col-sm-12 col-xs-12 job-profile-sidebar",
                                    style: {
                                        position: 'relative'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wp-block-template-part",
                                        style: {
                                            position: 'sticky',
                                            top: '16px',
                                            height: 'calc(100vh - 92px)',
                                            overflowY: 'auto'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wp-block-multidots-multipurpose-block is-block-center jobprofile-sidebar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "wp-block-heading has-text-align-center has-text-color",
                                                    id: "mdcareer-perks-and-benifits",
                                                    style: {
                                                        color: '#000000'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: job.benefitsheading
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wp-block-group perks-sidebar-col-wrap has-global-padding is-layout-constrained wp-block-group-is-layout-constrained",
                                                    children: [
                                                        Array.isArray(job.benefits) ? job.benefits?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "wp-block-column is-layout-flow wp-block-column-is-layout-flow",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 53
                                                            }, this)) : null,
                                                        job.btntext && job.btnurl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "wp-block-columns perks-btn is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "wp-block-column is-layout-flow wp-block-column-is-layout-flow",
                                                                style: {
                                                                    flexBasis: '50%'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: job.btnurl,
                                                                        "data-type": "link",
                                                                        "data-id": "https://careers.multidots.com/#mdcareer-perks-and-benifits/",
                                                                        children: job.btntext
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "singleopening-contact-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "contact-form",
                                className: "contact-form-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        method: "post",
                                        className: "wpcf7-form tttt mdcareer-submit-form mdinc-section-bottom-margin",
                                        id: "submit-resume",
                                        encType: "multipart/form-data",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdinc-form-field",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mdinc-form-field-wrapper-container",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "text-99",
                                                        className: "wpcf7-form-control wpcf7-text wpcf7-validates-as-required fullname",
                                                        required: true,
                                                        placeholder: "Full Name*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-submit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "submit",
                                                    value: "Apply Now",
                                                    className: "wpcf7-form-control wpcf7-submit mdinc-apply-btn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        method: "post",
                                        className: "wpcf7-form tttt mdcareer-submit-form mdinc-section-bottom-margin",
                                        id: "submit-resume",
                                        encType: "multipart/form-data",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "_wpcf7",
                                                        value: "25480",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "_wpcf7_version",
                                                        value: "4.7",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "_wpcf7_locale",
                                                        value: "en_US",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "_wpcf7_unit_tag",
                                                        value: "wpcf7-f25480-o1",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "hidden",
                                                        name: "_wpnonce",
                                                        value: "c33a81d314",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdinc-form-field",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mdinc-form-field-wrapper-container",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-form-control-wrap text-99 mdinc-form-field-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "text-99",
                                                                size: "40",
                                                                className: "wpcf7-form-control wpcf7-text wpcf7-validates-as-required fullname",
                                                                "aria-required": "true",
                                                                "aria-invalid": "false",
                                                                placeholder: "Full Name*",
                                                                autoComplete: "off"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-not-valid-tip fullname-error mdinc-error"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdinc-source-fileUpload",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mdinc-file",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-form-control-wrap file-278 mdinc-btn",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                id: "mdinc-contact-form-file",
                                                                name: "file-278",
                                                                size: "40",
                                                                className: "wpcf7-form-control wpcf7-file wpcf7-validates-as-required mdinc-contact-form-file",
                                                                "aria-required": "true",
                                                                "aria-invalid": "false",
                                                                autoComplete: "off"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-not-valid-tip file-error mdinc-info mdinc-error",
                                                            children: "No file chosen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "file-format",
                                                            children: [
                                                                "Allowed formats*: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: ".pdf, .doc"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 63
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 md-career-custom-checkbox",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "wpcf7-form-control-wrap checkbox-720",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "wpcf7-list-item first last",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        name: "checkbox-720[]",
                                                                        value: "",
                                                                        className: "privcy",
                                                                        id: "privacy-checkbox",
                                                                        autoComplete: "off"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "wpcf7-list-item-label"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mdinc-checkbox-content",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "privacy-checkbox",
                                                            children: [
                                                                "I give my consent to the storage and processing of my personal data by Multidots as per their",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://www.multidots.com/privacy-policy/",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: "privacy policy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                "compliance."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "wpcf7-not-valid-tip privcy-error mdinc-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-submit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "submit",
                                                        value: "Apply Now",
                                                        className: "wpcf7-form-control wpcf7-submit mdinc-apply-btn",
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ajax-loader"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wpcf7-response-output wpcf7-display-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wpcf7-response-output wpcf7-display-none wpcf7-validation-errors general-error-form",
                                                role: "alert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wpcf7-response-output wpcf7-display-none wpcf7-validation-errors general-error-form resume-submit-success",
                                                role: "alert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdinc-loaderOuter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mdinc-loader"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 161,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mdinc-callto-action mdinc-section-bottom-margin mdinc-has-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mdinc-callto-action-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdinc-callto-action-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "apply-anyway",
                                        children: jobCTASettings?.title || "Are you interested but do not see a position that fits?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: jobCTASettings?.text || "Get ready to rediscover yourself!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                lineNumber: 288,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdinc-callto-action-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "has-text-align-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn orange-btn",
                                        href: "https://careers.multidots.com/submit-resume",
                                        children: [
                                            " ",
                                            jobCTASettings?.btnText || "Apply Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                                lineNumber: 296,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                        lineNumber: 287,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
                    lineNumber: 286,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/job/[slug]/page.tsx",
            lineNumber: 45,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/app/(frontend)/job/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(frontend)/job/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_3f555e8b._.js.map