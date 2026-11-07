import { defineType, defineField } from "sanity";

export const loreEntry = defineType({
    name: "loreEntry",
    title: "Lore Entry",
    type: "document", 
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "name", maxLength: 70 },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Character", value: "character" },
                    { title: "Term", value: "term" },
                    { title: "Location", value: "location" },
                    { title: "Event", value: "event" },
                    { title: "Timeline", value: "timeline" },
                    { title: "Concept Art", value: "concept-art" },
                ],
                layout: "dropdown",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "date",
            type: "date"
        }),
        defineField({
            name: "description", 
            type: "text"
        }),
        defineField({
            name: "images",
            type: "array",
            of: [{ type: "altImage" }]
        })

    ]
})