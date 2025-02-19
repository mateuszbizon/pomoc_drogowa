import React from 'react'
import Container from './Container'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
  

function PhotoGallerySection() {
  return (
    <section className='py-section bg-grey'>
        <Container>
            <h2 className='heading2 text-center mb-title'>Galeria zdjęć z naszych działań</h2>
            <Carousel opts={{ loop: true }}>
                <CarouselContent>
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                        <figure className='aspect-video'>
                            <Image src={"/laweta3.jpg"} alt='' width={200} height={200} className='size-full bg-cover rounded-lg' />
                        </figure>
                    </CarouselItem>
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                        <figure className='aspect-video'>
                            <Image src={"/laweta4.jpg"} alt='' width={200} height={200} className='size-full bg-cover rounded-lg' />
                        </figure>
                    </CarouselItem>
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                        <figure className='aspect-video'>
                            <Image src={"/laweta3.jpg"} alt='' width={200} height={200} className='size-full bg-cover rounded-lg' />
                        </figure>
                    </CarouselItem>
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                        <figure className='aspect-video'>
                            <Image src={"/laweta3.jpg"} alt='' width={200} height={200} className='size-full bg-cover rounded-lg' />
                        </figure>
                    </CarouselItem>
                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                        <figure className='aspect-video'>
                            <Image src={"/laweta3.jpg"} alt='' width={200} height={200} className='size-full bg-cover rounded-lg' />
                        </figure>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Container>
    </section>
  )
}

export default PhotoGallerySection