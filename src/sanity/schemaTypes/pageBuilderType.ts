import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
    name: "pageBuilder",
    type: "array",
    of: [
        defineArrayMember({ type: "hero" }),
        defineArrayMember({ type: "splitImage" }),
        defineArrayMember({ type: "features" }),
        defineArrayMember({ type: "jobs" }),
        defineArrayMember({ type: "titleDescription" }),
        defineArrayMember({ type: "logoList" }),
        defineArrayMember({ type: "testimonialSlider" }),
        defineArrayMember({ type: "tabSection" }),
        defineArrayMember({ type: "imageTextSection" }),
        defineArrayMember({ type: "cardSection" }),
        defineArrayMember({ type: "clientList" }),
        defineArrayMember({ type: "banner" }),
        defineArrayMember({ type: "imageBlock" }),
        defineArrayMember({ type: "faqs" }),
        defineArrayMember({ type: "formType" }),
        defineArrayMember({ type: "threeColBox" }),
        defineArrayMember({ type: "Quote" }),
        defineArrayMember({ type: "List" }),

    ],
    options: {
        insertMenu: {
            views: [
                {
                    name: "grid",
                    previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
                },
            ],
        },
    },
});