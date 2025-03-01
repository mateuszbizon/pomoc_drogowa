import { client } from '@/sanity/lib/client'
import { RECENT_BLOGS_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/sanity/types'
import React from 'react'
import PostCard from './cards/PostCard'

async function RecentBlogs() {
    const posts = await client.fetch(RECENT_BLOGS_QUERY) as Post[]

  return (
    <div>
        {posts.length > 0 ? (
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        ) : (
            <p className='text-center normal-text'>Nie dodano jeszcze żadnych postów</p>
        )}
    </div>
  )
}

export default RecentBlogs