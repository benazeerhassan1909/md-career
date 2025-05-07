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
  btnurl
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
"[project]/src/app/(frontend)/job/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Jobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/live.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/queries.ts [app-rsc] (ecmascript)");
;
;
;
;
async function Jobs() {
    const { data: jobs } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOBS_QUERY"]
    });
    console.log(jobs);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto grid grid-cols-1 gap-6 p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-center",
                        children: "Current Openings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-1 divide-y divide-blue-100",
                        children: jobs.map((job)=>(console.log(job), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "block p-4 hover:text-blue-500",
                                    href: `/job/${job?.slug?.current}`,
                                    children: job?.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, this)
                            }, job._id, false, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "← Return home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "wp-block-group site-main has-global-padding is-layout-constrained wp-block-group-is-layout-constrained",
                id: "wp--skip-link--target",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wp-block-group container is-layout-flow wp-block-group-is-layout-flow",
                    style: {
                        marginTop: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "wp-block-heading has-text-align-center mdinc-title",
                                id: "h-current-openings",
                                children: "Current Openings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-multidots-multipurpose-block is-block-center has-background-size mdinc-banner mdinc-has-full mdinc-section-bottom-margin",
                                style: {
                                    backgroundPosition: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                        className: "wp-block-image aligncenter size-large img-desktop",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                fetchpriority: "high",
                                                decoding: "async",
                                                width: 3840,
                                                height: 1200,
                                                src: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024",
                                                alt: "Current Openings Banner",
                                                className: "wp-image-40056 perfmatters-lazy loaded",
                                                "data-src": "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024",
                                                "data-srcset": "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w",
                                                "data-sizes": "(max-width: 3840px) 100vw, 3840px",
                                                loading: "lazy",
                                                sizes: "(max-width: 3840px) 100vw, 3840px",
                                                srcSet: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w",
                                                "data-was-processed": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    fetchpriority: "high",
                                                    decoding: "async",
                                                    width: 3840,
                                                    height: 1200,
                                                    src: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024",
                                                    alt: "Current Openings Banner",
                                                    className: "wp-image-40056",
                                                    srcSet: "https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w",
                                                    sizes: "(max-width: 3840px) 100vw, 3840px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                        className: "wp-block-image aligncenter size-full img-mob",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                decoding: "async",
                                                width: 1024,
                                                height: 320,
                                                src: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20320'%3E%3C/svg%3E",
                                                alt: "Current Openings Mobile Banner",
                                                className: "wp-image-42922 perfmatters-lazy",
                                                "data-src": "https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?quality=90",
                                                "data-srcset": "https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=768,240 768w",
                                                "data-sizes": "(max-width: 1024px) 100vw, 1024px",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    decoding: "async",
                                                    width: 1024,
                                                    height: 320,
                                                    src: "https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?quality=90",
                                                    alt: "Current Openings Mobile Banner",
                                                    className: "wp-image-42922",
                                                    srcSet: "https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=768,240 768w",
                                                    sizes: "(max-width: 1024px) 100vw, 1024px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-multidots-multipurpose-block is-block-center opening-page-outer mdinc-section-bottom-margin",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "position-block-outer open-position",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "title",
                                            children: "Open Positions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "details",
                                            children: [
                                                "We are looking for people who have a genuine interest in ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "serving people"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 94
                                                }, this),
                                                ", a passion for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "solving problems"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 51
                                                }, this),
                                                ", thriving for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "productivity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 99
                                                }, this),
                                                ", and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "love WordPress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 41
                                                }, this),
                                                " — if that's you, we would love to connect with you!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "open-position-accordion",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "position-heading",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Position"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "positions-lists",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "position-details-main",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "position-details-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "position-name",
                                                                        children: "Sr. WordPress Engineer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "job-location",
                                                                        children: "Asia"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "position-details-body",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "position-detail-description",
                                                                        children: "The hiring process for this role is currently paused and will reopen in early 2025. If you'd like us to reconnect when hiring resumes, we encourage you to submit your application."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "position-apply-btn",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://careers.multidots.com/careers/sr-wordpress-developer-l4/#list-of-requirements",
                                                                            children: "Learn more"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wp-block-multidots-multipurpose-block is-block-center has-background-size mdcaeer-councelling-section-main mdinc-width-970 mdinc-section-bottom-margin full-width-column",
                                style: {
                                    backgroundImage: 'url(https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/opening-softskill.webp)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wp-block-columns soft-skill-clms is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wp-block-column career-councelling-section-banner is-layout-flow wp-block-column-is-layout-flow",
                                            style: {
                                                flexBasis: '30%'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "wp-block-image size-large is-resized",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        decoding: "async",
                                                        width: 519,
                                                        height: 519,
                                                        src: "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519",
                                                        alt: "Anil Gupta",
                                                        className: "wp-image-58038 perfmatters-lazy loaded",
                                                        style: {
                                                            objectFit: 'cover',
                                                            width: '280px',
                                                            height: '280px'
                                                        },
                                                        "data-src": "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519",
                                                        "data-srcset": "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w",
                                                        "data-sizes": "(max-width: 519px) 100vw, 519px",
                                                        loading: "lazy",
                                                        sizes: "(max-width: 519px) 100vw, 519px",
                                                        srcSet: "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w",
                                                        "data-was-processed": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            decoding: "async",
                                                            width: 519,
                                                            height: 519,
                                                            src: "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519",
                                                            alt: "Anil Gupta",
                                                            className: "wp-image-58038",
                                                            style: {
                                                                objectFit: 'cover',
                                                                width: '280px',
                                                                height: '280px'
                                                            },
                                                            srcSet: "https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w",
                                                            sizes: "(max-width: 519px) 100vw, 519px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wp-block-column career-councelling-section-details is-layout-flow wp-block-column-is-layout-flow",
                                            style: {
                                                flexBasis: '70%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "wp-block-heading has-white-color has-text-color has-link-color wp-elements-a30492464d122084cc82e95d1847ef5c",
                                                    id: "h-10-soft-skills-to-accelerate-your-career",
                                                    children: "10 Soft Skills to Accelerate Your Career"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "has-white-color has-text-color has-link-color wp-elements-e707f5c0e66edce4e5feb1b9a42a83b6",
                                                    children: "Check out our CEO, Anil Gupta's, latest article on Career Growth!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "wp-block-button councelling-section-details-btn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "wp-block-button__link wp-element-button",
                                                            href: "https://anilg.substack.com/p/10-soft-skills-to-accelerate-your-career",
                                                            target: "_blank",
                                                            rel: "noreferrer noopener",
                                                            children: "Read more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px'
                                },
                                "aria-hidden": "true",
                                className: "wp-block-spacer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                                lineNumber: 226,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/job/page.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/job/page.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/job/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/(frontend)/job/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(frontend)/job/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_1227c027._.js.map