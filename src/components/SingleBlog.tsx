import { client } from '@/sanity/lib/client'
import { SINGLE_BLOG_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/sanity/types'
import { notFound } from 'next/navigation'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import markdownit from "markdown-it"

type SingleBlogProps = {
    slug: string
}

async function SingleBlog({ slug }: SingleBlogProps) {
    const post = await client.fetch(SINGLE_BLOG_QUERY, { slug }) as Post

    if (!post) return notFound()

    const parsedContent = markdownit().render(post.zawartosc || "")

  return (
    <>
        <section className='bg-gradient-to-br from-white to-light flex flex-col justify-center items-center min-h-[230px] p-10'>
            <h1 className='max-w-5xl text-center bg-black p-5 text-white heading1 mb-10'>{post.tytul}</h1>
            <Container>
                <p className='bigger-text'>{post.opis}</p>
            </Container>
        </section>

        <section className='py-section'>
            <Container>
                {post.image && (
                    <Image src={urlFor(post.image).url()} alt={post.tytul || ""} width={200} height={200} className='w-full max-w-[700px] aspect-video mx-auto rounded-lg mb-10' />
                )}
                {parsedContent && (
                    <article className='blog-content break-all' dangerouslySetInnerHTML={{ __html: parsedContent }}></article>
                )}
            </Container>
        </section>
    </>
  )
}

export default SingleBlog