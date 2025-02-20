import React from 'react'
import Container from './Container'
import ContactForm from './forms/ContactForm'

function ContactSection() {
  return (
    <section className='py-section'>
        <Container>
            <h2 className='heading2 text-center mb-title'>Skontakuj się z nami</h2>
            <div className='max-w-[600px] mx-auto bg-grey p-5 rounded-lg'>
                <ContactForm />
            </div>
        </Container>
    </section>
  )
}

export default ContactSection