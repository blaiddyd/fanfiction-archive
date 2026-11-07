import { defineField, defineType } from "sanity";

export const universe = defineType({
    name: "universe",
    title: "Universe",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "name", maxLength: 70 },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "cover",
            type: "altImage"
        }),
        defineField({
            name: "loreEntries",
            type: "array",
            of: [{ type: "reference", to: [{ type: "loreEntry" }] }]
        })
    ]
})