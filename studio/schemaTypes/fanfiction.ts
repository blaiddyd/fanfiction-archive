import { defineType, defineField } from "sanity";

export const fanfiction = defineType({
    name: "fanfiction",
    title: "Fanfiction",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "summary",
            type: "text"
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
            options: { layout: "tags" },
        }),
        defineField({
            name: "chapters",
            type: "array",
            of: [{ type: "reference", to: [{ type: "chapter"}] }]
        }),
        defineField({
            name: "universe",
            type: "reference",
            to: [{ type: "universe" }]
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 70
            }
        })
    ]
})