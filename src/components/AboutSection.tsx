import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

function AboutSection() {
  return (
    <section className='py-section'>
        <Container>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='space-y-10'>
                    <figure className='max-w-[600px] mx-auto lg:max-w-none'>
                        <Image src={"/laweta1.jpg"} alt='' width={200} height={200} className='w-full rounded-lg' />
                    </figure>
                    <figure className='max-w-[600px] mx-auto lg:max-w-none'>
                        <Image src={"/laweta2.jpg"} alt='' width={200} height={200} className='w-full rounded-lg' />
                    </figure>
                </div>

                <div className='space-y-5 text-center lg:text-right'>
                    <h2 className='heading2'>Poznaj Pomoc Drogowa Artur Maciaszek</h2>
                    <p className='normal-text'>
                        Jesteśmy liderem w branży pomocy drogowej, działając nieprzerwanie przez ostatnie 15 lat. Nasze usługi świadczymy na terenie Zgorzelca oraz jego okolic. To obszar na którym zdobyliśmy zaufanie i uznanie licznych klientów, których zadowolenie potwierdza naszą skuteczność i profesjonalizm.
                    </p>
                    <p className='normal-text'>
                        Działając w wymagających realiach dróg krajowych, zdobyliśmy cenne doświadczenie, które pozwala nam sprostać każdemu wyzwaniu drogowemu. Nasz profesjonalny zespół to nie tylko wysoko wykwalifikowani specjaliści, ale również osoby, które doskonale rozumieją, jak stresujące i uciążliwe mogą być problemy na trasie. Dlatego zawsze dokładamy starań, aby zapewnić pomoc drogową, która jest zarówno skuteczna, jak i pełna zrozumienia dla potrzeb klienta.
                    </p>
                    <p className='normal-text'>
                        Nasze zaawansowane technologicznie rozwiązania są dowodem naszego profesjonalizmu i gwarancją bezpieczeństwa Twojego pojazdu. Bez względu na rodzaj usterki czy panujące warunki na drodze, jesteśmy zawsze gotowi do błyskawicznej reakcji, aby zapewnić Ci sprawną i niezawodną pomoc drogową w każdej sytuacji.
                    </p>
                    <Link href={"tel:+48-111-222-333"} className={buttonVariants()}>
                        Zadzwoń do nas
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection