import { defineQuery } from "next-sanity";

export const RECENT_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(_createdAt desc)[0...3] {
        _id, tytul, opis, slug, zawartosc, image
    }    
`)