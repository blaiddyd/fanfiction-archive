import { defineField, defineType } from "sanity";

export const chapter = defineType({
    name: "chapter",
    title: "Chapter",
    type: "document",
    fields: [
        defineField({
            name: "chapterNumber",
            type: "number"
        }),
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
            name: "body",
            type: "array",
            of: [
                {
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "loreEntryRef",
                                title: "Lore Entry",
                                type: "object",
                                fields: [
                                    {
                                        name: "entry",
                                        type: "reference",
                                        to: [{ type: "loreEntry" }],
                                        validation: (rule) => rule.required()
                                    }
                                ]
                            }
                        ]
                    }
                },
                { type: "altImage" }
            ]
        })
    ]
})