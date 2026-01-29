import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Pricing from '../Pricing/Pricing'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'

function Home({ onLoginClick, onFreePreviewClick, onBookSessionClick, onNavigate }) {
  return (
    <>
      <Navbar onLoginClick={onLoginClick} onNavigate={onNavigate} />
      <main>
        <Hero 
            onLoginClick={onLoginClick} 
            onFreePreviewClick={onFreePreviewClick} 
            onBookSessionClick={onBookSessionClick}
            onGalleryClick={() => onNavigate('photo-gallery')}
            onVideoCollectionClick={() => onNavigate('video-collection')}
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
