import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

function Nav() {
  return (
    <nav className='fixed w-full bg-dark-orange py-3 z-10'>
        <Container>
            <div className='flex justify-between items-center'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt='Logo' width={200} height={200} />
                </Link>

                <ul className='hidden lg:flex gap-5'>
                    <li>
                        <Link href={"/"} className={buttonVariants({ variant: "link", size: "link" })}>
                            Strona Główna
                        </Link>
                    </li>
                    <li>
                        <HoverCard>
                            <HoverCardTrigger className={`${buttonVariants({ variant: "link", size: "link" })} cursor-default`}>
                                Usługi
                            </HoverCardTrigger>
                            <HoverCardContent className='flex flex-col gap-5'>
                                <Link href={"/pomoc-drogowa-zgorzelec"} className={buttonVariants({ variant: "link", size: "link" })}>
                                    Pomoc Drogowa Zgorzelec
                                </Link>
                                <Link href={"/mobilny-serwis-zgorzelec"} className={buttonVariants({ variant: "link", size: "link" })}>
                                    Mobilny Serwis Zgorzelec
                                </Link>
                                <Link href={"/pomoc-drogowa-a4"} className={buttonVariants({ variant: "link", size: "link" })}>
                                    Pomoc Drogowa A4
                                </Link>
                            </HoverCardContent>
                        </HoverCard>
                    </li>
                    <li>
                        <Link href={"/opinie"} className={buttonVariants({ variant: "link", size: "link" })}>
                            Opinie
                        </Link>
                    </li>
                    <li>
                        <Link href={"/galeria"} className={buttonVariants({ variant: "link", size: "link" })}>
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link href={"/kontakt"} className={buttonVariants({ variant: "link", size: "link" })}>
                            Kontakt
                        </Link>
                    </li>
                </ul>

                <Link href={"tel:+48-111-222-333"} className={`${buttonVariants({ variant: "primary" })} hidden lg:block`}>
                    Zadzwoń
                </Link>

                <div className='lg:hidden'>
                    <Button variant={"icon"} size={"icon"}>
                        <Bars3Icon />
                    </Button>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav