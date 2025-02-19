import React from 'react'
import Container from './Container'
import { StarIcon } from '@heroicons/react/20/solid'

function WhyusSection() {
  return (
    <section className='py-section bg-gradient-to-br from-white to-light'>
        <Container>
            <div className='text-center space-y-5 mb-10'>
                <h2 className='heading2'>Dlaczego warto wybrać właśnie nas?</h2>
                <p className='normal-text text-xl text-green'>
                    Pomoc drogowa Artur Maciaszek specjaliści od pomocy drogowej w Zgorzelcu i okolicach w powiecie zgorzeleckim! 
                </p>
                <p className='normal-text'>
                    W <strong>Zgorzelcu</strong> działamy szybko i skutecznie, aby zapewnić Ci pełne wsparcie w każdej sytuacji drogowej. Nasza firma oferuje szeroki zakres usług pomocy drogowej, w tym mobilny serwis i lawetę. <strong>Pomoc drogowa Artur Maciaszek</strong> to firma, której możesz zaufać, niezależnie od problemów na drodze. Zadzwoń do nas, aby uzyskać natychmiastową pomoc.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className='text-center space-y-5'>
                    <div className='flex justify-center'>
                        <StarIcon className='text-yellow-500 size-10' />
                    </div>
                    <h3 className='heading3 text-dark-orange'>Profesjonalizm</h3>
                    <p className='normal-text'>
                        Wybierając Pomoc Drogowa Artur Maciaszek, zyskujesz pewność, że pracujesz z firmą o ponad 15-letnim doświadczeniu w branży pomocy drogowej. Nasz wykwalifikowany zespół techników doskonale rozumie potrzeby kierowców w trudnych sytuacjach na drodze, oferując skuteczną i fachową pomoc w każdej sytuacji.
                    </p>
                </div>
                <div className='text-center space-y-5'>
                    <div className='flex justify-center'>
                        <StarIcon className='text-yellow-500 size-10' />
                    </div>
                    <h3 className='heading3 text-dark-orange'>Szybkość reakcji</h3>
                    <p className='normal-text'>
                        Czas jest kluczowy w sytuacjach awaryjnych, dlatego nasz zespół działa błyskawicznie, aby dotrzeć do Ciebie jak najszybciej. Oferujemy całodobową pomoc drogową i gwarantujemy szybkie interwencje na trasie A4 oraz w Zgorzelcu i okolicy, minimalizując Twój stres i czas oczekiwania.
                    </p>
                </div>
                <div className='text-center space-y-5'>
                    <div className='flex justify-center'>
                        <StarIcon className='text-yellow-500 size-10' />
                    </div>
                    <h3 className='heading3 text-dark-orange'>Nowoczesna flota</h3>
                    <p className='normal-text'>
                        Nasze lawety i pojazdy serwisowe to nowoczesne maszyny, które zapewniają bezpieczny transport Twojego pojazdu w każdych warunkach. Dzięki regularnym przeglądom technicznym i nowoczesnym rozwiązaniom technologicznym, jesteśmy przygotowani do obsługi nawet najtrudniejszych zadań.
                    </p>
                </div>
                <div className='text-center space-y-5'>
                    <div className='flex justify-center'>
                        <StarIcon className='text-yellow-500 size-10' />
                    </div>
                    <h3 className='heading3 text-dark-orange'>Konkurencyjne ceny</h3>
                    <p className='normal-text'>
                        Oferujemy najwyższą jakość usług w przystępnych i transparentnych cenach. Nasz cennik jest prosty i bez ukrytych kosztów, co daje Ci pewność, że otrzymujesz uczciwą ofertę, dostosowaną do Twoich potrzeb, bez uszczerbku na jakości.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyusSection