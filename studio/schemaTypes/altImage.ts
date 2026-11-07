import { defineField, defineType } from "sanity";

/**
 * Reusable image type that always requires alt text.
 * Use it anywhere with `type: "altImage"`.
 */
export const altImage = defineType({
    name: "altImage",
    title: "Image",
    type: "image",
    options: { hotspot: true },
    fields: [
        defineField({
            name: "alt",
            title: "Alternative Text",
            type: "string",
            description: "Describe the image for screen readers and when it fails to load.",
            validation: (rule) => rule.required().error("Alt text is required")
        }),
        defineField({
            name: "caption",
            type: "string"
        })
    ]
})
