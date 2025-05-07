import type { StructureResolver } from 'sanity/structure'
import {  CogIcon } from '@sanity/icons'


// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('MD Career')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings') // 👈 Forces a single document
        ),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("job").title("Jobs"),
      S.documentTypeListItem("careerSubmission").title("Career Applications"),
      S.documentTypeListItem("careerForm").title("Forms"),
      S.documentTypeListItem("faq").title("FAQ"),

    ])
