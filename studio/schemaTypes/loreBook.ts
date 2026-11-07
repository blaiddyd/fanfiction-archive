import { defineType, defineField } from "sanity";

export const loreBook = defineType({
    name: "loreBook",
    title: "Lore Book",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 70 },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "universe",
            type: "reference",
            to: [{ type: "universe" }]
        }),
        defineField({
            name: "loreEntries",
            type: "array",
            of: [{ type: "reference", to: [{ type: "loreEntry"}] }]
        })
    ]
})