import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/sanity/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type PostCardProps = {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className='card'>
        <Link href={`/blog/${post.slug?.current}`}>
            <h3 className='text-xl font-medium line-clamp-1'>{post.tytul}</h3>
        </Link>
        <p className='normal-text line-clamp-2'>{post.opis}</p>
        {post.image && (
            <Image src={urlFor(post.image).url() || ""} alt={post.tytul || ""} width={200} height={200} className='aspect-video w-full rounded-lg' />
        )}
    </div>
  )
}

export default PostCard