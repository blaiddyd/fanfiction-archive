import { defineQuery } from "groq";

// Wrapping queries in defineQuery lets `sanity typegen` find and type them.
export const UNIVERSES_QUERY = defineQuery(
  `*[_type == "universe"] | order(name asc) { _id, name, "slug": slug.current }`
);
