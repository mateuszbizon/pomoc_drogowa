import { defineQuery } from "next-sanity";

export const RECENT_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(_createdAt desc)[0...3] {
        _id, tytul, opis, slug, zawartosc, image
    }    
`)

export const SINGLE_BLOG_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]{
        _id, tytul, opis, zawartosc, image, slug
    }    
`)