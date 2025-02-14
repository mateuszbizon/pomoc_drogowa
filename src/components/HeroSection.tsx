import React from 'react'
import Container from './Container'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

function HeroSection() {
  return (
    <header className='relative h-screen bg-car-header-small md:bg-car-header-medium xl:bg-car-header-big bg-center bg-cover z-0'>
        <div className='absolute inset-0 bg-black/40 -z-10'></div>
        <Container>
            <div className='h-screen flex flex-col justify-center gap-5 max-w-[800px]'>
                <h1 className='heading1 text-white uppercase'>Pomoc drogowa 24h Artur Maciaszek</h1>
                <p className='bigger-text uppercase text-white'>Mobilny Serwis Tir, A4, ZGORZELEC - ŁAGÓW - Całodobowa pomoc na drodze</p>
                <div>
                    <Link href="tel:+48-111-222-333" className={`${buttonVariants({ variant: "primary" })} text-xl`}>Zadzwoń</Link>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection