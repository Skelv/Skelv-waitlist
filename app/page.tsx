
import {BackToTop, Banner, Faq, Footer, Header, Hero, HowItWorks, Mission, Vision } from '@/components'

import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <BackToTop/>
        <Hero/>
        <Mission/>
        <Vision/>
        <HowItWorks/>
        <Faq/>
        <Banner/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home
