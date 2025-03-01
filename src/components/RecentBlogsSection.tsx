import React, { Suspense } from 'react'
import Container from './Container'
import RecentBlogs from './RecentBlogs'

function RecentBlogsSection() {
  return (
    <section className='py-section bg-light'>
        <Container>
            <h2 className='heading2 text-center mb-title'>Ostatnie wpisy na bloga</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <RecentBlogs />
            </Suspense>
        </Container>
    </section>
  )
}

export default RecentBlogsSection