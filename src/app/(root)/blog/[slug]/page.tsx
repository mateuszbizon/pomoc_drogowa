import SingleBlog from '@/components/SingleBlog'
import React, { Suspense } from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function page({ params }: Props) {
    const slug = (await params).slug

  return (
    <div className='pt-20'>
        <Suspense fallback={<p>Loading...</p>}>
            <SingleBlog slug={slug} />
        </Suspense>
    </div>
  )
}

export default page