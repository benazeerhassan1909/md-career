
export default {
    name: 'pageSettings',
    title: 'Page Settings',
    type: 'document',
    // __experimental_actions: ['update', 'publish'], // Prevents creation and deletion
    
    fields: [
        {
            name: "mdheading",
            type: "string",
            title: "MD Post Page Heading",
            description: "Main heading for the MD post listing page",
        },
        {
            name: "mdsubheading",
            type: "string",
            title: "MD Post Subheading",
            description: "Secondary heading for the MD post listingpage",

        },
    ],
};
