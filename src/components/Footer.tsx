import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { getCurrentYear } from '@/lib/getCurrentYear'

function Footer() {
  return (
    <footer className='bg-black'>
        <Container>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                <figure className='sm:col-span-2 lg:col-span-1'>
                    <Image src={"/logo.png"} alt='Logo' width={200} height={200} />
                </figure>
                <div>
                    <h2 className='text-lg font-medium text-main-orange mb-3'>Na skróty</h2>
                    <ul className='space-y-2'>
                        <li>
                            <Link href={"/"} className={buttonVariants({ variant: "link2", size: "link" })}>Strona główna</Link>
                        </li>
                        <li>
                            <Link href={"/opinie"} className={buttonVariants({ variant: "link2", size: "link" })}>Opinie</Link>
                        </li>
                        <li>
                            <Link href={"/galeria"} className={buttonVariants({ variant: "link2", size: "link" })}>Galeria</Link>
                        </li>
                        <li>
                            <Link href={"/kontakt"} className={buttonVariants({ variant: "link2", size: "link" })}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-medium text-main-orange mb-3'>Dane kontaktowe</h2>
                    <ul className='space-y-2'>
                        <li className='text-white flex items-center gap-2'>
                            ul. Strumykowa 17 Zgorzelec
                        </li>
                        <li className='text-white flex items-center gap-2'>
                            ul. Broniewskiego 17 Łagów
                        </li>
                        <li>
                            <Link href={"mailto:mail@gmail.com"} className={buttonVariants({ variant: "link2", size: "link" })}>mail@gmail.com</Link>
                        </li>
                        <li>
                            <Link href={"tel:+48-111-222-333"} className={buttonVariants({ variant: "link2", size: "link" })}>111-222-333</Link>
                        </li>
                        <li className='text-white flex items-center gap-2'>
                            24/7
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
        <hr />
        <div className='text-center py-5'>
            <p className='text-white'>Pomoc Drogowa Artur Maciaszek {getCurrentYear()}</p>
        </div>
    </footer>
  )
}

export default Footer