import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bars3Icon } from '@heroicons/react/16/solid'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

function NavMobile() {
  return (
    <Sheet>
        <SheetTrigger className={buttonVariants({ variant: "icon", size: "icon" })}>
            <Bars3Icon />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-5'>
            <SheetHeader className='hidden'>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
            <Link href={"/"} className={buttonVariants({ variant: "link", size: "link" })}>
                Strona Główna
            </Link>
            <Link href={"/opinie"} className={buttonVariants({ variant: "link", size: "link" })}>
                Opinie
            </Link>
            <Link href={"/galeria"} className={buttonVariants({ variant: "link", size: "link" })}>
                Galeria
            </Link>
            <Link href={"/kontakt"} className={buttonVariants({ variant: "link", size: "link" })}>
                Kontakt
            </Link>
        </SheetContent>
    </Sheet>
  )
}

export default NavMobile