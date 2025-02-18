import React from 'react'
import Container from './Container'

function ServicesSection() {
  return (
    <section className='py-section bg-light'>
        <Container>
            <h2 className='heading2 mb-title text-center'>Usługi pomocy drogowej</h2>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='text-center space-y-5 bg-white rounded-lg p-5 shadow-xl'>
                    <h3 className='heading3 text-dark-orange'>Pomoc Drogowa Zgorzelec</h3>
                    <p className='normal-text'>
                        W sytuacjach nagłych, takich jak awarie samochodowe czy kolizje, niezawodna pomoc drogowa w Zgorzelcu jest nieoceniona. Nasz doświadczony zespół oferuje kompleksowe wsparcie dla kierowców, którzy znaleźli się w trudnej sytuacji na drodze. Obsługujemy zarówno pojazdy osobowe, dostawcze, jak i ciężarowe, dostarczając usługi na najwyższym poziomie. Nasza oferta obejmuje holowanie pojazdów, drobne naprawy na miejscu zdarzenia oraz transport do najbliższego warsztatu. Dzięki nowoczesnemu sprzętowi i szybkiej reakcji, gwarantujemy bezpieczeństwo i komfort podróży. Wybierz naszą pomoc drogową w Zgorzelcu, aby mieć pewność, że każda sytuacja na drodze zostanie sprawnie rozwiązana.
                    </p>
                </div>
                <div className='text-center space-y-5 bg-white rounded-lg p-5 shadow-xl'>
                    <h3 className='heading3 text-dark-orange'>Mobilny Serwis Zgorzelec</h3>
                    <p className='normal-text'>
                        Mobilny serwis w Zgorzelcu to odpowiedź na potrzeby kierowców, którzy nie mogą dotrzeć do warsztatu. Nasze usługi obejmują kompleksowe naprawy w miejscu awarii – od wymiany opon, przez diagnostykę komputerową, aż po naprawy układów mechanicznych. Dzięki mobilnemu serwisowi możesz liczyć na szybkie i skuteczne rozwiązanie problemu, niezależnie od lokalizacji. Obsługujemy drogi lokalne, krajowe oraz autostrady w okolicach Zgorzelca. Nasz zespół to wykwalifikowani technicy, którzy dysponują profesjonalnym sprzętem, aby zapewnić najwyższą jakość usług. Mobilny serwis Zgorzelec – zawsze tam, gdzie nas potrzebujesz.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ServicesSection