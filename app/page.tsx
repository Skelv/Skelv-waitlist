import {Faq, Footer, Header, Hero, Mission, Vision } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <>
      <header >
        <Header/>
      </header>
      <main>
        <Hero/>
        <Mission/>
        <Vision/>
        <Faq/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home