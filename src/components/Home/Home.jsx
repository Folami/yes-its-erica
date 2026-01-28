import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Pricing from '../Pricing/Pricing'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'

function Home({ onLoginClick, onFreePreviewClick }) {
  return (
    <>
      <Navbar onLoginClick={onLoginClick} />
      <main>
        <Hero 
            onLoginClick={onLoginClick} 
            onFreePreviewClick={onFreePreviewClick} 
        />
        <About />
        <Gallery />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default Home
