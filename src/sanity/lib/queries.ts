import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
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
export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
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
    _type == "faqs" => {
      ...,
      faqs[]->{
        _id,
        title,
        body,
        "text": pt::text(body)
      }
    },
    _type == "formType" => {
          ...,
          formType[]->
          {
            ...
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
// ...all other queries

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
    homePage->{
      ...,
      content[]{
        ...,
        _type == "jobs" => {
          ...,
          jobs[]->
        },
        _type == "faqs" => {
          ...,
          faqs[]->
        },
         _type == "formType" => {
          ...,
          formType[]->
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
export const REDIRECTS_QUERY = defineQuery(`
  *[_type == "redirect" && isEnabled == true] {
      source,
      destination,
      permanent
  }
`);
export const OG_IMAGE_QUERY = defineQuery(`
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
export const SITEMAP_QUERY = defineQuery(`
*[_type in ["page", "post"] && defined(slug.current)] {
    "href": select(
      _type == "page" => "/" + slug.current,
      _type == "post" => "/posts/" + slug.current,
      slug.current
    ),
    _updatedAt
}
`)
export const JOBS_QUERY = defineQuery(`
*[_type == "job"]{
  _id,
  slug,
  title,
  body,
  location,
  "text": pt::text(body)
}
`)
export const JOB_QUERY = defineQuery(`
*[_type == "job" && slug.current == $slug][0] {
  _id,
  slug,
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
export const JOB_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings" && _id == "siteSettings"][0]{
    jobCTASettings {
      title,
      text,
      btnText,
      btnurl
    }
  }`
);

